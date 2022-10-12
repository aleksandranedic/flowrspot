import React, { useState } from "react";
import ProfileModal from "../modals/ProfileModal";
import SettingsModal from "../modals/SettingsModal";

interface LogedNavOptionProps {
  name: string;
  navbarOpen: (isOpen: boolean) => void;
}

const LogedNavOption: React.FunctionComponent<LogedNavOptionProps> = ({
  name,
  navbarOpen,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);

  const [openSettings, setOpenSettings] = useState<boolean>(false);

  const openProfileModal = () => {
    navbarOpen(false);
    setOpen(false);
    setOpenProfile(true);
    setOpenSettings(false)
  } 

  const openSettingsModal = () => {
    navbarOpen(false)
    setOpen(false);
    setOpenProfile(false);
    setOpenSettings(true);
  } 


  return (
    <div className="flex items-center justify-start gap-2">
      <p className="text-secondary-gray accordion-item cursor-default">
        {" "}
        {name}{" "}
      </p>
      <img
        onClick={() => setOpen(!open)}
        src="../images/profile_placeholder.jpg"
        alt="profile pic"
        className="mb-5 lg:mb-0 rounded-full max-h-10 object-contain cursor-pointer"
      />

      <div
        className={`flex-col gap-2 absolute top-44 left-1 lg:top-12 lg:left-auto w-36 bg-white ${
          open ? "flex" : "hidden"
        }`}
      >
        <p
          className="gray-text cursor-pointer border-b-2 w-full p-2 pr-4 !flex !justify-end"
          onClick={() => openProfileModal()}
        >
          Profile
        </p>
        <p
          className="gray-text cursor-pointer w-full p-2 pr-4 pt-0 !flex !justify-end"
          onClick={() => openSettingsModal()}>
          Settings
        </p>
      </div>

      <ProfileModal openModal={openProfile} setOpenModal={setOpenProfile} />
      <SettingsModal openModal={openSettings} setOpenModal={setOpenSettings} />
    </div>
  );
};

export default LogedNavOption;
