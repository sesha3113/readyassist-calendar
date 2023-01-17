import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Close from '../resources/icons/close';

const ModalWrapper = ({ children, isModalOpen, setIsModalOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isModalOpen)
    }, [isModalOpen])

    const closeModal = () => {
        setIsOpen(false)
        setIsModalOpen(false)
    }


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <>
            <Modal
                isOpen={isOpen}
                style={customStyles}
            >
                <div className='flex justify-end' >
                    <div className='cursor-pointer' onClick={closeModal}>
                        <Close />
                    </div>
                </div>
                {children}
            </Modal>
        </>
    )
}

export default ModalWrapper;