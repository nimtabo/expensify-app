import expensesReducer from '../../reducers/expenses';
import expenses from '../seed/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('shold remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id 
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'fhfhff5s5s' 
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    id: 3,
    expense: {
      description: 'gas',
      note: 'gass bill',
      amount: 3000,
      createdAt: 756000000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
  const amount = 10000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    } 
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit expenses if id not found', () => {
  const amount = 10000
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'sofmjggdms21s',
    updates: {
      amount
    } 
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});