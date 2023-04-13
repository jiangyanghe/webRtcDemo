import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Input, Button, Popup } from 'zarm';

import Icon from '../icon';

// 获取屏幕高度
const getViewHeight = () => {
  // server side
  if (typeof window === 'undefined') {
    return {
      maxHeight: 0,
    };
  }

  const height = (window.innerHeight || document.documentElement.clientHeight) * 0.9 - 60;

  return {
    height,
  };
};

let timer = null;

class AddressBook extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    visible: PropTypes.bool,
    dataSource: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'cui-address-book',
    className: '',
    visible: true,
    dataSource: [],
    onChange: () => {},
  };

  state = {
    style: getViewHeight(),
    isFocus: false,
    value: '',
    searchData: [],
  };

  onFocus = () => {
    this.setState({ isFocus: true });
  };

  onChange = (value) => {
    const { dataSource } = this.props;

    this.setState({ value });

    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      const searchData = dataSource.filter((item) => item.name.indexOf(value) >= 0);

      this.setState({
        searchData,
      });
    }, 500);
  };

  onCancel = () => {
    this.setState({
      isFocus: false,
      value: '',
      searchData: [],
    });
  };

  onChangeItem = (item) => {
    const { onChange } = this.props;

    onChange && onChange(item);
  };

  renderSearch() {
    const { prefixCls } = this.props;
    const { value, isFocus } = this.state;
    const cls = classname(`${prefixCls}-search`, {
      [`${prefixCls}-search-focus`]: isFocus,
    });

    return (
      <div className={cls}>
        <div className={`${prefixCls}-search-inner`}>
          <Icon type="sousuo" />
          <Input
            placeholder="请输入姓名"
            className="input-search"
            value={value}
            onFocus={() => this.onFocus()}
            onChange={(v) => this.onChange(v)}
          />
          <Button
            shape="round"
            theme="primary"
            className="button-search"
          >
            搜索
          </Button>
        </div>
        <div
          className="button-cancel"
          onClick={() => this.onCancel()}
        >
          取消
        </div>
      </div>
    );
  }

  renderBody(data) {
    const { style, isFocus, value, searchData } = this.state;
    const {
      prefixCls,
    } = this.props;
    const showData = ((isFocus && value.length) ? searchData : data);

    const notNode = () => {
      const text = (isFocus ? '没有匹配的结果' : '没有客户');
      return (
        <div className="not-list">
          {text}
        </div>
      );
    };

    const itemNode = () => {
      return (
        <div className={`${prefixCls}-list`}>
          <div className={`${prefixCls}-sub-title`}>A</div>
          {
            showData.map((item, key) => (
              <div
                className={`${prefixCls}-item`}
                key={`item_${key}`}
                onClick={() => this.onChangeItem(item)}
              >
                <div className="item-name">{item.name}</div>
                <div className="item-content">身份证{item.certiType}  {item.certiNo}</div>
              </div>
            ))
          }
        </div>
      );
    };

    return (
      <div
        className={`${prefixCls}-body`}
        style={style}
      >
        {(Array.isArray(showData) && showData.length) ? itemNode() : notNode()}
      </div>
    );
  }

  render() {
    const {
      prefixCls,
      visible,
      className,
      dataSource,
    } = this.props;

    const cls = classname(prefixCls, {
      [className]: !!className,
    });

    return (
      <Popup
        visible={visible}
        className={cls}
      >
        {this.renderSearch()}
        {this.renderBody(dataSource)}
      </Popup>
    );
  }
}

export default AddressBook;
