import "./App.css";
import "./assets/main.css";
// Components
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import AddTransactionForm from "./components/transactions/AddTransactionForm";
import TransactionList from "./components/transactions/TransactionList";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container my-3 mx-auto max-w-screen-xl items-center md:items-start px-1 sm:px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-9">
        <Balance />
      </div>
      <div className="container my-3 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-2 min-h-screen justify-center md:justify-between items-center md:items-start px-1 sm:px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-9">
        <div className="flex-1 ">
          <IncomeExpense />
          <AddTransactionForm />
        </div>
        <div className="flex-1">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
