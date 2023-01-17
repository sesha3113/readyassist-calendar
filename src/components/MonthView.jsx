import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { AppContext } from '../Context/context';

import Event from './Event';
import Add from '../resources/icons/Add';
const MonthView = ({ setIsModalOpen }) => {
    const { eventPeriod, setEventPeriod, events } = useContext(AppContext)
    const [currentDate, setCurrentDate] = useState(new Date());

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const handlePreviousClick = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    }

    const handleNextClick = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    }

    const handleDateClick = (day) => {
        setEventPeriod({
            "date": day,
            "month": monthNames[currentDate.getMonth()],
            "year": currentDate.getFullYear()
        })
        setIsModalOpen(true);
    }


    return (
        <div className="calendar p-5">
            <div className="flex flex-row items-center justify-between">
                <AiOutlineLeft className='text-2xl font-bold cursor-pointer' onClick={handlePreviousClick} />
                <span className='text-xl font-bold'>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                <AiOutlineRight className='text-2xl font-bold cursor-pointer' onClick={handleNextClick} />
            </div>
            <div className='w-full mt-4'>
                <div>
                    <div className='flex flex-row gap-x-2.5' >
                        {days.map((day) => {
                            return (
                                <div className='min-w-withoutGap text-center'>
                                    {day}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='flex flex-col gap-y-2.5 mt-4'>
                    {[...Array(Math.ceil((daysInMonth + firstDayOfMonth) / 7))].map((_, weekIndex) => (
                        // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <div className='flex gap-x-2.5' key={weekIndex}>
                            {[...Array(7)].map((_, dayIndex) => {
                                const day = weekIndex * 7 + dayIndex - firstDayOfMonth + 1;
                                return (
                                    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                                    <div
                                        // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                        key={`${day}${monthNames[currentDate.getMonth()]}${currentDate.getFullYear()}`}
                                        className={`group min-w-withoutGap h-[75px] bg-slate-50 text-end p-2 hover:drop-shadow-md overflow-hidden ${day > 0 && day <= daysInMonth ? "" : "disabled"} ${day === eventPeriod?.date ? "selected" : ""}`}
                                    // onClick={() => handleDateClick(day)}
                                    >
                                        <Add className={'hidden absolute cursor-pointer add-prop'} onClickHandler={() => handleDateClick(day)} />
                                        {day > 0 && day <= daysInMonth ? (
                                            <>
                                                {day}
                                                <Event events={events} day={day} month={monthNames[currentDate.getMonth()]} year={currentDate.getFullYear()} />
                                            </>

                                        ) : ""}

                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MonthView;
