import React from "react";
import Modal from "react-modal";
import { ModalProps } from "../model/Props";

const RegistrationSuccessModal: React.FunctionComponent<ModalProps> = ({
  openModal,
  setOpenModal,
  setSuccessModal,
}) => {
  const openLoginModal = () => {
    setOpenModal(false);
    setSuccessModal!(true);
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      closeTimeoutMS={300}
      ariaHideApp={false}
      className="modal"
    >
      <div className="modal-header"> Successful registration </div>
      <div className="modal-content !flex flex-column !items-center !g-3">
        <p className="text-secondary-title">
          Congratulations! You have successfully signed up for FlowrSpot!
        </p>
        <button
          onClick={openLoginModal}
          className="pink-button !rounded w-1/3 self-center mt-5"
        >
          {" "}
          OK
        </button>
      </div>
    </Modal>
  );
};

export default RegistrationSuccessModal;
