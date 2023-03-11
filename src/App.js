import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const expenses_data_fill = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 1, 14),
  },
  { id: 'e2',
    title: 'Oled TV',
    amount: 799.49,
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 3, 14),
  },
  {
    id: 'e4',
    title: 'DeskTop',
    amount: 450,
    date: new Date(2023, 1, 1),
  },
  {
    id: 'e5',
    title: 'Tablet',
    amount: 250,
    date: new Date(2023, 2, 1),
  },
  {
    id: 'e6',
    title: 'Iphone',
    amount: 1500,
    date: new Date(2024, 2, 1),
  },
];

// Change the const to reset de app
//const expenses_data_empty = [];

const App = () => {
  const [expenses, setExpenses] = useState(expenses_data_fill);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

}

export default App;
