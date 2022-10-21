interface SightingsButtonProps {
    favorite:boolean;
    sightings: number;
    flowerId: number
}
 
const SightingsButton: React.FunctionComponent<SightingsButtonProps> = ({favorite, sightings, flowerId}) => {
    return ( 
        <button onClick={() => window.location.href = `/flower/${flowerId}`} className={`button ${favorite ? "pink-button" : "gray-button"}` }> 
          {sightings} sightings
        </button>
     );
}
 
export default SightingsButton;