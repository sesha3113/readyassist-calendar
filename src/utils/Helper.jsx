export const setSession = (key, value) => {
    key && value && sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSession = (key) => {
    let result = sessionStorage.getItem(key);
    return result ? JSON.parse(result) : result;
};

const setDataInStateAndSession = (setState, data, sessionName) => {
    setState(data);
    setSession(sessionName, data);
}

export const handlePreviousMonthClick = (currentDate, setCurrentDate) => {
    const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    setDataInStateAndSession(setCurrentDate, prevDate, 'currentMonth');
}

export const handleNextMonthClick = (currentDate, setCurrentDate) => {
    const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    setDataInStateAndSession(setCurrentDate, nextDate, 'currentMonth');
}

export const handlePreviousDayClick = (currentDate, setCurrentDate) => {
    const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1)
    setDataInStateAndSession(setCurrentDate, prevDate, 'currentMonth');
}

export const handleNextDayClick = (currentDate, setCurrentDate) => {
    const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1)
    setDataInStateAndSession(setCurrentDate, nextDate, 'currentMonth');
}
export const tConvert = (time) => {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
        time = time.slice(1);
        time[5] = +time[0] < 12 ? ' AM' : ' PM';
        time[0] = +time[0] % 12 || 12;
    }
    return time.join('');
}