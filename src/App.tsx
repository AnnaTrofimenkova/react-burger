import React from 'react';
import logo from './logo.svg';
import AppStyle from './App.module.css';
import AppHeader from './components/app-header/AppHeader.js';
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients.js';
import BurgerConstructor from './components/burger-constructor/BurgerConstructor.js';


function App() {
  return (
   <div>
      <AppHeader />
      <div className={AppStyle.cont_for_main}>
      <BurgerIngredients/>
        <BurgerConstructor />
        </div>
     </div>  
  );
}

export default App;
