import { useParams } from "react-router-dom";
import { useAppSelector } from "../state/hooks";

interface AddSightingButtonProps {
    
}
 
const AddSightingButton: React.FunctionComponent<AddSightingButtonProps> = () => {
    const logged:boolean = useAppSelector(state => state.loggedUser.logged);
    const {id} = useParams<{id:string}>();
    return ( 
        <>
        { logged && <button className="pink-button !rounded !text-lg self-center" onClick={() =>  window.location.href=`/add/${id}`}> +Add new Sighting</button> }
        </>

     );
}
 
export default AddSightingButton;