const initialDate = '2020-11-24'; // 17 nov 2020
const maxDate = new Date(initialDate);
maxDate.setDate(maxDate.getDate() + 14);

const SECONDS = 'SECONDS';
const MINUTES = 'MINUTES';
const HOURS = 'HOURS';
const DAYS = 'DAYS';

const dividers = {
    [DAYS]: 1000 * 60 * 60 * 24,
    [HOURS]: 1000 * 60 * 60,
    [MINUTES]: 1000 * 60,
    [SECONDS]: 1000,
}

const initial = {
    [SECONDS]: 0,
    [MINUTES]: 0,
    [HOURS]: 0,
    [DAYS]: 0,
};

export function getDiff(start) {
    if (start > maxDate) return null;

    const diff = Math.abs(maxDate - start); // ms
    return Object.entries(dividers).reduce((acc, curr) => {
        const { diff, ...rest } = acc;
        const [ key, value ] = curr;
        const n = Math.floor(diff / value);
        const newDiff = diff - n * value;
        return {
            ...rest,
            [key]: n,
            diff: newDiff
        };
    }, {...initial, diff });
}

export function formatDate(timeDiff) {
    const {
        [DAYS]: days,
        [HOURS]: hours,
        [MINUTES]: minutes,
        [SECONDS]: seconds,
    } = timeDiff;

    const formatValue = value => {
        const s = `${value}`;
        return s.length === 1
            ? `0${s}`
            : s;
    } 

    const initialString = days
        ? `${days}d `
        : '';

    return `${initialString} ${formatValue(hours)}:${formatValue(minutes)}:${formatValue(seconds)}`;
}
