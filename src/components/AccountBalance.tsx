import React, { useState } from 'react';

interface AccountBalanceProps {
  balance: number;
}

const AccountBalance: React.FC<AccountBalanceProps> = ({ balance }) => {
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalance = () => {
    setShowBalance((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleBalance}>
        {showBalance ? 'Ocultar Saldo' : 'Mostrar Saldo'}
      </button>
      {showBalance && <h2>Saldo Atual: R$ {balance.toFixed(2)}</h2>}
    </div>
  );
};

export default AccountBalance;
