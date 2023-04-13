type IdeepAsset = (data1: any, data2: any) => boolean;
export declare const isInApp: boolean;
export declare const isWindows: boolean;
export declare const isInWechat: boolean;
/**
 * 对象检测
 * @param value
 */
export declare const isObject: (value: any) => boolean;
/**
 * 转换字符串
 * @param {string | number} value 值
 * return {string}
 */
export declare const toString: (value: any) => any;
/**
 * 深断言
 * @param {array|object} data1 数据1
 * @param {array|object} data2 数据2
 */
export declare const deepAsset: IdeepAsset;
/**
 * 比对数组，过滤values 值
 * @param array
 * @param values
 */
export declare const difference: (array: string[], values?: string[]) => string[];
type DiffchangeProps = {
    [propName: string]: any;
};
/**
 * 比对触发数据
 * @param {string[]} attrs 属性表
 * @param {object}   from  数据1
 * @param {object}   to    数据2
 */
export declare const diffchange: (attrs: string[], from: DiffchangeProps, to: DiffchangeProps) => boolean;
/**
 * 获取form唯一标志
 * @param {string} name 名字
 * @param {string} path 路径
 */
export declare const getFormId: (name?: string, path?: string | string[]) => string;
/**
 * 去前后空格
 * @param {string} value  值
 * return {any}
 */
export declare function toTrim(value: any): any;
/**
 * 解决返回报文不同，解析API结果
 * @param {object}  res   返回报文
 * return { code: number, result?: object, message: string }
 */
export declare function parseAPIResult(res: any): any;
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
export declare const typeToPath: (props: TypeToPathProps) => string[];
export declare class DataRender {
    context: any;
    getName(): null;
}
export {};
