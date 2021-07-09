import { Fragment } from "react";
import mealsImg from "../../assets/chocolate.jpg"
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="chocolate and raspberries"/>
            </div>
        </Fragment>
    )
}

export default Header;