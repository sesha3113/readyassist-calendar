import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../Context/context';
import ModalWrapper from './Modal';
import ViewMore from './ViewMore';

const Event = (props) => {
    const { day, month, year } = props;
    const { events } = useContext(AppContext)
    const [eventDetails, setEventDetails] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState();

    useEffect(() => {
        events.forEach((event) => {
            if (event.date?.date === day && event.date?.month === month && event.date?.year === year) {
                setEventDetails(eventDetails => [...eventDetails, event]);
            }
        })
    }, [])

    const handViewMore = () => {
        setIsModalOpen(true);
    }
    return (
        <>
            {
                eventDetails.length >= 1 && (
                    <>
                        <div>
                            <div className='text-start flex items-center'>
                                <div className='h-[7px] w-[7px] inline-block rounded-full bg-red-500' />
                                <span className='text-xs ml-1 overflow-control'>{eventDetails[0].title} {(eventDetails[0].from && eventDetails[0].to) ? `${eventDetails[0].from} - ${eventDetails[0].to}` : ''}</span>
                            </div>
                        </div>
                        {eventDetails.length > 0 && (
                            <div className='text-xs hover:font-bold cursor-pointer' onClick={handViewMore}>
                                Detail view..
                            </div>
                        )}
                        <ModalWrapper isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                            <ViewMore setIsModalOpen={setIsModalOpen} eventDetails={eventDetails} />
                        </ModalWrapper>
                    </>
                )
            }
        </>
    )
}

export default Event;