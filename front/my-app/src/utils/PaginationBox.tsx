import React from 'react'

interface Props {
    currPageHandler : (page: number) => void,
    maxPages: number
}


const PaginationBox: React.FC<Props> = (props:Props) => {
    var indents = [];
    for (var i:number = 1; i <= props.maxPages; i++) {
        indents.push(i);
    }

    return ( 
        <div className='mt-5 w-full flex justify-center'>
           {indents.map( (num:number) => (
                <button className='pink-button' onClick={() => props.currPageHandler(num)}> {num}</button>        
           ))}
        </div>
     );
}
 
export default PaginationBox; 