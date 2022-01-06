import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'views/Home/Home';
import WrongPath from 'views/WrongPath/WrongPath';
import Articles from 'views/Articles/Articles';
import Favorites from 'views/Favorites/Favorites';
import Random from 'views/Random/Random';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/random" element={<Random />} />
      <Route path="*" element={<WrongPath />} />
    </Routes>
  );
};

export default Root;
