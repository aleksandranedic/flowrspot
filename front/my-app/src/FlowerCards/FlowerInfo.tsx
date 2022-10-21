import { FlowerDetails } from "../model/FlowerInterface";

interface FlowerInfoProps {
    data: FlowerDetails;
}
 
const FlowerInfo: React.FunctionComponent<FlowerInfoProps> = ({data}) => {
    return ( 
        <>
        <div className="flex flex-col sm:flex-row p-10 gap-10 sm:gap-64 lg:gap-80">
                <div className="text-secondary-gray font-Ubuntu !font-bold text-sm flex gap-y-2 flex-col items-start sm:mt-36">
                    {data.flower.features!.length > 0 && (<><p>Features:</p>{data.flower.features!.map((feature) => (<p key={feature}>{feature}</p>))}</>)}
                </div>

                <div className="text-secondary-gray font-Ubuntu !font-normal text-justify">
                    <p> {data.flower.description} </p>
                </div>
            </div>
        </>
     );
}
 
export default FlowerInfo;