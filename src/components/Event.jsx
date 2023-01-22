import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../Context/context';
import ModalWrapper from './Modal';
import ViewMore from './ViewMore';
import { tConvert } from '../utils/Helper';
import Add from '../resources/icons/Add';
import More from '../resources/icons/More';

const Event = (props) => {
    const { day, month, year, view, hour } = props;
    const { events, setEventPeriod, setIsViewMoreModalOpen, setModalEventsDetails, setAddEventModalOpen } = useContext(AppContext)
    const [eventDetails, setEventDetails] = useState([])

    useEffect(() => {
        events.forEach((event) => {
            if (event.date?.date === day && event.date?.month === month && event.date?.year === year) {
                view === 'month' && setEventDetails(eventDetails => [...eventDetails, event]);
                if (view === 'day' && hour === +event.from.split(':')[0]) {
                    setEventDetails(eventDetails => [...eventDetails, event])
                }
            }
        })
    }, [])
    const handleAddEvent = () => {
        setEventPeriod({
            "date": day,
            "month": month,
            "year": year,
            "from": hour === 0 ? 12 : hour
        })
        setAddEventModalOpen(true);
    }

    const handViewMore = () => {
        setModalEventsDetails(eventDetails);
        setIsViewMoreModalOpen(true);
    }
    return view === 'month' ? (
        <>
            {
                eventDetails.length > 0 && (
                    <>
                        <div>
                            <div className='text-start flex items-center'>
                                <div className='h-[7px] w-[7px] inline-block rounded-full bg-red-500' />
                                <span className='text-xs ml-1 overflow-control'>{eventDetails[0].title} {(eventDetails[0].from && eventDetails[0].to) ? `${tConvert(eventDetails[0].from)} - ${tConvert(eventDetails[0].to)}` : ''}</span>
                            </div>
                        </div>
                        <div className='hidden lg:block text-xs hover:font-bold cursor-pointer' onClick={handViewMore}>
                            Detail view..
                        </div>
                        <More onClickHandler={() => handViewMore()} />
                    </>
                )
            }
        </>
    ) : (
        <div className='ml-4 w-full group'>
            {
                eventDetails.length > 0 ? (
                    <>
                        <div className='text-start flex items-center'>
                            <span className='text-xs ml-1 overflow-control grow bg-indigo-100 border-l-4 border-indigo-500 pl-2 py-1'>{eventDetails[0].title} {(eventDetails[0].from && eventDetails[0].to) ? `${tConvert(eventDetails[0].from)} - ${tConvert(eventDetails[0].to)}` : ''}</span>
                        </div>
                        <div className='flex mt-1 justify-between'>
                            <div className='group text-xs hover:font-bold cursor-pointer w-fit flex items-center'>
                                <Add className={'w-5 h-5 hidden cursor-pointer add-prop mr-1'} onClickHandler={() => handleAddEvent()} />
                            </div>
                            <div className='text-xs hover:font-bold cursor-pointer w-fit' onClick={handViewMore}>
                                Detail view..
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='group h-full'>
                            <Add className={'w-5 h-5 hidden cursor-pointer add-prop mr-1'} onClickHandler={() => handleAddEvent()} />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Event;