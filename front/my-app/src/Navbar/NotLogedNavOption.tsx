import React, {useState} from 'react'
import LoginModal from '../modals/LoginModal';
import LoginSuccessModal from '../modals/LoginSuccessModal';
import RegisterModal from '../modals/RegisterModal';
import RegistrationSuccessModal from '../modals/RegistrationSuccessModal';

interface NotLogedNavOptionsProps {
    navbarOpen: (isOpen: boolean) => void;
}
 
const NotLogedNavOptions: React.FunctionComponent<NotLogedNavOptionsProps> = ({navbarOpen}) => {
    
    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
    const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);

    const [openSuccesRegisterModal, setSuccessRegisterModal] = useState<boolean>(false);
    const [openSuccesLoginModal, setSuccessLoginModal] = useState<boolean>(false);

    const handleLoginModal = (): void => {
        navbarOpen(false);
        setOpenLoginModal(true);
        setOpenRegisterModal(false);
        setSuccessRegisterModal(false);
    }

    const handleRegisterModal = (): void => {
        navbarOpen(false);
        setOpenLoginModal(false);
        setOpenRegisterModal(true);
        setSuccessRegisterModal(false);
    }
    
    return ( 
        <>
            <p className='pink-text accordion-item cursor-pointer' onClick={() => handleLoginModal()}>Login</p>
            <div className='accordion-item'>
                <button className='pink-button' onClick={() => handleRegisterModal()}> New account</button>
            </div>

            <LoginModal openModal={openLoginModal} setOpenModal={setOpenLoginModal} setSuccessModal={setSuccessLoginModal}/>
            <RegisterModal openModal={openRegisterModal} setOpenModal={setOpenRegisterModal} setSuccessModal={setSuccessRegisterModal}/>
            <RegistrationSuccessModal openModal={openSuccesRegisterModal} setOpenModal={setSuccessRegisterModal} setSuccessModal={setOpenLoginModal}/>
            <LoginSuccessModal openModal={openSuccesLoginModal} setOpenModal={setSuccessLoginModal} />
        </>
     );
}
 
export default NotLogedNavOptions;