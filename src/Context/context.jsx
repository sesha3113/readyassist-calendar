import React, { createContext, useState } from 'react';
import { getSession } from '../utils/Helper';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [eventPeriod, setEventPeriod] = useState(null);
    const [events, setEvents] = useState(getSession("events") || []);
    const value = {
        eventPeriod,
        setEventPeriod,
        events,
        setEvents
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;