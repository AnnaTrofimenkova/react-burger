import { CurrencyIcon, DeleteIcon, DragIcon,  ConstructorElement, Button, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerConstructorStyles from '../burger-constructor/BurgerConstructor.module.css'
import PropTypes from 'prop-types';

function BurgerConstructor(props) {
  return (


    <div>
      <div className={`${BurgerConstructorStyles.konstructor} mt-25 mb-10`}>
           <div className={`${BurgerConstructorStyles.element} pl-8`}>
    <ConstructorElement 
        type="top"
        isLocked={true}
        text={props[0].name + ' (верх)'}
        price={props[0].price}
        thumbnail={props[0].image} 
              />
        </div>
        <div className={`${BurgerConstructorStyles.elementVar} mt-4`}>
          <div className={`${BurgerConstructorStyles.element} mt-4`}>
        <DragIcon/>
        <ConstructorElement
        text={props[5].name}
        price={props[5].price}
        thumbnail={props[5].image} />
          </div>
        <div className={`${BurgerConstructorStyles.element} mt-4`}>
        <DragIcon/>
        <ConstructorElement
        text={props[4].name}
        price={props[4].price}
        thumbnail={props[4].image}
        
              />
          </div >
        <div className={`${BurgerConstructorStyles.element} mt-4`}>
        <DragIcon/>
        <ConstructorElement
        text={props[7].name}
        price={props[7].price}
         thumbnail={props[7].image}
              />
          </div>
            <div className={`${BurgerConstructorStyles.element} mt-4`}>
        <DragIcon/>
               <ConstructorElement
        text={props[8].name}
        price={props[8].price}
         thumbnail={props[8].image}
              />
          </div>
           <div className={`${BurgerConstructorStyles.element} mt-4`}>
        <DragIcon/>
               <ConstructorElement
        text={props[8].name}
        price={props[8].price}
         thumbnail={props[8].image}
              />
          </div>
          </div>
          <div className={`${BurgerConstructorStyles.element} mt-4 pl-8`}>
          <ConstructorElement
        type="bottom"
        isLocked={true}
         text={props[0].name + ' (низ)'}
        price={props[0].price}
        thumbnail={props[0].image} 
          />
        </div>  
          </div>
          <div className={BurgerConstructorStyles.itogi}>
          <span className="text text_type_digits-medium mr-2">610</span>
          <div className=" mr-10"><CurrencyIcon /></div>
          <Button>Оформить заказ</Button>
       
          </div>
      </div>
      // </>
  );
}

BurgerConstructor.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
   price: PropTypes.number
};

export default BurgerConstructor;