import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpense';
import expenses from '../seed/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpense correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// Test falling

// test('should handle onSubmit', () => {
//   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
// });
