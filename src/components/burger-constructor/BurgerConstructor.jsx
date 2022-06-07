import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
  ConstructorElement,
  Button,
  Typography,
  Box,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorStyles from "../burger-constructor/BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { burgerIngredientsPropTypes } from "../../utils/types";

function BurgerConstructor(props) {
  return (
    <div>
      <div className={`${BurgerConstructorStyles.konstructor} mt-25 mb-10`}>
        <div className={`${BurgerConstructorStyles.element} pl-8`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={props.data[0].name + " (верх)"}
            price={props.data[0].price}
            thumbnail={props.data[0].image}
          />
        </div>
        <div className={`${BurgerConstructorStyles.elementVar} mt-4`}>
          {props.data.map((props) =>
            props.type === "sauce" || props.type === "main" ? (
              <div
                className={`${BurgerConstructorStyles.element} mt-4`}
                key={props._id}
              >
                <DragIcon />
                <ConstructorElement
                  text={props.name}
                  price={props.price}
                  thumbnail={props.image}
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className={`${BurgerConstructorStyles.element} mt-4 pl-8`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={props.data[0].name + " (низ)"}
            price={props.data[0].price}
            thumbnail={props.data[0].image}
          />
        </div>
      </div>
      <div className={BurgerConstructorStyles.itogi}>
        <span className="text text_type_digits-medium mr-2">610</span>
        <div className=" mr-10">
          <CurrencyIcon />
        </div>
        <Button>Оформить заказ</Button>
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(burgerIngredientsPropTypes).isRequired,
};

export default BurgerConstructor;
