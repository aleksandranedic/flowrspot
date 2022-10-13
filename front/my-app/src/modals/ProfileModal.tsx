import React from "react";
import Modal from "react-modal";
import { ModalProps } from "../model/Props";
import { logout } from "../state/logedUserSlice";
import { useAppSelector, useAppDispatch } from "../state/hooks";

const ProfileModal: React.FunctionComponent<ModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  const logedUser = useAppSelector((state) => state.logedUser.logedUser);
  const sightingsNum:number = useAppSelector((state) => state.logedUser.sightings.length);
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      closeTimeoutMS={300}
      ariaHideApp={false}
      className="modal"
    >
      <div className="modal-content !flex flex-col !gap-6 !p-12">
        <div className="flex gap-3 justify-start items-center w-full">
          <img
            src="../images/profile_placeholder.jpg"
            alt="profile pic"
            className="mb-5 lg:mb-0 rounded-full max-h-16 object-contain cursor-pointer"
          />
          <div className="flex flex-col">
            <p className="font-Ubuntu text-secondary-title !font-light text-xl ">
              {" "}
              {logedUser!.fullName}{" "}
            </p>
            <p className="modal-input-label !text-sm">
              {" "}
              {sightingsNum} sightings
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="modal-input-label !text-sm"> First name </p>
          <p className="font-Ubuntu text-secondary-title text-base">
            {" "}
            {logedUser!.firstName}{" "}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="modal-input-label !text-sm"> Last name </p>
          <p className="font-Ubuntu text-secondary-title text-base">
            {" "}
            {logedUser!.lastName}{" "}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="modal-input-label !text-sm"> Date of birth </p>
          <p className="font-Ubuntu text-secondary-title text-base">
            {" "}
            {logedUser!.dateOfBirth}{" "}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="modal-input-label !text-sm"> Email </p>
          <p className="font-Ubuntu text-secondary-title text-base">
            {" "}
            {logedUser!.email}{" "}
          </p>
        </div>

        <button
          onClick={logOut}
          className="pink-button !rounded mt-5 w-1/3 self-center"
        >
          {" "}
          Logout
        </button>
      </div>
    </Modal>
  );
};

export default ProfileModal;
