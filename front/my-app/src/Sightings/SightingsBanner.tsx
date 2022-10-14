import AddSightingButton from "../utils/AddSightingButton";

 
const SightingsBanner: React.FunctionComponent = () => {
    return (    
        <div className="flex justify-center w-full p-10 relative">
            <div className="flex flex-col items-center font-Ubuntu !font-thin text-secondary-gray ">
                <p className="text-4xl"> Sightings list </p>
                <p className="text-lg"> Explore between more that 8427 sightings </p>
            </div>
           
            <div className="hidden sm:flex absolute sm:right-10 sm:bottom-16">
                {/* <AddSightingButton /> */}
            </div>
            
        </div>        
     );
}
 
export default SightingsBanner;