import { Button } from 'antd';
import clsx from 'clsx';

interface Button{
  class: string;
  title: string;
  onClick: () => void;
}

function ButtonCustom({...props}: Button) {
  return (
    <Button className={clsx(props.class)} onClick={props.onClick}>
      {props.title}
    </Button>
  );
}

export default ButtonCustom;
