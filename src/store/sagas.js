import { all, takeLatest, put, call } from 'redux-saga/effects';

function apiGet(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          text: 'Fazer café',
        },
        {
          id: 2,
          text: 'Estudar Redux',
        },
        {
          id: 3,
          text: 'Estudar Saga',
        },
        {
          id: 4,
          text: 'Criar um App',
        },
      ]);
    }, 2000);
  });
}

function* getTodoList() {
  try {
    const response = yield call(apiGet);

    yield put({ type: 'SUCCESS_TODO_LIST', payload: { data: response } });
  } catch (error) {
    yield put({ type: 'FAILURE_TODO_LIST', payload: error });
  }
}

export default function* root() {
  yield all([takeLatest('REQUEST_TODO_LIST', getTodoList)]);
}
