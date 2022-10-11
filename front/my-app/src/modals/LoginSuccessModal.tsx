import React from "react";
import Modal from "react-modal";
import { infoAboutLogedUser } from "../fetch-data/services/userService";
import { ModalProps } from "../model/Props";
import { User } from "../model/UserInfo";
import { useAppDispatch } from "../state/hooks";
import { login } from "../state/logedUserSlice";

const LoginSuccessModal: React.FunctionComponent<ModalProps> = ({
  openModal,
  setOpenModal,
  setSuccessModal,
}) => {
  const dispatch = useAppDispatch();

  const openProfileModal = () => {
    setOpenModal(false);
    setSuccessModal!(true);
  };

  const tryLogin = () => {
    dispatch(fetchLogedUserThunk).then((r) => {
      setOpenModal(false);
    });
  };

  const fetchLogedUserThunk = async (dispatch: any) => {
    const response = await infoAboutLogedUser("users/me");
    dispatch(
      login(
        new User(
          response.data.user.id,
          response.data.user.first_name,
          response.data.user.last_name
        )
      )
    );
  };

  return (
    <Modal
      isOpen={openModal}
      closeTimeoutMS={300}
      ariaHideApp={false}
      className="modal"
    >
      <div className="modal-header"> Successful login </div>
      <div className="modal-content !flex flex-column !items-center !g-3">
        <p className="text-secondary-title">
          Congratulations! You have successfully logged into FlowrSpot!
        </p>
        <div className="flex justify-content-between gap-4">
          <button
            onClick={tryLogin}
            className="pink-button !rounded self-center mt-5"
          >
            {" "}
            OK
          </button>
          <button
            onClick={() => openProfileModal}
            className="pink-button !rounded self-center mt-5"
          >
            Profile
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginSuccessModal;
