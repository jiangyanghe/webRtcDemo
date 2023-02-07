import React, { useEffect } from 'react';
import { Button } from 'zarm';
import './style.scss';

// MDN 地址 https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia

function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

let stream;

export default function aboutPage() {
  const mediaStreamContrains1 = {
    video: true,
    audio: true,
  };

  const getStream = () => {
    navigator.mediaDevices.getUserMedia(mediaStreamContrains1).then((mediaStream) => {
      const localVideo = document.getElementById('video');
      localVideo.srcObject = mediaStream;
      stream = mediaStream;
    }).catch(handleLocalMediaStreamError);
  };

  let buffer;
  let mediaRecorder = {};

  const record = () => {
    buffer = [];

    // 设置录制下来的多媒体格式
    const options = { mimeType: 'video/webm;codecs=vp8' };
    // 判断浏览器是否支持录制
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.error(`${options.mimeType} is not supported!`);
      return;
    }
    try {
      // 创建录制对象
      mediaRecorder = new MediaRecorder(stream, options);
    } catch (e) {
      console.error('Failed to create MediaRecorder:', e);
    }
    // 当有音视频数据来了之后触发该事件,当该函数被触发后，将数据压入到blob中
    mediaRecorder.ondataavailable = (e) => {
      if (e && e.data && e.data.size > 0) {
        buffer.push(e.data);
      }
    };
    // 开始录制
    mediaRecorder.start(10);
  };
  const recplay = () => {
    const recvideo = document.getElementById('recvideo');
    const blob = new Blob(buffer, { type: 'video/webm' });
    recvideo.src = window.URL.createObjectURL(blob);
    recvideo.srcObject = null;
    recvideo.controls = true;
    recvideo.play();
  };
  const download = () => {
    const blob = new Blob(buffer, { type: 'video/webm' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.style.display = 'none';
    a.download = 'aaa.webm';
    a.click();
  };

  useEffect(() => {
    getStream();
  });

  return (
    <div className="container">
      <p>1111</p>
      <video autoPlay playsInline id="video" />
      <video autoPlay playsInline id="recvideo" />
      <Button onClick={record}>录制</Button>
      <Button onClick={recplay}>播放</Button>
      <Button onClick={download}>下载</Button>
    </div>
  );
}
