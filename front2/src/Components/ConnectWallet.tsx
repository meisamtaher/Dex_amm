import React from 'react';
import Button from '@mui/material/Button';

type Props = {
  network: undefined;
};

function ConnectWallet({ network }: Props) {
  const login = async () => {

  };
  return (
      <Button  variant="outlined" sx={{ p: 0.8 ,color: 'white', my: 1, mx: 1.5}} onClick={login}>
        Connect wallet
      </Button>
  );
}
  
export default ConnectWallet;