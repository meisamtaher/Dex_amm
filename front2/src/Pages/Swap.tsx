import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import {useNavigate} from 'react-router-dom';

type Props = {
    network: undefined;
};

function Swap({ network }: Props) {
  return (
    <Stack direction={'column'} padding = {5} alignItems={'center'} justifyContent={'center'} spacing={5}>
        <Typography> Swap tokens </Typography>
        <Button sx = {{background:"hotpink",maxWidth:200}} > 
            Swap
        </Button>
    </Stack>
  );
}
  
export default Swap;