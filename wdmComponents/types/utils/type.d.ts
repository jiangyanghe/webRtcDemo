import React from 'react';
export interface BaseFormProps {
    getFieldDecorator: any;
    getFieldError: any;
    setFieldsValue: any;
    validateFields: any;
    validateFieldsAndScroll: any;
    [propName: string]: any;
}
export interface BaseCrengine {
    action: (value?: any) => void;
    dataBind?: string;
    params?: any;
    form?: BaseFormProps;
    path?: string[] | string;
}
export interface RulesProps {
    required?: boolean;
    pattern?: string;
    message?: string;
}
export interface ValidateProps {
    rules?: RulesProps[];
}
export interface BaseWidgetProps {
    prefixCls?: string;
    widget?: string;
    className?: string;
    style?: React.CSSProperties;
    path?: string;
    _crengine?: any;
    cascade?: any;
    value?: number | string;
    children?: any;
    onChange?: (params?: any) => void;
    onLog?: (name: string, number?: number) => void;
    onBlur?: (params?: any) => void;
}
export type OptionsProps = Array<{
    label: string;
    value: string | number;
    disabled?: boolean;
    children?: any[];
    childrens?: any[];
}>;
export interface FetchProps {
    url?: string;
    method?: 'get' | 'post' | 'from';
    data?: {
        [propName: string]: any;
    };
    headers?: any;
    isLoading?: boolean;
}
export interface ActionProps {
    type: string;
    data: string | {
        [propName: string]: any;
    };
}
export interface ObjectAnyProps {
    [propName: string]: any;
}
export interface FileProps {
    file: any;
    fileType: string;
    fileSize: number;
    fileName: any;
    url?: string;
    thumbnail: string;
    isError?: boolean;
}
