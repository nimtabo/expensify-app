import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={200} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenss', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={20} expensesTotal={20000000} />);
  expect(wrapper).toMatchSnapshot();
});