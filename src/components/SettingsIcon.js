import classNames from "classnames";
import StopwatchCSS from './Stopwatch/Stopwatch.module.css';
import {Icon} from "@iconify/react";

const SettingsIcon = ({ handleOpenModal }) => {
    return (
        <Icon onClick={handleOpenModal} className={classNames(StopwatchCSS.settingsIcon)} icon={'simple-line-icons:settings'}/>
    );
};

export default SettingsIcon;