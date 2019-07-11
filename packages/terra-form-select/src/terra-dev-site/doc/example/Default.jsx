import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const DefaultExample = () => (
  <Select placeholder="Select a color" className={cx('form-select')}>
    <Select.Option value="blue" display="Blue" />
    <Select.Option value="green" display="Green" />
    <Select.Option value="purple" display="Purple" />
    <Select.Option value="red" display="Red" />
    <Select.Option value="violet" display="Violet" />
  </Select>
);

export default DefaultExample;
