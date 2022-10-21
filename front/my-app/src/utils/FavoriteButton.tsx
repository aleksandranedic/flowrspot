import { AiFillStar } from "react-icons/ai";
import { Flower, setFavorite } from "../model/FlowerInterface";
import { useAppSelector } from "../state/hooks";

interface FavoriteButtonProps {
    flower: Flower;
}
 
const FavoriteButton: React.FunctionComponent<FavoriteButtonProps> = ({flower}) => {
    const logged = useAppSelector((state) => state.loggedUser.logged);

    return ( 
        <button
        onClick={() => setFavorite(flower.id, flower.favorite, 4)}
        className={`fav_button ${
          flower.favorite ? "pink-button" : "bg-white gray-button"
        } ${logged ? "flex" : "hidden"}`}
      >
        <AiFillStar fill="#D4D8D9" size={18} />
      </button>
     );
}
 
export default FavoriteButton;