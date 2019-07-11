import React, { useState, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const blues = [
  { value: 'value_blue', display: 'Blue' },
  { value: 'value_cyan', display: 'Cyan' },
  { value: 'value_teal', display: 'Teal' },
  { value: 'value_azul', display: 'Azul' },
  { value: 'value_aqua', display: 'Aqua' },
];

const greens = [
  { value: 'value_green', display: 'Green' },
  { value: 'value_forest', display: 'Forest Green' },
  { value: 'value_dark', display: 'Dark Green' },
  { value: 'value_neon', display: 'Neon Green' },
];

const colors = [
  { value: 'value_blue', display: 'Blue' },
  { value: 'value_green', display: 'Green' },
  { value: 'value_purple', display: 'Purple' },
  { value: 'value_red', display: 'Red' },
  { value: 'value_violet', display: 'Violet' },
];

const data = [
  colors,
  blues,
  greens,
];

const MultipleExample = () => {
  const [i, setI] = useState(0);
  const options = data[i % data.length];

  const onChange = useCallback(() => {
    setI(s => s + 1);
  }, []);

  return (
    <Select placeholder="Select a color" variant="multiple" className={cx('form-select')} onChange={onChange}>
      {options.map(({ value, display }) => <Select.Option key={value} value={value} display={display} />)}
    </Select>
  );
};

export default MultipleExample;
