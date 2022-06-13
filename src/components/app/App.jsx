import React, { useEffect } from "react";
import AppStyle from "./App.module.css";
import AppHeader from "../app-header/AppHeader.jsx";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients.jsx";
import BurgerConstructor from "../burger-constructor/BurgerConstructor.jsx";
import { useState } from "react";
import Modal from "../modal/Modal";

function App() {
  const baseUrl = "https://norma.nomoreparties.space/api/ingredients";
  const [state, setState] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(baseUrl);
        if (!res.ok) {
          throw new Error(`Error status - ${res.status}`);
        }
        const DATA = await res.json();
        setState(DATA.data);
      } catch (error) {
        state([]);
      }
    };
    getData();
  }, []);
  console.log(state);
  return (
    <div className={AppStyle.page}>
      <AppHeader />
      <div className={AppStyle.cont_for_main}>
        <BurgerIngredients data={state} />
        <BurgerConstructor data={state} />
      </div>
    </div>
  );
}

export default App;
