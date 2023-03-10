import React from 'react';

import Expenses from './components/Expenses/Expenses';


const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 1, 14),
    },
    { id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2023, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 3, 14),
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2023, 4, 14),
    },
  ];

  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get Started!"),
    React.createElement(Expenses,{items: expenses}),
  );

}

export default App;
