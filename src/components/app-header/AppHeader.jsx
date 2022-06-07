import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Typography,
  Box,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeaderStyles from "../app-header/AppHeader.module.css";

function AppHeader() {
  return (
    <header className={AppHeaderStyles.header}>
      <div className={AppHeaderStyles.konstLenta}>
        <div className={`${AppHeaderStyles.konstructor} mb-4 mt-4 p-5 mr-2`}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default ml-2 ">Конструктор</p>
        </div>
        <div className={`${AppHeaderStyles.lenta} mb-4 mt-4 p-5`}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive ml-2">
            Лента заказов
          </p>
        </div>
      </div>
      <Logo />
      <div className={`${AppHeaderStyles.kabynet} mb-4 mt-4 p-5`}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive ml-2">
          Личный кабинет
        </p>
      </div>
    </header>
  );
}

export default AppHeader;
