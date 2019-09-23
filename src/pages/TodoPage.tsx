import React, { useEffect, useState } from 'react';
import { TodoService } from '../services/my-service';
import { TodoItem } from '../models';
import TodoList from '../containers/TodoList';
import { Subscription } from 'rxjs';

const TodoPage: React.FC = () => {

  const [todos, setTodos] = useState();

  useEffect(() => {
    const todoData$: Subscription = TodoService.todoData.subscribe((v: TodoItem[]) => {
      setTodos(v);
    });

    // 실제로는 TodoService 의 dispose 를 사용하여 Complete 시키는 것이 아닌
    // TodoPage 에서 구독 중인 subscription 만 취소를 해줘야 한다.
    return () => todoData$.unsubscribe();
  }, []);

  return (
    <TodoList todos={todos} />
  )
}

export default TodoPage;