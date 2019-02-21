import authReducer from '../../reducers/auth';

test('should ser uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '345shdfgq'
  }
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({uid: 'dfghgaal'}, action)
  expect(state).toEqual({});
});