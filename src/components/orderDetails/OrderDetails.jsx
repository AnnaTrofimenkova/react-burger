import galka from "../../images/galka.png";
import PropTypes from "prop-types";
// import { IdOrder } from "../../services/idOrder"; //новый месяц
// import { useContext } from "react"; //новый месяц

function OrderDetails(props) {
  // const { number, setNumber } = useContext(IdOrder);
  console.log(props.idOder);
  let tesr = 5;
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
