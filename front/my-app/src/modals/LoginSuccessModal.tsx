import React from 'react'
import Modal from 'react-modal'
import {ModalProps} from '../model/Props';


const LoginSuccessModal: React.FunctionComponent<ModalProps> = ({openModal, setOpenModal, setSuccessModal}) => {
    const openProfileModal = () => {
        setOpenModal(false);
        setSuccessModal!(true);
    }
    
    return ( 
        <Modal isOpen={openModal} closeTimeoutMS={300} ariaHideApp={false} className="modal">
            <div className='modal-header'> Successful login </div>
            <div className='modal-content !flex flex-column !items-center !g-3'>
                <p className='text-secondary-title'>Congratulations! You have successfully logged into FlowrSpot!</p>                
                <div className='flex justify-content-between gap-4'>
                    <button onClick={() => {setOpenModal(false); window.location.reload()}} className='pink-button !rounded self-center mt-5'> OK</button>
                    <button onClick={() => openProfileModal} className='pink-button !rounded self-center mt-5'>Profile</button>
                </div>
            </div>
        </Modal>
     );
}
 
export default LoginSuccessModal;