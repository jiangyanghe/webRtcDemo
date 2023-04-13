type IdeepAsset = (data1: any, data2: any) => boolean;
const UA =
  typeof window === 'undefined' ? '' : window.navigator.userAgent.toLowerCase();

// App内
export const isInApp = !!~UA.indexOf('iyunbao');
// 是否为window系统
export const isWindows = /windows|win32/.test(UA);
// 微信
export const isInWechat = !!~UA.indexOf('micromessenger');

/**
 * 对象检测
 * @param value
 */
export const isObject = (value: any) =>
  typeof value === 'object' && value.constructor === Object;

/**
 * 转换字符串
 * @param {string | number} value 值
 * return {string}
 */
export const toString = (value: any) => {
  if (typeof value === 'number') {
    return value.toString();
  }

  return value;
};

/**
 * 深断言
 * @param {array|object} data1 数据1
 * @param {array|object} data2 数据2
 */
export const deepAsset: IdeepAsset = (data1: any, data2: any) => {
  return JSON.stringify(data1) === JSON.stringify(data2);
};

/**
 * 比对数组，过滤values 值
 * @param array
 * @param values
 */
export const difference = (array: string[], values?: string[]) => {
  if (!(array && Array.isArray(array) && array.length)) {
    return [];
  }

  if (!(values && Array.isArray(values) && values.length)) {
    return array;
  }

  const result: string[] = [];

  array.forEach((key) => {
    if (values.indexOf(key) < 0) {
      result.push(key);
    }
  });

  return result;
};

type DiffchangeProps = {
  [propName: string]: any;
};

/**
 * 比对触发数据
 * @param {string[]} attrs 属性表
 * @param {object}   from  数据1
 * @param {object}   to    数据2
 */
export const diffchange = (
  attrs: string[],
  from: DiffchangeProps,
  to: DiffchangeProps,
) => {
  return attrs.some((key) => from[key] !== to[key]);
};

/**
 * 获取form唯一标志
 * @param {string} name 名字
 * @param {string} path 路径
 */
export const getFormId = (name?: string, path?: string | string[]) => {
  let getPath: string[] = [];

  if (Array.isArray(path)) {
    if (name && typeof name === 'string') {
      getPath = path.concat(name);
    } else {
      getPath = path;
    }
  } else if (typeof path === 'string') {
    if (typeof name === 'string') {
      getPath = path.split('.').concat(name);
    } else {
      getPath = path.split('.');
    }
  } else if (typeof name === 'string') {
    getPath = getPath.concat(name);
  }

  return getPath.join('.');
};

/**
 * 去前后空格
 * @param {string} value  值
 * return {any}
 */
export function toTrim(value: any) {
  // isWindows
  // 环境 系统window10／chrome浏览器／搜狗输入框／连打，按下失效
  if (typeof value !== 'string' || isWindows) {
    return value;
  }

  if (typeof value === 'string') {
    if (!String.prototype.trim) {
      return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }

    return value.trim();
  }

  return value;
}

/**
 * 解决返回报文不同，解析API结果
 * @param {object}  res   返回报文
 * return { code: number, result?: object, message: string }
 */
export function parseAPIResult(res: any): any {
  if (!res) {
    return {
      code: 2001,
      message: '请求异常',
    };
  }

  let newResult: any = {};

  if (res.result && res.result === 'success') {
    newResult = {
      code: 0,
      result: res.content,
      message: res.reason || '',
    };
  } else if (res.result && res.result === 'fail') {
    newResult = {
      code: 2002,
      message: res.reason,
    };
    // { isSuccess: false, errorCode: '20102', errorMsg: '手机号格式不正确', result: null }
  } else if (typeof res.isSuccess !== 'undefined') {
    newResult = {
      code: res.isSuccess ? 0 : res.errorMsg || 2002,
      result: res.result,
      message: res.errorMsg,
    };
    // 新接口报文
  } else {
    newResult = res;
  }

  // 未加工结果
  newResult.sourceResult = res;

  return newResult;
}

export interface TypeToPathProps {
  dataBind?: string;
  paramType?: 'string' | 'number' | 'boolean' | 'array' | 'object';
  [propName: string]: any;
}

/**
 * 提取数据，类型
 * @param   props     组件属性
 * @config  dataBind  绑定返回数据
 * @config  paramType 返回数据类型（提供回调、后端），可选值为string 、number、boolean、array、object
 */
export const typeToPath = (props: TypeToPathProps) => {
  const { dataBind, paramType } = props;

  if (dataBind && paramType && paramType === 'array') {
    return [`${dataBind}[0]`];
  }

  return [];
};

export class DataRender {
  declare context: any;

  getName() {
    return null;
  }
}
