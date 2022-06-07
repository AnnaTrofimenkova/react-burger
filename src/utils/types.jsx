import PropTypes from "prop-types";

export const burgerIngredientsPropTypes = PropTypes.shape({
  data: PropTypes.array.isRequired,
  _id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}).isRequired;
