import React from 'react';
import { Button } from 'antd';
import clsx from 'clsx';

function ButtonCustom(props) {
  return (
    <Button className={clsx(props.class)} onClick={props.onClick}>
      {props.title}
    </Button>
  );
}

export default ButtonCustom;
