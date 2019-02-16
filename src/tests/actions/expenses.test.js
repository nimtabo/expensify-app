import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '1234jkl' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234jkl'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('1234jkl', { note: 'new expense note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234jkl',
    updates: { note: 'new expense note'}
  })
})

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    amount: 45600,
    createdAt: 2000,
    note: 'This was last month rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description:'',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});