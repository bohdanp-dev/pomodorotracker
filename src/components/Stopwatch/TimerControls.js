import StopwatchCSS from './Stopwatch.module.css';
import classNames from "classnames";
import {Icon} from "@iconify/react";
const TimerControls = ({ isTicking, handleStart, handleSkipPhase }) => {
    return (
        <div className={classNames(StopwatchCSS.startStopGrid)}>
            <button className={classNames(StopwatchCSS.horizontalMargin10, StopwatchCSS.buttonStopwatch, StopwatchCSS.gridStartButton, "button-primary")} aria-label="start/pause button" onClick={handleStart}>{isTicking ? "Pause" : "Start"}</button>
            <button className={classNames(StopwatchCSS.horizontalMargin10, StopwatchCSS.buttonStopwatch, StopwatchCSS.gridStopButton, "button-primary")} aria-label="skip current pomodoro phase button" onClick={handleSkipPhase} ><Icon className={classNames(StopwatchCSS.flipIcon180, StopwatchCSS.nextPhaseIcon)} icon={"foundation:previous"}/></button>
        </div>
    );

};

export default TimerControls;