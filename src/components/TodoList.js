import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from '../store/actions';

const TodoList = ({ todos, requestTodoList }) => (
  <>
    <ul>
      {todos.data.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    <button type="button" onClick={() => requestTodoList()}>
      Carregar Todos
    </button>
    {todos.loading && <p>Carregando...</p>}
  </>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
