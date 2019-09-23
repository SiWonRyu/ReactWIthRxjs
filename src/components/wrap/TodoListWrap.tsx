import React from 'react';
import { kListWrap } from '../../constants/style';

interface TodoListWrapProps {
  children: React.ReactNode
}

const TodoListWrap: React.FC<TodoListWrapProps> = props => {
  return (
    <div style={kListWrap}>
      {props.children}
    </div>
  )
};

export default React.memo(TodoListWrap);