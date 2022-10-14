interface SightingsButtonProps {
    favorite:boolean;
    sightings: number;
}
 
const SightingsButton: React.FunctionComponent<SightingsButtonProps> = ({favorite, sightings}) => {
    return ( 
        <button className={`button ${favorite ? "pink-button" : "gray-button"}`}> 
          {sightings} sightings
        </button>
     );
}
 
export default SightingsButton;