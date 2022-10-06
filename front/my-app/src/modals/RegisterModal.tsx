import React, {useState, useRef} from 'react'
import { AxiosResponse } from 'axios';
import Modal from 'react-modal'
import { registerUser } from '../fetch-data/services/userService';
import {ModalProps} from '../model/Props';
import { RegisterInfo } from '../model/UserInfo';
import {MdOutlineError} from 'react-icons/md'
 
const RegisterModal: React.FunctionComponent<ModalProps> = ({openModal, setOpenModal, setSuccessModal}) => {
    
    const [showErrorRegister, setShowErrorRegister] = useState<boolean>(false)
    const errorMessage = useRef<HTMLParagraphElement>(null);

    const [formData, setFormData] = useState<RegisterInfo>({email: "string", password: "string", first_name: "string", last_name: "string", date_of_birth: "string"})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const registerSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        setShowErrorRegister(false);
        errorMessage.current!.innerHTML = '';
        register();
    }

    const register = async () => {
        await registerUser("users/register", formData)
        .then((res:AxiosResponse) => {
            closeModal();
            setSuccessModal!(true);
        })
        .catch((err:AxiosResponse) => {
            errorMessage.current!.innerHTML = err.data.error
            setShowErrorRegister(true);
        });
    };
    
    const closeModal = () => {
        setShowErrorRegister(false); 
        setOpenModal(false)
    }
    
    return ( 
        <Modal isOpen={openModal} onRequestClose={closeModal} closeTimeoutMS={300} ariaHideApp={false} className="modal">
            <div className='modal-header'> Create an Account </div>
            <form onSubmit={registerSubmitHandler} className='modal-content flex flex-column'>
                <div className="flex justify-between gap-2">
                    <div className='modal-group h-14'>
                        <label className='modal-input-label'>First name</label>
                        <input type="text" className='modal-input' name='first_name' required onChange={handleChange}/>
                    </div>
                    <div className='modal-group h-14'>
                        <label className='modal-input-label'>Last name</label>
                        <input type="text" className='modal-input' name='last_name' required onChange={handleChange}/>
                    </div>
                </div>
                <div className='modal-group h-14'>
                    <label className='modal-input-label'>Date of birth</label>
                    <input type="date" className='modal-input' name='date_of_birth' onChange={handleChange}/>
                </div>
                <div className='modal-group h-14'>
                    <label className='modal-input-label'>Email address</label>
                    <input type="text" className='modal-input' name='email' required onChange={handleChange}/>
                </div>
                <div className='modal-group h-14'>
                    <label className='modal-input-label'>Password</label>
                    <input type="password" className='modal-input' name='password' required onChange={handleChange}/>
                </div>
                <div className={`justify-center items-center gap-2 mt-2 ${showErrorRegister ? 'flex' : 'hidden'}`}>
                    <MdOutlineError fill='#DF9186' size={18} />
                    <p className='modal-error-message' ref={errorMessage}> </p>
                </div>
                <input type="submit" className='pink-button !rounded mt-10 mb-5 !text-base' value={"Create Account"} />
                <p className='beneath-modal'onClick={() => setOpenModal(false)}> I don't want to register </p>
            </form>
        </Modal>
     );
}
 
export default RegisterModal;