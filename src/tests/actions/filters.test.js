import moment from 'moment';
import {
   setEndDate,
   setStartDate,
   setTextFilter, 
   sortByAmount, 
   sortByDate  
   } from '../../actions/filters';

test('should set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should set sort by amount action object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should set sort by date object', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  })
});

test('shold set new text to the text-filter object', () => {
  const action = setTextFilter('test');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test'
  })
});

test('should set default text filter object', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});