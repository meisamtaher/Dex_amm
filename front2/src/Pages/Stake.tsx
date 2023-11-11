import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import {useNavigate} from 'react-router-dom';

type Props = {
    network: undefined;
};

function Stake({ network }: Props) {
  return (
    <Stack direction={'column'} padding = {5} alignItems={'center'} justifyContent={'center'} spacing={5}>
        <Typography> Stake tokens </Typography>
        <Button sx = {{background:"hotpink",maxWidth:200}} > 
            Stake
        </Button>
    </Stack>
  );
}
  
export default Stake;