import StopwatchCSS from './Stopwatch.module.css';
import classNames from "classnames";
const PhaseDisplay = ({ timerType, POMODORO_TIMER_TYPE, BREAK_TIMER_TYPE }) => {
    return (
        <>
            <div className={classNames(StopwatchCSS.gridPomodoroPhase, StopwatchCSS.phaseDiv, {[StopwatchCSS.phaseDivActive]: timerType===POMODORO_TIMER_TYPE})}>Pomodoro</div>
            <div className={classNames(StopwatchCSS.gridBreakPhase, StopwatchCSS.phaseDiv, {[StopwatchCSS.phaseDivActive]: timerType===BREAK_TIMER_TYPE})}>Break</div>
        </>
    );
};

export default PhaseDisplay;