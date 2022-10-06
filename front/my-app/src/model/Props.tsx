export interface ModalProps {
    openModal: boolean
    setOpenModal: (open:boolean) => void
    openSuccessModal? : boolean,
    setSuccessModal? : (open:boolean) => void
}