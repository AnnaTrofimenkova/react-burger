import { CurrencyIcon, DeleteIcon, DragIcon,  ConstructorElement, Button, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerConstructorStyles from '../burger-constructor/BurgerConstructor.module.css'

import bulka from '../../images/bun-02.png'
import sous from '../../images/sauce-03.png'
import maso from '../../images/meat-02.png'
import plod from '../../images/sp-1.png'
import kolca from '../../images/mineral-rings.png'

function BurgerConstructor() {
  return (
    <div>
      <div className={`${BurgerConstructorStyles.konstructor} mt-25 mb-10`}>
           <div className={`${BurgerConstructorStyles.element} pl-8`}>
    <ConstructorElement 
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={20}
        thumbnail={bulka}
              />
              </div>
          <div className={`${BurgerConstructorStyles.element} mt-4`}>
        <DragIcon/>
        <ConstructorElement
        text="Соус традиционный галактический"
        price={30}
        thumbnail={sous}/>
          </div>
            <div className={`${BurgerConstructorStyles.element} mt-4`}>
        <DragIcon/>
               <ConstructorElement
        text="Мясо бессмертных моллюсков Protostomia"
        price={300}
        thumbnail={maso}
        
              />
          </div >
              <div className={`${BurgerConstructorStyles.element} mt-4`}>
        <DragIcon/>
               <ConstructorElement
        text="Плоды Фалленианского дерева"
        price={80}
         thumbnail={plod}
              />
          </div>
            <div className={`${BurgerConstructorStyles.element} mt-4`}>
        <DragIcon/>
               <ConstructorElement
        text="Хрустящие минеральные кольца"
        price={80}
         thumbnail={kolca}
              />
          </div>
           <div className={`${BurgerConstructorStyles.element} mt-4`}>
        <DragIcon/>
               <ConstructorElement
        text="Хрустящие минеральные кольца"
        price={80}
         thumbnail={kolca}
              />
          </div>
          <div className={`${BurgerConstructorStyles.element} mt-4 pl-8`}>
          <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={20}
        thumbnail={bulka}
          />
        </div>  
          </div>
          <div className={BurgerConstructorStyles.itogi}>
          <span className="text text_type_digits-medium mr-2">610</span>
          <div className=" mr-10"><CurrencyIcon /></div>
          <Button>Оформить заказ</Button>
       
          </div>
             </div>
  );
}

export default BurgerConstructor;