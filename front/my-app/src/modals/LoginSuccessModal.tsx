import React from "react";
import Modal from "react-modal";
import { fetchSightingInfo, fetchUserSighting } from "../fetch-data/services/sightingService";
import { infoAboutLogedUser } from "../fetch-data/services/userService";
import { ModalProps } from "../model/Props";
import { Sighting, SightingDetails, SightingInfoData } from "../model/SightingInterface";
import { User } from "../model/UserInfo";
import { useAppDispatch } from "../state/hooks";
import { login, setFavoriteFlowers, setSightings } from "../state/logedUserSlice";

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
    const responseUser = await infoAboutLogedUser("users/me");
    const responseSightings = await fetchUserSighting(`users/${7468}/sightings`)
    const responseFlowers = await fetchUserSighting("flowers/favorites?page=1")
    dispatch(login(new User(responseUser.data.user.id,responseUser.data.user.first_name,responseUser.data.user.last_name)));
    dispatch(setSightings(fetchUserSightingsDetails(responseSightings.data.sightings)));
    dispatch(setFavoriteFlowers(responseFlowers.data.fav_flowers))
  };

  const fetchUserSightingsDetails = (arr:Sighting[]) => {
    let sightings:SightingDetails[] = []
    arr.forEach((element:Sighting) => pushData(sightings, element));
    return sightings;
  }

  const pushData = async(sightings:SightingDetails[],element:Sighting) => {
    let data:SightingDetails = await fetchSightingInfo<SightingInfoData>(`sightings/${element.id}`).then(r => r.data.sighting);
    console.log("***")
    console.log(data)
    console.log(sightings)
    sightings.push(data)
  }

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
