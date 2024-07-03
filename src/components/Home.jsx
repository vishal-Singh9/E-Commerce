import React, { useState } from "react";
import FirstPage from "./FirstPage";
import Products from "./Products";
import SmartPhone from "./SmartPhone";
import MensShirts from "./MensShirts";
import MensShoes from "./MensShoes";
import MensWatches from "./MensWatches";
import Groceries from "./Groceries";


function Home() {
  return (
    <div>
      <FirstPage />
      <Products />
      <SmartPhone />
      <MensShirts />
      <MensShoes />
      <MensWatches />
      <Groceries />

    </div>
  );
}

export default Home;
