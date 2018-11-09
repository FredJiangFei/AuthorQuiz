import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {

    case 'CREATE_COURSE':
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
