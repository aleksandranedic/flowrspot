import { FlowerDetailsData } from "./FlowerInterface";

export interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  openSuccessModal?: boolean;
  setSuccessModal?: (open: boolean) => void;
}

export interface  SearchProps {
  data: FlowerDetailsData[],
  setFlowers: (text: string) => void
}