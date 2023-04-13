import React, { createRef } from 'react';
import { load } from '@iyunbao/utils';

function trace(text) {
  text = text.trim();
  const now = (window.performance.now() / 1000).toFixed(3);

  console.log(now, text);
}

function Peerconnection() {
  load.js('https://webrtc.github.io/adapter/adapter-latest.js'); // 浏览器兼容
  const localVideo = createRef();
  const remoteVideo = createRef();
  const startButton = createRef();
  const callButton = createRef();
  const hangupButton = createRef();

  let localStream;
  let remoteStream;

  let localPeerConnection;
  let remotePeerConnection;

  // Gets the name of a certain peer connection.
  function getPeerName(peerConnection) {
    return (peerConnection === localPeerConnection) ? 'localPeerConnection' : 'remotePeerConnection';
  }

  function getOtherPeer(peerConnection) {
    return (peerConnection === localPeerConnection) ? remotePeerConnection : localPeerConnection;
  }

  const gotLocalMediaStream = (mediaStream) => {
    localVideo.current.srcObject = mediaStream;
    localStream = mediaStream;
    // console.error('mediaStream=====', mediaStream);
    trace('Received local stream.');
    callButton.current.disabled = false;  // Enable call button.
  };

  const onStart = () => {
    navigator.mediaDevices.getUserMedia({
      video: true,
    })
      .then(gotLocalMediaStream).catch((err) => { trace(`navigator.getUserMedia error: ${err.toString()}.`); });
    trace('Requesting local stream.');
  };

  // Connects with new peer candidate.
  function handleConnection(event) {
    const peerConnection = event.target;
    const iceCandidate = event.candidate;

    if (iceCandidate) {
      const newIceCandidate = new RTCIceCandidate(iceCandidate);
      const otherPeer = getOtherPeer(peerConnection);

      otherPeer.addIceCandidate(newIceCandidate)
        .then(() => {
          trace(`${getPeerName(peerConnection)} addIceCandidate success.`);
        }).catch((error) => {
          trace(`${getPeerName(peerConnection)} failed to add ICE Candidate:\n` +
        `${error.toString()}.`);
        });

      trace(`${getPeerName(peerConnection)} ICE candidate:\n` +
          `${event.candidate.candidate}.`);
    }
  }

  // Logs changes to the connection state.
  function handleConnectionChange(event) {
    const peerConnection = event.target;
    console.log('ICE state change event: ', event);
    trace(`${getPeerName(peerConnection)} ICE state: ` +
        `${peerConnection.iceConnectionState}.`);
  }

  function gotRemoteMediaStream(event) {
    const mediaStream = event.stream;
    remoteVideo.current.srcObject = mediaStream;
    remoteStream = mediaStream;
    trace('Remote peer connection received remote stream.');
  }

  function setDescriptionSuccess(peerConnection, functionName) {
    const peerName = getPeerName(peerConnection);
    trace(`${peerName} ${functionName} complete.`);
  }

  // Logs success when remoteDescription is set.
  function setRemoteDescriptionSuccess(peerConnection) {
    setDescriptionSuccess(peerConnection, 'setRemoteDescription');
  }

  // Logs success when localDescription is set.
  function setLocalDescriptionSuccess(peerConnection) {
    setDescriptionSuccess(peerConnection, 'setLocalDescription');
  }

  // Logs error when setting session description fails.
  function setSessionDescriptionError(error) {
    trace(`Failed to create session description: ${error.toString()}.`);
  }

  function createdAnswer(description) {
    trace(`Answer from remotePeerConnection:\n${description.sdp}.`);

    trace('remotePeerConnection setLocalDescription start.');
    remotePeerConnection.setLocalDescription(description)
      .then(() => {
        setLocalDescriptionSuccess(remotePeerConnection);
      }).catch(setSessionDescriptionError);

    trace('localPeerConnection setRemoteDescription start.');
    localPeerConnection.setRemoteDescription(description)
      .then(() => {
        setRemoteDescriptionSuccess(localPeerConnection);
      }).catch(setSessionDescriptionError);
  }

  // Logs offer creation and sets peer connection session descriptions.
  function createdOffer(description) {
    trace(`Offer from localPeerConnection:\n${description.sdp}`);

    trace('localPeerConnection setLocalDescription start.');
    localPeerConnection.setLocalDescription(description)
      .then(() => {
        setLocalDescriptionSuccess(localPeerConnection);
      }).catch(setSessionDescriptionError);

    trace('remotePeerConnection setRemoteDescription start.');
    remotePeerConnection.setRemoteDescription(description)
      .then(() => {
        setRemoteDescriptionSuccess(remotePeerConnection);
      }).catch(setSessionDescriptionError);

    trace('remotePeerConnection createAnswer start.');
    remotePeerConnection.createAnswer()
      .then(createdAnswer)
      .catch(setSessionDescriptionError);
  }

  const onCall = () => {
    callButton.current.disabled = true;
    hangupButton.current.disabled = false;
    trace('Starting call.');
    // Get local media stream tracks.
    const videoTracks = localStream.getVideoTracks();
    const audioTracks = localStream.getAudioTracks();
    console.warn('videoTracks==', videoTracks);
    console.warn('audioTracks==', audioTracks);
    if (videoTracks.length > 0) {
      trace(`Using video device: ${videoTracks[0].label}.`);
    }
    if (audioTracks.length > 0) {
      trace(`Using audio device: ${audioTracks[0].label}.`);
    }
    const servers = null;  // Allows for RTC server configuration.
    // Create peer connections and add behavior.
    localPeerConnection = new RTCPeerConnection(servers);
    console.warn('localPeerConnection==', localPeerConnection);
    trace('Created local peer connection object localPeerConnection.');

    localPeerConnection.addEventListener('icecandidate', handleConnection);
    localPeerConnection.addEventListener('iceconnectionstatechange', handleConnectionChange);

    remotePeerConnection = new RTCPeerConnection(servers);
    trace('Created remote peer connection object remotePeerConnection.');

    remotePeerConnection.addEventListener('icecandidate', handleConnection);
    remotePeerConnection.addEventListener('iceconnectionstatechange', handleConnectionChange);
    remotePeerConnection.addEventListener('addstream', gotRemoteMediaStream);

    // Add local stream to connection and create offer to connect.
    localPeerConnection.addStream(localStream);
    trace('Added local stream to localPeerConnection.');

    trace('localPeerConnection createOffer start.');
    localPeerConnection.createOffer({ // 创造了一个offer（SDP会话描述)
      offerToReceiveVideo: 1,
    })
      .then(createdOffer).catch(setSessionDescriptionError);
  };

  // Handles hangup action: ends up call, closes connections and resets peers.
  function onHangup() {
    localPeerConnection.close();
    remotePeerConnection.close();
    localPeerConnection = null;
    remotePeerConnection = null;
    hangupButton.current.disabled = true;
    callButton.current.disabled = false;
    trace('Ending call.');
  }

  return (
    <div>
      <h1>Realtime communication with WebRTC</h1>
      <video ref={localVideo} id="localVideo" autoPlay playsInline />
      <video ref={remoteVideo} id="remoteVideo" autoPlay playsInline />

      <div>
        <button onClick={onStart} ref={startButton}>Start</button>
        <button onClick={onCall} ref={callButton}>Call</button>
        <button onClick={onHangup} ref={hangupButton}>Hang Up</button>
      </div>
    </div>
  );
}

export default Peerconnection;
