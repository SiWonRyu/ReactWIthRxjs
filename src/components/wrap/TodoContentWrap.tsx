import React from 'react';
import { kTodoContentWrap } from '../../constants/style';

interface TodoContentWrapProps {
  children: React.ReactNode
}

const TodoContentWrap: React.FC<TodoContentWrapProps> = props => {
  return (
    <div style={kTodoContentWrap}>
      {props.children}
    </div>
  )
};

export default React.memo(TodoContentWrap);