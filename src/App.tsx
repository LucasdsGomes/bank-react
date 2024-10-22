import React, { useState, useEffect } from 'react';
import AccountForm from './components/AccountForm';
import AccountBalance from './components/AccountBalance';
import TransactionForm from './components/TranslactionForm';
import './App.css'; // Importando o CSS

interface Account {
  id: number;
  name: string;
  balance: number;
}

const App: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [activeAccount, setActiveAccount] = useState<Account | null>(null);

  const createAccount = (name: string) => {
    const newAccount: Account = { id: Date.now(), name, balance: 0 };
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    setActiveAccount(newAccount);
  };

  const deposit = (amount: number) => {
    if (activeAccount) {
      const updatedAccounts = accounts.map((account) =>
        account.id === activeAccount.id ? { ...account, balance: account.balance + amount } : account
      );
      setAccounts(updatedAccounts);
      setActiveAccount({ ...activeAccount, balance: activeAccount.balance + amount });
    }
  };

  const withdraw = (amount: number) => {
    if (activeAccount && amount <= activeAccount.balance) {
      const updatedAccounts = accounts.map((account) =>
        account.id === activeAccount.id ? { ...account, balance: account.balance - amount } : account
      );
      setAccounts(updatedAccounts);
      setActiveAccount({ ...activeAccount, balance: activeAccount.balance - amount });
    }
  };

  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem('accounts') || '[]');
    if (storedAccounts) {
      setAccounts(storedAccounts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }, [accounts]);

  return (
    <div className="container">
      <h1>Simulador de Operações Bancárias</h1>
      <p className='nomeConta'>{activeAccount && <p>Conta: {activeAccount.name}</p>}</p>
      <AccountForm onCreateAccount={createAccount} />
      {activeAccount && (
        <>
          <AccountBalance balance={activeAccount.balance} />
          <TransactionForm onDeposit={deposit} onWithdraw={withdraw} />
        </>
      )}
    </div>
  );
};

export default App;
