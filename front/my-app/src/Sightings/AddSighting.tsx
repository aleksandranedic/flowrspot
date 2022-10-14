import MapBanner from "../utils/MapBanner";
import AddSightingForm from "./AddSightingForm";

const AddSighting: React.FunctionComponent = () => {
    return ( 
        <div className="w-full h-full bg-secondary-background flex flex-col">
            <MapBanner longitude={-1} latitude={-1} />
            <AddSightingForm />
        </div>
     );
}
 
export default AddSighting;