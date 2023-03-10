import './App.css';
import Expenses from './components/Expenses';


function App() {
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

  return (
    <div className="App">
      <header className="App-header">
          <Expenses items={expenses}></Expenses> 
      </header>
    </div>
  );
}

export default App;
