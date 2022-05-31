import React from 'react';
import logo from './logo.svg';
import AppStyle from './App.module.css';
import AppHeader from './components/app-header/AppHeader.jsx';
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients.jsx';
import BurgerConstructor from './components/burger-constructor/BurgerConstructor.jsx';
import data from './utils/data.jsx';



function App() {
  return (
    <>
   <div className={AppStyle.page} >
      <AppHeader />
      <div className={AppStyle.cont_for_main}>
      <BurgerIngredients {...data}/>
          <BurgerConstructor {...data}/>
          </div>
    </div>  
      </>
  );
}

export default App;
