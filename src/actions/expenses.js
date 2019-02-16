import uuid from 'uuid';

// ADD_EXPENSES Action generator
export const addExpense = (
  {  
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
// REMOVE_EXPENSE Action generator
export const removeExpense = ( { id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT EXPENSE Action generator
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});