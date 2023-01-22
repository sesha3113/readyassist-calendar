import React, { useEffect } from 'react';
import Modal from 'react-modal';
import Close from '../resources/icons/close';

const ModalWrapper = ({ children, isModalOpen, setIsModalOpen }) => {

    useEffect(() => {
    }, [isModalOpen])

    const closeModal = () => {
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
                isOpen={isModalOpen}
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