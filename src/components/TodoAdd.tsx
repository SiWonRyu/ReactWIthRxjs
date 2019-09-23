import React, { useState } from 'react';
import { kButton, kTodoInput, kInputFormWrap } from '../constants/style';
import { TodoItem } from '../models';

interface AddTodoForm {
  addTodo: (content: string) => void;
}

const AddTodoForm: React.FC<AddTodoForm> = ({ addTodo }) => {
  const [content, setContent] = useState('');
  const changeContent = (event: any) => setContent(event.target.value);
  const submit = (event: any) => {
    event.preventDefault();
    addTodo(content);
    setContent('');
  }

  return (
    <>
      <form onSubmit={submit} style={kInputFormWrap}>
        <input
          type="text"
          style={kTodoInput}
          value={content}
          onChange={changeContent}
        />
        <button type="submit" style={kButton}>추가</button>
      </form>
      <hr style={{ width: '100%' }} />
    </>
  )
}

export default React.memo(AddTodoForm);