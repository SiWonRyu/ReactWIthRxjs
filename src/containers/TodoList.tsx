import React from 'react';
import { TodoItem } from '../models';
import TodoDeleteButton from '../components/TodoDelete';
import TodoAdd from '../components/TodoAdd';
import Todo from '../components/Todo';
import { TodoService } from '../services';
import TodoToggle from '../components/TodoToggle';
import TodoListWrap from '../components/wrap/TodoListWrap';
import TodoContentWrap from '../components/wrap/TodoContentWrap';
import TodoButtonWrap from '../components/wrap/TodoButtonWrap';

interface TodoListProps {
  todos: TodoItem[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {

  const deleteTodoItem = (id: number) => TodoService.deleteTodo(id);
  const addTodoItem = (content: string) => TodoService.addTodo(content);
  const onToggle = (id: number, checked: boolean) => TodoService.toggleIsDone(id, checked);

  return (
    <TodoListWrap>
      <TodoAdd addTodo={addTodoItem} />
      {!!todos && todos.map((item: TodoItem) =>
        <TodoContentWrap key={item.id}>
          <Todo todoItem={item}></Todo>
          <TodoButtonWrap>
            <TodoDeleteButton
              onDelete={deleteTodoItem}
              todoId={item.id}
            />
            <TodoToggle
              onToggle={onToggle}
              todo={item}
            ></TodoToggle>
          </TodoButtonWrap>
        </TodoContentWrap>
      )}
    </TodoListWrap>
  )
}

export default React.memo(TodoList);