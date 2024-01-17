import classNames from "classnames";
import StopwatchCSS from './Stopwatch/Stopwatch.module.css';
import {Icon} from "@iconify/react";
import { motion } from 'framer-motion';

const SettingsIcon = ({ handleOpenModal }) => {
    const spinAnimationVariant = {
        hover: {
            rotate: 360,
            transition: {
                duration: 0.6,
                ease: "linear",
            }
        },

    }
    return (
            <div
            >
                <motion.div
                    variants={spinAnimationVariant}
                    whileHover="hover"
                    className={classNames(StopwatchCSS.innerDivSettingsIcon)}
                >
                    <Icon onClick={handleOpenModal} icon={'simple-line-icons:settings'} className={classNames(StopwatchCSS.settingsIcon)}/>
                </motion.div>
            </div>
    );
};

export default SettingsIcon;