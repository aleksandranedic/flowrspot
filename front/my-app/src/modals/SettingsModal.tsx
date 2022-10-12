import { ModalProps } from "../model/Props";
import Modal from "react-modal";
import {IoMdSettings} from 'react-icons/io'
import ToggleButton from "../utils/ToggleButton";
import Slidder from "../utils/Slidder";

const SettingsModal: React.FunctionComponent<ModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      closeTimeoutMS={300}
      ariaHideApp={false}
      className="modal"
    >
        <div className="modal-header items-center"> 
            Settings 
            <IoMdSettings fill="#DADADA" className="ml-4 mt-1"/>
        </div>

        <div className="modal-content !pr-16 !pl-16">
            <div className="flex w-full justify-start items-start">
                <p className="font-Ubuntu text-secondary-title mr-20"> Turn on notifications </p>
                <ToggleButton/>
            </div>
            <hr className="pl-20 pr-20 mt-8 mb-8"/>
            <p className="font-Ubuntu text-secondary-title"> Select favorite flower sighting radius for notifications</p>
    
            <Slidder />

            <input type="submit" className="pink-button !w-fit !self-center !rounded mt-10 mb-5 !text-base cursor-pointer" value={" Save settings"} />
        </div>

    </Modal>
  );
};

export default SettingsModal;
