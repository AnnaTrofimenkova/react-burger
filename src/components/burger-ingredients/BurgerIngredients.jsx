import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
  Tab,
  Typography,
  Box,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientsStyles from "../burger-ingredients/BurgerIngredients.module.css";
import { burgerIngredientsPropTypes } from "../../utils/types";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredientDetails/IngredientDetails";

function BurgerIngredients(props) {
  const [current, setCurrent] = useState("Булки");

  const [isOpened, setIsOpened] = useState(false);
  function toggleModal(props) {
    setIsOpened(props);
  }

  return (
    <div className={`${burgerIngredientsStyles.main} mr-10`}>
      <h1>Соберите бурегр</h1>
      <div className={`${burgerIngredientsStyles.tab} mb-10`}>
        <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value="Начинки"
          active={current === "Начинки"}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>
      <div className={burgerIngredientsStyles.mainPannel}>
        <section>
          <p className="text text_type_main-medium mb-6">Булки</p>
          <div className={burgerIngredientsStyles.items}>
            {props.data.map((props) =>
              props.type === "bun" ? (
                <div
                  className={burgerIngredientsStyles.item}
                  key={props._id}
                  onClick={() => {
                    toggleModal(props);
                  }}
                >
                  <img
                    className={burgerIngredientsStyles.img}
                    src={props.image}
                  ></img>
                  <p
                    className={`${burgerIngredientsStyles.cena} text text_type_digits-default`}
                  >
                    {props.price}{" "}
                    <span className="ml-2">
                      <CurrencyIcon />
                    </span>
                  </p>
                  <p>{props.name}</p>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </section>
        <section>
          <p className="text text_type_main-medium mb-6">Соусы</p>
          <div className={burgerIngredientsStyles.items}>
            {props.data.map((props) =>
              props.type === "sauce" ? (
                <div
                  className={burgerIngredientsStyles.item}
                  key={props._id}
                  onClick={() => {
                    toggleModal(props);
                  }}
                >
                  <img
                    className={burgerIngredientsStyles.img}
                    src={props.image}
                  ></img>
                  <p
                    className={`${burgerIngredientsStyles.cena} text text_type_digits-default`}
                  >
                    {props.price}{" "}
                    <span className="ml-2">
                      <CurrencyIcon />
                    </span>
                  </p>
                  <p>{props.name}</p>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </section>
        <section>
          <p className="text text_type_main-medium mb-6">Начинки</p>
          <div className={burgerIngredientsStyles.items}>
            {props.data.map((props) =>
              props.type === "main" ? (
                <div
                  className={burgerIngredientsStyles.item}
                  key={props._id}
                  onClick={() => {
                    toggleModal(props);
                  }}
                >
                  <img
                    className={burgerIngredientsStyles.img}
                    src={props.image}
                  ></img>
                  <p
                    className={`${burgerIngredientsStyles.cena} text text_type_digits-default`}
                  >
                    {props.price}{" "}
                    <span className="ml-2">
                      <CurrencyIcon />
                    </span>
                  </p>
                  <p>{props.name}</p>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </section>
      </div>
      {isOpened && (
        <Modal onClose={toggleModal} title={"Детали ингредиента"}>
          <IngredientDetails item={isOpened} />
        </Modal>
      )}
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(burgerIngredientsPropTypes).isRequired,
};

export default BurgerIngredients;
