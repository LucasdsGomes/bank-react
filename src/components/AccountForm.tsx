import React, { useState } from 'react';

interface AccountFormProps {
  onCreateAccount: (name: string) => void;
}

const AccountForm: React.FC<AccountFormProps> = ({ onCreateAccount }) => {
  const [accountName, setAccountName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accountName) {
      onCreateAccount(accountName);
      setAccountName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={accountName}
        onChange={(e) => setAccountName(e.target.value)}
        placeholder="Nome da Conta"
        required
      />
      <button type="submit">Criar Conta</button>
    </form>
  );
};

export default AccountForm;
