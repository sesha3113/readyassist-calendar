import React, { createContext, useState } from 'react';
import { getSession } from '../utils/Helper';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [eventPeriod, setEventPeriod] = useState(null);
    const [events, setEvents] = useState(getSession("events") || []);
    const [currentDate, setCurrentDate] = useState(getSession('currentMonth') ? new Date(getSession('currentMonth')) : new Date());
    const [isViewMoreModalOpen, setIsViewMoreModalOpen] = useState(false);
    const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);
    const [modalEventsDetails, setModalEventsDetails] = useState([])
    const value = {
        eventPeriod,
        setEventPeriod,
        events,
        setEvents,
        currentDate,
        setCurrentDate,
        isViewMoreModalOpen,
        setIsViewMoreModalOpen,
        modalEventsDetails,
        setModalEventsDetails,
        isAddEventModalOpen,
        setAddEventModalOpen
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;