import React, { useEffect } from 'react';
import { Button } from 'zarm';
import './style.scss';

// MDN 地址 https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia

function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

export default function aboutPage() {
  const mediaStreamContrains1 = {
    video: true,
  };

  const getStream = () => {
    navigator.mediaDevices.getUserMedia(mediaStreamContrains1).then((mediaStream) => {
      const localVideo = document.querySelector('video');
      localVideo.srcObject = mediaStream;
    }).catch(handleLocalMediaStreamError);
  };

  const takePhoto = () => {
    const localVideo = document.querySelector('video');
    const picture = document.getElementById('picture');
    picture.width = 640;
    picture.height = 480;
    picture.getContext('2d').drawImage(localVideo, 0, 0, picture.width, picture.height);

    const url = picture.toDataURL('image/jpeg');
    const oA = document.createElement('a');
    oA.download = 'photo';// 设置下载的文件名，默认是'下载'
    oA.href = url;
    document.body.appendChild(oA);
    oA.click();
    oA.remove(); // 下载之后把创建的元素删除
  };

  useEffect(() => {
    getStream();
  });

  return (
    <div className="container">
      <p>1111</p>
      <video autoPlay playsInline />
      {/* blur 模糊 grayscale 黑白  invert 反转 sepia 深褐色 */}
      <canvas className="sepia" id="picture" />
      <Button onClick={takePhoto}>拍照</Button>
    </div>
  );
}
