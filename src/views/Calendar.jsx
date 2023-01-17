import React, { useState } from 'react';
import MonthView from '../components/MonthView';
import ModalWrapper from '../components/Modal';
import Form from '../components/Form';
import DayView from '../components/DayView';

const Calendar = () => {
    const [view, setView] = useState("month");
    const [isModalOpen, setIsModalOpen] = useState();
    const handleClick = (e) => {
        setView(e.target.id);
    }

    return (
        <div className='px-40'>
            <div className='mt-6 text-[2rem]'>
                Schedule Events
            </div>
            <div className='mt-4'>
                <div className='flex flex-row bg-white p-6 justify-between rounded-md'>
                    {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <div className={`flex items-center justify-center h-[60px] text-xl w-[45%] cursor-pointer ${(view === 'month') ? 'active' : ''} `} id='month' onClick={handleClick}>
                        Month View
                    </div>
                    {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <div className={`flex items-center justify-center h-[60px] text-xl w-[45%] cursor-pointer ${(view === 'day') ? 'active' : ''} `} id='day' onClick={handleClick}>
                        Day View
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                {
                    view === 'month' && <MonthView setIsModalOpen={setIsModalOpen} />
                }
                {
                    view === 'day' && <DayView />
                }
            </div>
            <ModalWrapper isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <Form setIsModalOpen={setIsModalOpen} />
            </ModalWrapper>
        </div>
    );
}

export default Calendar;
