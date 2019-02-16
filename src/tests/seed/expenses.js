import moment from  'moment';

const expenses = [{
  id: '1',
  description: 'cable',
  note: 'cable bill',
  amount: 4000,
  createdAt: 0
},
{
  id: '2',
  description: 'water',
  note: 'water bill',
  amount: 7000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: '3',
  description: 'power',
  note: 'electric bill',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

export default expenses;