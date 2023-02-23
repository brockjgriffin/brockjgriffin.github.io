import Register from "./Register";
import Login from "./Login";
import Cart from "./Cart";

import Pages from "./Pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";

import Banner from "./Banner";
import Categories from "./Categories";
import data from "./data";
import "./Home.css";
import Navbar from "./Navbar";
import { useState } from "react";
import NavbarDeal from "./NavbarDeal";
import Newsletter from "./Newsletter";
import Product from "./Product";
import products from "./products";
import Footer from "./Footer";
import Shopping from "./Shopping";

function Home() {
const cats = data.map((cat) => {
  return <Categories image={cat.image} text={cat.categorieName} />
});

  const product = products.map((prod) => {
    return <Product image={prod.image} />;
  });
  return (
    <div className="home">
      
      <Banner />
      <div className="cats">{cats}</div>
      <div className="prods">{product}</div>
      <Footer />
    </div>
  );
}

export default Home;
