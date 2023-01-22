import React, { useState, useContext } from 'react';
import MonthView from '../components/MonthView';
import ModalWrapper from '../components/Modal';
import Form from '../components/Form';
import DayView from '../components/DayView';
import { AppContext } from '../Context/context';
import ViewMore from '../components/ViewMore';

const Calendar = () => {
    const [view, setView] = useState("month");
    const { isViewMoreModalOpen, setIsViewMoreModalOpen, modalEventsDetails, isAddEventModalOpen, setAddEventModalOpen } = useContext(AppContext)
    const handleClick = (e) => {
        setView(e.target.id);
    }
    return (
        <div className='px-3 sm:px-10 md:px-15 lg:px-15 xl:px-15'>
            <div className='mt-6 text-[2rem]'>
                Schedule Events
            </div>
            <div className='mt-4'>
                <div className='flex flex-row bg-white p-6 justify-between rounded-md'>
                    <div className={`flex items-center justify-center h-[60px] text-xl w-[45%] cursor-pointer ${(view === 'month') ? 'active' : ''} `} id='month' onClick={handleClick}>
                        Month View
                    </div>
                    <div className={`flex items-center justify-center h-[60px] text-xl w-[45%] cursor-pointer ${(view === 'day') ? 'active' : ''} `} id='day' onClick={handleClick}>
                        Day View
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                {
                    view === 'month' && <MonthView />
                }
                {
                    view === 'day' && <DayView />
                }
            </div>
            <ModalWrapper isModalOpen={isAddEventModalOpen} setIsModalOpen={setAddEventModalOpen}>
                <Form />
            </ModalWrapper>
            <ModalWrapper isModalOpen={isViewMoreModalOpen} setIsModalOpen={setIsViewMoreModalOpen}>
                <ViewMore eventDetails={modalEventsDetails} />
            </ModalWrapper>
        </div>
    );
}

export default Calendar;
