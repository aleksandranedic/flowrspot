import { AiFillStar } from "react-icons/ai";
import { markFavoriteFlower, unmarkFlowerFavorite } from "../fetch-data/services/flowerService";
import { FlowerDetailsData } from "../model/FlowerInterface";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { addFavoriteFlower, removeFavoriteFlower } from "../state/logedUserSlice";

interface FavoriteButtonProps {
    flower: FlowerDetailsData;
}
 
const FavoriteButton: React.FunctionComponent<FavoriteButtonProps> = ({flower}) => {
    const favFlowers:FlowerDetailsData[] = useAppSelector((state) => state.loggedUser.favoriteFlowers.flowers);
    const logged = useAppSelector((state) => state.loggedUser.logged);
    const dispatch = useAppDispatch();

    const includesFavoriteFlower = (flowerId: number): boolean => {
      for (let i = 0; i < favFlowers.length; i++) {
        if (favFlowers[i].id === flowerId) {
          return true;
        }
      }
      return false;
    }

    const markAsFavorite = (flower: FlowerDetailsData, isFavorite:boolean) => {
      if (isFavorite) {
        let id = favFlowers.find(item => item.id === flower.id)!.favoriteId!;
        unmarkFlowerFavorite(`flowers/${flower.id}/favorites/${id}`)
        dispatch(removeFavoriteFlower(flower.id));
      }
      else {
        markFavoriteFlower(`flowers/${flower.id}/favorites`);
        dispatch(addFavoriteFlower(flower));
      }
    }

    return ( 
        <button
        onClick={() => markAsFavorite(flower, includesFavoriteFlower(flower.id))}
        className={`fav_button ${
          includesFavoriteFlower(flower.id) ? "pink-button" : "bg-white gray-button"
        } ${logged ? "flex" : "hidden"}`}
      >
        <AiFillStar fill="#D4D8D9" size={18} />
      </button>
     );
}
 
export default FavoriteButton;