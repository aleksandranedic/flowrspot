import { useParams } from "react-router-dom";
import { useAppSelector } from "../state/hooks";

interface AddSightingButtonProps {
    
}
 
const AddSightingButton: React.FunctionComponent<AddSightingButtonProps> = () => {
    const loged:boolean = useAppSelector(state => state.logedUser.loged);
    const {id} = useParams<{id:string}>();
    return ( 
        <>
        { loged && <button className="pink-button !rounded !text-lg self-center" onClick={() =>  window.location.href=`/add/${id}`}> +Add new Sighting</button> }
        </>

     );
}
 
export default AddSightingButton;