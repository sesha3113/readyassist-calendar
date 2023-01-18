import React, { useContext, useState, useEffect, useRef } from 'react'
import { AppContext } from '../Context/context';
import { setSession } from '../utils/Helper';
import { useNavigate } from "react-router-dom";
import Validations from '../utils/Validations'

const Form = (prop) => {
    const { eventPeriod, events, setEvents } = useContext(AppContext)
    const { setIsModalOpen } = prop
    const { date, month, year } = eventPeriod;
    const [formData, setFormData] = useState();
    const [joiners, setJoiners] = useState([]);
    const [nameError, setNameError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [timeError, setTimeError] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    let joinersRef = useRef(null);
    const { nameValidationRules, titleValidationRules } = Validations;
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        setNameError('')
        setTitleError('')
        setTimeError('')
        setError('')
    }
    const handleSubmit = () => {
        const isValid = validateForm()
        if (isValid) {
            formData.joiners = joiners;
            formData.date = eventPeriod;
            setEvents([...events, formData]);
            setSession("events", events);
            setIsModalOpen(false);
            navigate(0);
        }
    }
    const addJoiners = () => {
        setJoiners([...joiners, joinersRef.current.value])
        joinersRef.current.value = '';
    }
    useEffect(() => {
        setSession("events", events)
    }, [events])
    const validateForm = () => {
        let valid = true;
        if (!formData) {
            valid = false;
            setError('Kindly fill the required details');
        }
        for (let itr = 0; itr < nameValidationRules.length; itr++) {
            let result = nameValidationRules[itr](formData.name);
            if (result !== true) {
                setNameError(result);
                valid = false;
                break;
            }
        }
        console.log("linit", (formData.from <= formData.to));
        console.log("con", valid && !((formData.to && formData.from) || (formData.from <= formData.to)));


        if (valid && !((formData.to && formData.from) && (formData.from <= formData.to))) {
            console.log("erroe");
            setTimeError('Start and End Time are missing or invalid');
            valid = false;
        }
        if (valid) {
            for (let itr = 0; itr < titleValidationRules.length; itr++) {
                let result = titleValidationRules[itr](formData.title);
                if (result !== true) {
                    setTitleError(result);
                    valid = false;
                    break;
                }
            }
        }
        return valid;
    };



    return (
        <>
            {/* Name */}
            <div className="flex justify-center items-center flex-col mb-3">
                <div className="xl:w-96">
                    <label for="name" className="form-label inline-block mb-2 text-gray-700">Name</label>
                    <span className="text-red-500"> *</span>
                    <input
                        type="text"
                        className={`btn focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${nameError ? '!border-red-500' : ''}`}
                        id="name"
                        name="name"
                        placeholder="Eg: John"
                        onChange={handleChange}
                    />
                </div>
                {nameError && (
                    <div className='text-sm text-red-500'>
                        {nameError}
                    </div>
                )}
            </div>

            {/* Date */}
            <div className="flex items-center justify-center">
                <div className="datepicker relative form-floating mb-3 xl:w-96">
                    <label for="date" className="form-label inline-block mb-2 text-gray-700">Date</label>
                    <span className="text-red-500"> *</span>
                    <input id="date" name="date" type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded m-0 bg-gray-300" disabled value={`${month} ${date}, ${year}`} onChange={handleChange} />
                </div>
            </div>
            {/* Time */}
            <div className="flex justify-center items-center flex-col mb-3">
                <div className="datepicker relative form-floating xl:w-96">
                    <label for="time" className="form-label inline-block mb-2 text-gray-700">Time</label>
                    <span className="text-red-500"> *</span>
                    <div className='flex gap-[6px]'>
                        <input type="time" name="from" className={`!w-1/2 btn focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${timeError ? '!border-red-500' : ''}`} onChange={handleChange} />
                        <input type="time" name="to" className={`!w-1/2 btn focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${timeError ? '!border-red-500' : ''}`} onChange={handleChange} />
                    </div>
                </div>
                {timeError && (
                    <div className='text-sm text-start text-red-500'>
                        {timeError}
                    </div>
                )}
            </div>
            {/* Title */}
            <div className="flex justify-center items-center flex-col mb-3">
                <div className="xl:w-96">
                    <label for="title" className="form-label inline-block mb-2 text-gray-700">Title</label>
                    <span className="text-red-500"> *</span>
                    <input
                        type="text"
                        className={`btn focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${titleError ? '!border-red-500' : ''}`}
                        id="title"
                        name="title"
                        placeholder="Eg: Interview call"
                        onChange={handleChange}
                    />
                </div>
                {titleError && (
                    <div className='text-sm text-red-500'>
                        {titleError}
                    </div>
                )}
            </div>
            {/* Description */}
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <label for="description" className="form-label inline-block mb-2 text-gray-700">Description</label>
                    <textarea
                        className="btn focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="description"
                        name="description"
                        placeholder="Eg: Start writing here.."
                        onChange={handleChange}
                    />
                </div>
            </div>
            {/* Link */}
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <label for="title" className="form-label inline-block mb-2 text-gray-700">link</label>
                    <input
                        type="text"
                        className="btn focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="link"
                        name="link"
                        placeholder="Eg: Interview link"
                        onChange={handleChange}
                    />
                </div>
            </div>
            {/* Joiners */}
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <label for="joiners" className="form-label inline-block mb-2 text-gray-700">Joiners</label>
                    <div className='flex gap-[6px]'>
                        <input
                            type="text"
                            className="btn focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="joiners"
                            name="joiners"
                            placeholder="Eg: Mark"
                            ref={joinersRef}
                        />
                        <button className="xl:w-32 inline-flex justify-center rounded-md border border-transparent bg-[#94a3b8] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#64748b] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={addJoiners}> Add </button>
                    </div>
                    <div className='mt-2 flex flex-wrap gap-[6px]'>
                        {joiners && (
                            joiners.map((joiner) => {
                                return (
                                    <span className='px-3 py-1 rounded-lg border-[1px] border-[#94a3b8]' >
                                        {joiner}
                                    </span>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
            {/* Submit */}
            <div className="flex justify-center">
                <button
                    onClick={handleSubmit}
                    className="mb-3 xl:w-96 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Save
                </button>
            </div>
            {error &&
                (
                    <div className='text-sm text-red-500 flex justify-center'>
                        <div className='mb-3 xl:w-96'>
                            {error}
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default Form;