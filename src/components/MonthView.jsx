import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { AppContext } from '../Context/context';
import Event from './Event';
import Add from '../resources/icons/Add';
import { getSession, handlePreviousMonthClick, handleNextMonthClick } from '../utils/Helper';
import Data from '../utils/Data.jsx'


const MonthView = () => {

    const { eventPeriod, setEventPeriod, events, currentDate, setCurrentDate, setAddEventModalOpen } = useContext(AppContext)
    const { monthNames, days } = Data;
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const handleDateClick = (day) => {
        setEventPeriod({
            "date": day,
            "month": monthNames[currentDate.getMonth()],
            "year": currentDate.getFullYear()
        })
        setAddEventModalOpen(true);
    }


    return (
        <div className="calendar p-5">
            <div className="flex flex-row items-center justify-between">
                <AiOutlineLeft className='text-2xl font-bold cursor-pointer' onClick={() => handlePreviousMonthClick(currentDate, setCurrentDate)} />
                <span className='text-xl font-bold'>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                <AiOutlineRight className='text-2xl font-bold cursor-pointer' onClick={() => handleNextMonthClick(currentDate, setCurrentDate)} />
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
                        <div className='flex gap-x-2.5' key={weekIndex}>
                            {[...Array(7)].map((_, dayIndex) => {
                                const day = weekIndex * 7 + dayIndex - firstDayOfMonth + 1;
                                return (
                                    <div
                                        key={`${day}${monthNames[currentDate.getMonth()]}${currentDate.getFullYear()}`}
                                        className={`group min-w-withoutGap h-[75px] bg-slate-50 text-end p-2 hover:drop-shadow-md overflow-hidden ${day > 0 && day <= daysInMonth ? "" : "disabled"} ${day === eventPeriod?.date ? "selected" : ""}`}
                                    >
                                        <Add className={'w-6 h-6 hidden absolute cursor-pointer add-prop'} onClickHandler={() => handleDateClick(day)} />
                                        {day > 0 && day <= daysInMonth ? (
                                            <>
                                                {day}
                                                <Event view='month' events={events} day={day} month={monthNames[currentDate.getMonth()]} year={currentDate.getFullYear()} />
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
