import "../app/app.scss";

import React from "react";
import Header from "../header";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import { Route, Routes } from "react-router-dom";

export const SearchContext = React.createContext();

function App() {
  const [ SearchValue, setSearchValue ] = React.useState('');

 return (
    <div className="wrapper">
      <SearchContext.Provider value={{ SearchValue, setSearchValue }}>
      <Header />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
