import galka from "../../images/galka.png";
import PropTypes from "prop-types";

function OrderDetails(props) {
  return (
    <>
      <div className={`text text_type_digits-large mt-10`}>{props.idOder}</div>
      <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
      <div className={`mt-15`}>
        <img src={galka} alt="готовим заказ" />
      </div>
      <p className={`text text_type_main-default`}>Ваш заказ начали готовить</p>
      <p
        className={`mt-2 mb-15 text text_type_main-default text_color_inactive`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}

OrderDetails.propTypes = {
  idOder: PropTypes.number,
};

export default OrderDetails;
