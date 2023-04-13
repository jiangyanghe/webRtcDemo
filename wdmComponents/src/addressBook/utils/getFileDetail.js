import isImage from './isImage';
import Toast from '../../toast';

/**
 * get file detail
 *
 * @param file
 * @returns {{fileName, fileSize, fileType: string, isPic: boolean}}
 */
export default function getFileDetail(file) {
  const fileSize = file.size;

  const fileName = file.name;

  const fileType = file.type || fileName.substr(fileName.lastIndexOf('.') + 1);

  // wechat save image bug
  if (!(/.*\/.*/.test(fileType))) {
    Toast.warning('图片格式有误，请重新拍照上传');
  }

  const isPic = isImage(fileType);

  return {
    fileName,
    fileSize,
    fileType,
    isPic,
  };
}
