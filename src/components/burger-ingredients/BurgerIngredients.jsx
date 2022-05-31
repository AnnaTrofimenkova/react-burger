import { useState }  from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon, Tab, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredientsStyles from '../burger-ingredients/BurgerIngredients.module.css'



function BurgerIngredients( props ) {
  const [current, setCurrent] = useState('Булки')
  
  return (
    <div className={`${BurgerIngredientsStyles.main} mr-10`}>
      <h1>Соберите бурегр</h1>

      <div style={{ display: 'flex' }} className="mb-10">
      <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
   
 
   
      <div className={BurgerIngredientsStyles.mainPannel }>
        <section >
        <p className="text text_type_main-medium mb-6">Булки</p>
        <div className={BurgerIngredientsStyles.items }>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img }src={props[0].image}></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>{props[0].price} <span className="ml-2"><CurrencyIcon /></span></p>
          <p>{props[0].name}</p>
        </div>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img}src={props[14].image}></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>{props[14].price} <span className="ml-2"><CurrencyIcon /></span></p>
          <p>{props[14].name}</p>
            </div>
          </div>
      </section>
      <section>
        <p className="text text_type_main-medium mb-6">Соусы</p>
        <div className={BurgerIngredientsStyles.items }>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img }src={props[3].image}></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>{props[3].price} <span className="ml-2"><CurrencyIcon /></span></p>
          <p>{props[3].name}</p>
        </div>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img }src={props[6].image}></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>{props[6].price} <span className="ml-2"><CurrencyIcon /></span></p>
          <p>{props[6].name}</p>
          </div>
        </div>
        <div className={BurgerIngredientsStyles.items }>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img }src={props[5].image }></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>{props[5].price} <span className="ml-2"><CurrencyIcon /></span></p>
          <p>{props[5].name }</p>
        </div>
        <div className={BurgerIngredientsStyles.item }>
          <img className={BurgerIngredientsStyles.img }src={props[9].image }></img>
          <p className={`${BurgerIngredientsStyles.cena} text text_type_digits-default`}>{props[9].price} <span className="ml-2"><CurrencyIcon /></span></p>
          <p>{props[9].name }</p>
          </div>
          </div>
        </section>
        </div>
      </div>
  );
}

BurgerIngredients.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
   price: PropTypes.number
};

export default BurgerIngredients;