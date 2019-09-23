import React from 'react';
import { kButtonWrap } from '../../constants/style';

interface TodoButtonWrapProps {
  children: React.ReactNode
}

const TodoButtonWrap: React.FC<TodoButtonWrapProps> = props => {
  return (
    <div style={kButtonWrap}>
      {props.children}
    </div>
  )
};

export default React.memo(TodoButtonWrap);