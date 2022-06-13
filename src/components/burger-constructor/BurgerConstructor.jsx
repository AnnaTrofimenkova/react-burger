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
import Modal from "../modal/Modal";
import OrderDetails from "../orderDetails/OrderDetails";
import { useState } from "react";

function BurgerConstructor(props) {
  const [isOpened, setIsOpened] = useState(false);

  function toggleModal() {
    setIsOpened(!isOpened);
  }

  return (
    <div>
      <div className={`${BurgerConstructorStyles.konstructor} mt-25 mb-10`}>
        {isOpened && (
          <Modal onClose={toggleModal}>
            <OrderDetails />
          </Modal>
        )}

        <div className={`${BurgerConstructorStyles.element} pl-8`}>
          {props.data.map((props) =>
            props.name === "Краторная булка N-200i" ? (
              <div
                className={`${BurgerConstructorStyles.element} mt-4`}
                key={props._id}
              >
                <ConstructorElement
                  text={props.name + " (верх)"}
                  price={props.price}
                  thumbnail={props.image}
                />
              </div>
            ) : (
              ""
            )
          )}
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
          {props.data.map((props) =>
            props.name === "Краторная булка N-200i" ? (
              <div
                className={`${BurgerConstructorStyles.element} mt-4`}
                key={props._id}
              >
                <ConstructorElement
                  text={props.name + " (низ)"}
                  price={props.price}
                  thumbnail={props.image}
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className={BurgerConstructorStyles.itogi}>
        <span className="text text_type_digits-medium mr-2">610</span>
        <div className=" mr-10">
          <CurrencyIcon />
        </div>
        <Button onClick={toggleModal}>Оформить заказ</Button>
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(burgerIngredientsPropTypes).isRequired,
};

export default BurgerConstructor;
