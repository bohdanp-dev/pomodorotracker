export function formatTime(ms) {
    if (ms < 0) ms = 0;

    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    function pad(time) {
        return time < 10 ? '0' + time : time;
    }

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}