import Stopwatch from "../components/Stopwatch/Stopwatch";
import TodoList from "../components/TodoList";
import classNames from "classnames";
import MainPageCSS from './MainPage.module.css';
import ThemeContext from "../context/ThemeContext";
import {useContext} from "react";

function MainPage() {
    const { theme } = useContext(ThemeContext);
    const themeClass = theme === 'primary' ? 'primary-color' : 'primary-color-alt';

    return (
        <main className={classNames(MainPageCSS.container, themeClass)}>
            <Stopwatch />
            <TodoList />
        </main>
    );
}

export default MainPage;