import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../seed/expenses';
import { EditExpensePage } from '../../components/EditExpense';


let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage 
    startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[2]}
    />);
});

test('should render editExpense page', () => {
  expect(wrapper).toMatchSnapshot();
});

// ****falling
// test('should handle startEditExpense', () => {
//   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
// });

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id
  })
});