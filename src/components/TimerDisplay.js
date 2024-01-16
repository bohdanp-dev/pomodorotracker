import StopwatchCSS from './Stopwatch.module.css';
import classNames from "classnames";
import {formatTime} from "../utils/formatTime";
const TimerDisplay = ({ timeLeft }) => {
    return (
        <label className={classNames(StopwatchCSS.counter)}>
            {formatTime(timeLeft)}
        </label>
    );
};

export default TimerDisplay;