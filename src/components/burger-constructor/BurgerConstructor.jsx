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
import { useState, useEffect, useRef } from "react";
import { useContext } from "react"; //новый месяц
import { BurgerData } from "../../services/appContext.js"; //новый месяц

// function BurgerConstructor(props) {
function BurgerConstructor() {
  const [isOpened, setIsOpened] = useState(false);
  const { state, setState } = useContext(BurgerData); //новый месяц
  const [totalPrice, setTotalPrice] = useState({}); //новый месяц

  function toggleModal() {
    setIsOpened(!isOpened);
    getDataOrderId();
  }
  useEffect(() => {
    let total = 0;
    state.map((item) => (total += item.price));
    setTotalPrice({ result: total, id: Date.now() });
  }, [state, setTotalPrice]);

  const config = {
    baseUrl: "https://norma.nomoreparties.space/api/orders",
    headers: {
      "Content-Type": "application/json",
    },
  };
  // const checkResponse = (res) => {
  //   return res.ok ? res.json() : Promise.reject(res);
  // };

  //Получаем массив id
  let idArray = state.map((item) => item._id); //- работало

  // let idArray = "60d3b41abdacab0026a733c6";
  // idArray = state.map((item) => item._id);
  // console.log(idArray);

  // получаем карточки с сервера useeffect
  const [idOder, setIdOder] = useState(); //новый месяц

  // useEffect(() => {
  //   const getProductData = async (array) => {
  //     try {
  //       const res = await fetch(config.baseUrl, {
  //         method: "POST",
  //         headers: config.headers,
  //         body: JSON.stringify({
  //           ingredients: array,
  //         }),
  //       });
  //       console.log(array);
  //       const data = await res.json();
  //       setIdOder(data.order.number);
  //     } catch (error) {
  //       console.log("ошибка");
  //     }
  //   };
  //   getProductData(idArray);
  // }, [isOpened]);
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
        // console.log(array);
        const data = await res.json();
        setIdOder(data.order.number);
      } catch (error) {
        console.log("ошибка");
      }
    };
    getProductData(idArray);
  };
  // получаем карточки с сервера
  // let oderResult = async function getOderNumber(array) {
  //   const res = await fetch(config.baseUrl, {
  //     method: "POST",
  //     headers: config.headers,
  //     body: JSON.stringify({
  //       ingredients: array,
  //     }),
  //   });
  //   return checkResponse(res);
  // };

  // let DATA = oderResult(idArray);
  // let idOderResult = DATA.then(function (result) {
  //   console.log(result.order.number); // "Some User token"
  //   return result.order.number;
  // });

  // console.log(idOderResult);

  //ассинхронный как в app
  // const [idResult, setIdResult] = useState(""); //новый месяц
  // useEffect(() => {
  //   const oderResult = async (idArray) => {
  //     try {
  //       const res = await fetch(config.baseUrl, {
  //         method: "POST",
  //         headers: config.headers,
  //         body: JSON.stringify({
  //           ingredients: idArray,
  //         }),
  //       });
  //       if (!res.ok) {
  //         throw new Error(`Error status - ${res.status}`);
  //       }
  //       const DATA2 = await res.json();
  //       setIdResult(DATA2.data);
  //     } catch (error) {
  //       idResult([]);
  //     }
  //   };
  //   oderResult();
  // }, []);

  // console.log(idResult);
  //ассинхронный как в app конец

  // let a = fetch("https://anapioficeandfire.com/api/characters/583")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  // console.log(a);

  //HFCRJVVTYNBNM!!!
  let count = 0;

  return (
    <div>
      <div className={`${BurgerConstructorStyles.konstructor} mt-25 mb-10`}>
        {isOpened && (
          <Modal onClose={toggleModal} idOder={idOder}>
            {/* <IdOrder.Provider value={{ count }}> */}
            <OrderDetails idOder={idOder} />
            {/* </IdOrder.Provider> */}
          </Modal>
        )}
        <div className={`${BurgerConstructorStyles.element} pl-8`}>
          {state.map((stateItem) =>
            stateItem.type === "bun" && count == 0 ? (
              <div key={stateItem._id}>
                {console.log(count++)}
                <div
                  className={`${BurgerConstructorStyles.element} mt-4`}
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
        <div className={`${BurgerConstructorStyles.elementVar} mt-4`}>
          {state.map((state) =>
            state.type === "sauce" || state.type === "main" ? (
              <div
                className={`${BurgerConstructorStyles.element} mt-4`}
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
        <div className={`${BurgerConstructorStyles.element} mt-4 pl-8`}>
          {state.map((state) =>
            state.name === "Краторная булка N-200i" ? (
              <div
                className={`${BurgerConstructorStyles.element} mt-4`}
                key={state._id}
              >
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={state.name + " (низ)"}
                  price={state.price}
                  thumbnail={state.image}
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className={BurgerConstructorStyles.itogi}>
        <span className="text text_type_digits-medium mr-2" key={totalPrice.id}>
          {totalPrice.result}
        </span>
        <div className=" mr-10">
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
