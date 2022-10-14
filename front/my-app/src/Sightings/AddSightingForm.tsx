import {useRef} from "react"
import {MdAddAPhoto} from "react-icons/md"
import { useParams } from "react-router-dom";
import { addSighting } from "../fetch-data/services/sightingService";

const AddSightingForm: React.FunctionComponent = () => {
    let fileRef = useRef<HTMLInputElement>(null);
    let formRef = useRef<HTMLFormElement>(null);
    const {id} = useParams<{id:string}>();

    const openFileBrowser = () => {
        fileRef!.current!.click()
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let formData = new FormData(formRef!.current!);
        formData.append("flower_id", id);
        addSighting("sightings", formData)
        .then(r => console.log(r))
        .catch(e => console.log(e));
    }

    return ( 
        <div className="flex flex-col items-center shadow-md bg-white md:ml-8 md:mr-8 mb-20 h-fit gap-1 p-10">
            <p className="font-Ubuntu !font-light text-secondary-gray text-4xl">Add New Sighting</p>
            <p className="font-Ubuntu !font-light text-secondary-gray text-xl">Explore between more than 8427 sightings</p>
            <form className="flex flex-col gap-3 w-full mt-10" onSubmit={handleSubmit} ref={formRef}>
                <div className="flex flex-col sm:flex-row gap-10 w-full justify-around">
                    <div className="modal-group h-14 sm:w-2/5">
                        <label className="modal-input-label">Title of the sighting</label>
                        <input  type="text" className="modal-input" name="name" required/>
                    </div>
                    <div className="modal-group h-14 sm:w-2/5">
                        <label className="modal-input-label">Coordinates of the sighting</label>
                        <div className="flex gap-1">
                            <input  type="text" className="modal-input" name="latitude" placeholder="Enter latitude" required/>
                            <div className="border-r-2 mr-2"></div>
                            <input  type="text" className="modal-input" name="longitude" placeholder="Enter longitude" required/>
                        </div>
                    </div>
                    <button onClick={openFileBrowser} className="flex gap-2 sm:w-1/5 items-center justify-center border-primary-text shadow h-fit p-3 self-center hover:text-lg">
                        <MdAddAPhoto fill="#DF9186" size={20}/>
                        <p className="text-primary-text">Add new photo</p>
                    </button>
                    <input type="file" accept="image/*" name="picture" className="hidden" ref={fileRef}/>
                </div>
                <div className="modal-group h-fit w-full">
                    <label className="modal-input-label">Write a description</label>
                    <textarea rows={3} className="modal-input" name="description" required/>
                </div>
                <div className="flex flex-col items-stretch sm:items-end w-full">
                    <input type="submit" value="Create new sighting" className="pink-button !rounded !text-lg"/>
                </div>
            </form>
        </div>
     );
}
 
export default AddSightingForm;