import React from 'react';
import { Counter, CurrencyIcon, Tab, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredientsStyles from '../burger-ingredients/BurgerIngredients.module.css'
import bulka1 from '../../images/bun-02.png'
import bulka2 from '../../images/bun-01.png'

function BurgerIngredients() {

  return (
    <div className={`${BurgerIngredientsStyles.main} mr-10`}>
    <h1>Соберите бурегр</h1>
      <div>табы...</div>
      <section>
        <p>Булки</p>
        <div className={BurgerIngredientsStyles.items }>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img }src={bulka1 }></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>20 <span className="ml-2"><CurrencyIcon /></span></p>
          <p>Краторная булка N-200i</p>
        </div>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img }src={bulka2 }></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>20 <span className="ml-2"><CurrencyIcon /></span></p>
          <p>Флюоресцентная булка R2-D3</p>
          </div>
          </div>
      </section>
      <section>
        <p>Соусы</p>
        <div className={BurgerIngredientsStyles.items }>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img }src={bulka1 }></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>20 <span className="ml-2"><CurrencyIcon /></span></p>
          <p>Краторная булка N-200i</p>
        </div>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img }src={bulka2 }></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>20 <span className="ml-2"><CurrencyIcon /></span></p>
          <p>Флюоресцентная булка R2-D3</p>
          </div>
        </div>
        <div className={BurgerIngredientsStyles.items }>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img }src={bulka1 }></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>20 <span className="ml-2"><CurrencyIcon /></span></p>
          <p>Краторная булка N-200i</p>
        </div>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img }src={bulka2 }></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>20 <span className="ml-2"><CurrencyIcon /></span></p>
          <p>Флюоресцентная булка R2-D3</p>
          </div>
          </div>
      </section>
      </div>
  );
}

export default BurgerIngredients;