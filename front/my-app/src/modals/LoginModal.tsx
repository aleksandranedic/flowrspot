import { AxiosResponse } from 'axios';
import React, {useState, useRef} from 'react'
import Modal from 'react-modal'
import { loginUser } from '../fetch-data/services/userService';
import {ModalProps} from '../model/Props';
import {LoginInfo} from '../model/UserInfo';
import {MdOutlineError} from 'react-icons/md'
import { tokenName } from '../utils/Constants';

 
const LoginModal: React.FunctionComponent<ModalProps> = ({openModal, setOpenModal, setSuccessModal}) => {
    
    const [showError, setShowError] = useState<boolean>(false)

    const errorMessage = useRef<HTMLParagraphElement>(null);
    const [formData, setFormData] = useState<LoginInfo>({email: "", password: ""})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const loginSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        setShowError(false);
        errorMessage.current!.innerHTML = '';
        login();
    }

    const login = async () => {
        await loginUser("users/login", formData)
        .then((res:AxiosResponse) => {
            localStorage.setItem(tokenName, res.data.auth_token)
            closeModal();
            setSuccessModal!(true);
           
        })
        .catch((err:AxiosResponse) => {
            errorMessage.current!.innerHTML = err.data.error
            setShowError(true);
        });
    };

    const closeModal = () => {
        setShowError(false); 
        setOpenModal(false)
    }

    return ( 
        <Modal isOpen={openModal} onRequestClose={closeModal} closeTimeoutMS={300} ariaHideApp={false} className="modal">
            <div className='modal-header'> Welcome back </div>
            <form onSubmit={loginSubmitHandler} className='modal-content flex flex-column'>
                <div className='modal-group h-14'>
                    <label className='modal-input-label'>Email address</label>
                    <input type="text" className='modal-input' name='email' required onChange={handleChange}/>
                </div>
                <div className='modal-group h-14'>
                    <label className='modal-input-label'>Password</label>
                    <input type="password" className='modal-input' name='password' required onChange={handleChange}/>
                </div>
                <div className={`justify-center items-center gap-2 mt-2 ${showError ? 'flex' : 'hidden'}`}>
                    <MdOutlineError fill='#DF9186' size={18} />
                    <p className='modal-error-message' ref={errorMessage}> </p>
                </div>
                <input type="submit" className='pink-button !rounded mt-10 mb-5 !text-base cursor-pointer' value={" Login to your Account"}/>
                <p className='beneath-modal'onClick={() => setOpenModal(false)}> I don't want to Login </p>
            </form>
        </Modal>
     );
}
 
export default LoginModal;