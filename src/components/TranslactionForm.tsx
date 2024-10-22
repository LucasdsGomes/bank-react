import React, { useState } from 'react';

interface TransactionFormProps {
  onDeposit: (amount: number) => void;
  onWithdraw: (amount: number) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onDeposit, onWithdraw }) => {
  const [amount, setAmount] = useState('');

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    onDeposit(parseFloat(amount));
    setAmount('');
  };

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    onWithdraw(parseFloat(amount));
    setAmount('');
  };

  return (
    <div>
      <form onSubmit={handleDeposit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Valor"
          required
        />
        <button type="submit">Depositar</button>
      </form>
      <form onSubmit={handleWithdraw}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Valor"
          required
        />
        <button type="submit">Sacar</button>
      </form>
    </div>
  );
};

export default TransactionForm;
