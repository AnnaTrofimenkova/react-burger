import ingredientDetailsCSS from "./IngredientDetails.module.css";

import PropTypes from "prop-types";
import { burgerIngredientsPropTypes } from "../../utils/types";

function IngredientDetails(props) {
  return (
    <>
      <img
        className={ingredientDetailsCSS.image}
        src={props.item.image}
        alt={props.item.name}
      />

      <p className={"text text_type_main-medium mt-4 mb-8"}>
        {props.item.name}
      </p>

      <div>
        <ul className={ingredientDetailsCSS.list}>
          <li
            className={`${ingredientDetailsCSS.list__item} text text_type_main-default text_color_inactive`}
          >
            Калории,ккал
            <span className="text text_type_digits-default">
              {props.item.calories}
            </span>
          </li>

          <li
            className={`${ingredientDetailsCSS.list__item} text text_type_main-default text_color_inactive`}
          >
            Белки, г
            <span className="text text_type_digits-default">
              {props.item.proteins}
            </span>
          </li>

          <li
            className={`${ingredientDetailsCSS.list__item} text text_type_main-default text_color_inactive`}
          >
            Жиры, г
            <span className="text text_type_digits-default">
              {props.item.fat}
            </span>
          </li>

          <li
            className={`${ingredientDetailsCSS.list__item} text text_type_main-default text_color_inactive`}
          >
            Углеводы, г
            <span className="text text_type_digits-default">
              {props.item.carbohydrates}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default IngredientDetails;

IngredientDetails.propTypes = {
  item: burgerIngredientsPropTypes,
};
