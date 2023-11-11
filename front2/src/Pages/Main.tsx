
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import MainBar from '../Components/MainBar';
import Swap from './Swap';
import Stake from './Stake';

const pages = ['Swap', 'Liquidity'];

function Main() {
    const [network, setNetwork] = useState<undefined>();

  return (
    <BrowserRouter>
      <MainBar network={network} />
      <Routes>

          <Route path = "/Dex_AMM/Swap" element={<Swap network = {network}/>} />
          <Route path = "/Dex_AMM/Stake" element={<Stake network = {network}/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default Main;