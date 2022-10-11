import { Flower } from "./FlowerInterface";

export interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  openSuccessModal?: boolean;
  setSuccessModal?: (open: boolean) => void;
}

export interface  SearchProps {
  data: Flower[],
  setFlowers: (text: string) => void
}