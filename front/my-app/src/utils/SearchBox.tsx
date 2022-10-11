import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchProps } from "../model/Props";
import { useAppSelector } from "../state/hooks";


const SearchBox: React.FC<SearchProps> = ({ data, setFlowers }) => {
  const loged = useAppSelector((state) => state.logedUser.loged);
  const input = useRef<HTMLInputElement>(null);    
  
  function searchFlowers() {
    let text = input!.current!.value 
    setFlowers(text)
  }
  
  return (
    <div className={`searchbox ${loged ? "!bottom-1/2" : ""}`}>
      <div className="bg-white w-2/3 lg:w-1/2 flex">
        <input
          type="text"
          className="w-11/12 pl-2 md:text-lg focus:outline-none"
          placeholder="Looking for something specific?"
          ref={input}
        />
        <button
          className="w-1/12 flex justify-center items-center"
          onClick={searchFlowers}
        >
          <AiOutlineSearch fill="#E4988D" size={22} />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
