import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
  ConstructorElement,
  Button,
  Typography,
  Box,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from "../burger-constructor/BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { burgerIngredientsPropTypes } from "../../utils/types";
import Modal from "../modal/Modal";
import OrderDetails from "../orderDetails/order-details";
import { useState, useEffect, useRef } from "react";
import { useContext } from "react"; //новый месяц
import { BurgerData } from "../../services/appContext.js"; //новый месяц

// function BurgerConstructor(props) {
function BurgerConstructor() {
  const [isOpened, setIsOpened] = useState(false);
  const { state, setState } = useContext(BurgerData); //новый месяц
  const [totalPrice, setTotalPrice] = useState(0); //новый месяц

  function toggleModal() {
    setIsOpened(!isOpened);
    isOpened ? console.log("NOsent") : getDataOrderId();
  }
  useEffect(() => {
    let count = 0;
    let total = 0;
    let summBun = 0;
    let summExceptBun = 0;
    // state.map((item) => (total += item.price));

    state.map((stateItem) =>
      stateItem.type === "bun" && count == 0
        ? ((summBun = stateItem.price * 2), count++)
        : ""
    );

    state.map((stateItem) =>
      stateItem.type === "sauce" || stateItem.type === "main"
        ? (summExceptBun = summExceptBun += stateItem.price)
        : ""
    );

    total = summBun + summExceptBun;

    setTotalPrice(total);
  }, [state, setTotalPrice]);

  const config = {
    baseUrl: "https://norma.nomoreparties.space/api/orders",
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Получаем массив id
  let idArray = state.map((item) => item._id); //- работало

  // получаем карточки с сервера useeffect
  const [idOder, setIdOder] = useState(); //новый месяц

  const getDataOrderId = () => {
    const getProductData = async (array) => {
      try {
        const res = await fetch(config.baseUrl, {
          method: "POST",
          headers: config.headers,
          body: JSON.stringify({
            ingredients: array,
          }),
        });
        const data = await res.json();
        setIdOder(data.order.number);
      } catch (error) {
        console.log("ошибка");
      }
    };
    getProductData(idArray);
  };

  //HFCRJVVTYNBNM!!!
  let count = 0;

  return (
    <div>
      <div className={`${burgerConstructorStyles.konstructor} mt-25 mb-10`}>
        {isOpened && (
          <Modal onClose={toggleModal} idOder={idOder}>
            <OrderDetails idOder={idOder} />
          </Modal>
        )}
        <div className={`${burgerConstructorStyles.element} pl-8`}>
          {state.map((stateItem) =>
            stateItem.type === "bun" && count == 0 ? (
              <div key={stateItem._id}>
                {console.log(count++)}
                <div
                  className={`${burgerConstructorStyles.element} mt-4`}
                  key={stateItem._id}
                >
                  <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={stateItem.name + " (верх)"}
                    price={stateItem.price}
                    thumbnail={stateItem.image}
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className={`${burgerConstructorStyles.elementVar} mt-4`}>
          {state.map((state) =>
            state.type === "sauce" || state.type === "main" ? (
              <div
                className={`${burgerConstructorStyles.element} mt-4`}
                key={state._id}
              >
                <DragIcon />
                <ConstructorElement
                  text={state.name}
                  price={state.price}
                  thumbnail={state.image}
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className={`${burgerConstructorStyles.element} mt-4 pl-8`}>
          {state.map((stateItem) =>
            stateItem.type === "bun" && count == 1 ? (
              <div key={stateItem._id}>
                {console.log(count++)}
                <div
                  className={`${burgerConstructorStyles.element} mt-4`}
                  key={stateItem._id}
                >
                  <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={stateItem.name + " (низ)"}
                    price={stateItem.price}
                    thumbnail={stateItem.image}
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className={burgerConstructorStyles.itogi}>
        <span className="text text_type_digits-medium mr-2">{totalPrice}</span>
        <div className="mr-10">
          <CurrencyIcon />
        </div>
        <Button onClick={toggleModal}>Оформить заказ</Button>
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
  value: PropTypes.arrayOf(burgerIngredientsPropTypes),
};

export default BurgerConstructor;
