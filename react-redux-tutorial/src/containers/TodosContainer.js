import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos, { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import { useCallback } from 'react';

// const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
//   return <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />;
// };

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);

  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((text) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((text) => dispatch(remove(id)), [dispatch]);

  return <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onRemove={onRemove} />;
};

export default TodosContainer;
