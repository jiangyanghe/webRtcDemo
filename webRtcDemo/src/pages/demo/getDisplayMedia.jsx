import React, { useEffect } from 'react';
import { Button } from 'zarm';
import styles from './style.scss';

// MDN 地址 https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia

function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

let deskStream;
export default function aboutPage() {
  const mediaStreamContrains1 = {
    video: true, // 桌面采集无法同时设置audio的采集
  };

  const shareDesk = () => {
    navigator.mediaDevices.getDisplayMedia(mediaStreamContrains1).then((mediaStream) => {
      // const localVideo = document.getElementById('video');
      deskStream = mediaStream;

      const localVideo = document.getElementById('deskvideo');
      localVideo.srcObject = deskStream;
    }).catch(handleLocalMediaStreamError);
  };

  // useEffect(() => {
  //   getStream();
  // });

  return (
    <div className="container">
      <p className={styles.title}>1111</p>
      {/* <video autoPlay playsInline id='video' /> */}
      <Button onClick={shareDesk}>共享桌面</Button>
      <video autoPlay playsInline id='deskvideo' />
    </div>
  );
}
