import { useAppSelector } from "../state/hooks";

interface AddSightingButtonProps {
    
}
 
const AddSightingButton: React.FunctionComponent<AddSightingButtonProps> = () => {
    const loged:boolean = useAppSelector(state => state.logedUser.loged);
    return ( 
        <>
        { loged && <button className="pink-button !rounded !text-lg self-center"> +Add new Sighting</button> }
        </>

     );
}
 
export default AddSightingButton;