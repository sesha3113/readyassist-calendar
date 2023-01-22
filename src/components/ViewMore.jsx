import React, { useState } from 'react';
import Right from '../resources/icons/Right';
import { tConvert } from '../utils/Helper';

const ViewMore = ({ eventDetails }) => {
    const [selectedEvent, setSelectedEvent] = useState(eventDetails[0]);
    return (
        <div className='flex flex-row divide-x min-h-[200px]'>
            <div className='w-1/2'>
                {
                    eventDetails.map((event) => {
                        return (
                            <div className='group cursor-pointer hover:bg-slate-100 py-2 px-2 flex flex-row justify-between border-b first:border-t' onClick={() => setSelectedEvent(event)}>
                                {event.name}
                                <Right className={'hidden add-prop'} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-1/2'>
                <div className='ml-3 divide-y'>
                    <div className='my-2 pt-2'>Name: <span className='text-stone-600'>{selectedEvent.name}</span></div>
                    <div className='my-2 pt-2'>Title: <span className='text-stone-600'>{selectedEvent.title}</span></div>
                    <div className='my-2 pt-2'>Time: <span className='text-stone-600'>{tConvert(selectedEvent.from)} - {tConvert(selectedEvent.to)}</span></div>
                    {selectedEvent.description && <div className='my-2 pt-2'>Description: <span className='text-stone-600'>{selectedEvent.description}</span></div>}
                    {selectedEvent.link && <div className='my-2 pt-2'>Link: <span className='text-stone-600'> <a className='hover:text-blue-500' href={selectedEvent.link} target='_blank' rel="noreferrer">{selectedEvent.link}</a></span></div>}
                    {(selectedEvent.joiners.length > 0) &&
                        (
                            <div className='my-2 pt-2'>Joiners:
                                <span className='ml-1 text-stone-600'>
                                    {selectedEvent.joiners.map((joiner, index) => {
                                        return (
                                            <>
                                                <span key={index} className={`mr-1 capitalize ${index !== selectedEvent.joiners.length - 1 ? "comma" : ""}`}>{joiner}</span>
                                            </>
                                        )
                                    })}
                                </span>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
export default ViewMore;