import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/context';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Data from '../utils/Data';
import { handlePreviousDayClick, handleNextDayClick } from '../utils/Helper';
import Event from './Event';

const DayView = () => {
    const { currentDate, setCurrentDate, events } = useContext(AppContext);
    const { monthNames } = Data;

    return (
        <div className='calendar p-5'>
            <div className="flex flex-row items-center justify-between">
                <AiOutlineLeft className='text-2xl font-bold cursor-pointer' onClick={() => handlePreviousDayClick(currentDate, setCurrentDate)} />
                <span className='text-xl font-bold'>{currentDate.getDate()} {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                <AiOutlineRight className='text-2xl font-bold cursor-pointer' onClick={() => handleNextDayClick(currentDate, setCurrentDate)} />
            </div>
            <div className='w-full mt-4'>
                {[...Array(24)].map((_, hourIndex) => {
                    const hour = (hourIndex === 0 || (hourIndex % 12) === 0) ? (12) : (hourIndex % 12);
                    return (
                        <div className='py-2 h-16 border-b first:border-t flex' key={`${hourIndex}${currentDate.getDate()}${monthNames[currentDate.getMonth()]}${currentDate.getFullYear()}`}>
                            {hour}
                            {
                                <div className='ml-1'>
                                    {
                                        (hourIndex === 12 ? 'noon' : (hourIndex > 12 ? 'pm' : 'am'))
                                    }
                                </div>
                            }
                            <Event view='day' events={events} day={currentDate.getDate()} month={monthNames[currentDate.getMonth()]} year={currentDate.getFullYear()} hour={hourIndex} />
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default DayView;