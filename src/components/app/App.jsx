import React from "react";
import AppStyle from "./App.module.css";
import AppHeader from "../app-header/AppHeader.jsx";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients.jsx";
import BurgerConstructor from "../burger-constructor/BurgerConstructor.jsx";
import data from "../../utils/data.jsx";

function App() {
  return (
    <div className={AppStyle.page}>
      <AppHeader />
      <div className={AppStyle.cont_for_main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </div>
    </div>
  );
}

export default App;
