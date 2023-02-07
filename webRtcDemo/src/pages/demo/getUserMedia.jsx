import React, { useEffect } from 'react';
import styles from './style.scss';

// MDN 地址 https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia

function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

export default function aboutPage() {
  const mediaStreamContrains1 = {
    video: true,
  };
  const mediaStreamContrains = {
    video: {
      frameRate: { min: 20 }, // 视频的帧率最小 20 帧每秒；
      width: { min: 640, ideal: 720 }, // 宽度最小是 640，理想的宽度是 1280；
      height: { min: 360, ideal: 400 }, //
      aspectRatio: 16 / 9, // 此外宽高比是 16:9；
      facingMode: 'enviroment',
      resizeMode: true,
    },
    audio: {
      echoCancellation: true, // 开启回音消除、以及。
      noiseSuppression: true, // 降噪
      autoGainControl: true, // 自动增益功能
    },
  };

  const getStream = () => {
    navigator.mediaDevices.getUserMedia(mediaStreamContrains).then((mediaStream) => {
      const localVideo = document.querySelector('video');
      localVideo.srcObject = mediaStream;
    }).catch(handleLocalMediaStreamError);
  };

  // 获取设备列表
  const getDeviceInfos = () => {
    navigator.mediaDevices.enumerateDevices().then((deviceInfos) => {  // 打印出每一个设备的信息
      deviceInfos.forEach((deviceInfo) => { 
        console.log(`${deviceInfo.kind}: ${deviceInfo.label} id = ${deviceInfo.deviceId}`);
      });
    });
  };

  useEffect(() => {
    getStream();
    getDeviceInfos();
  });

  return (
    <div className="container">
      <p className={styles.title}>1111</p>
      <video autoPlay playsInline />

    </div>
  );
}
