import { SightingComment } from "../model/SightingInterface";
import PaginationBox from "../utils/PaginationBox";
import SightingUserInfo from "./SightingUserInfo";

interface SightingCommentsProps {
    comments: SightingComment[];
    setCurrPage: (num:number) => void;
    maxPages: number;
    flowerName: string
}
 
const renderComment = (comment:SightingComment, flowerName:string) => {
    return <div key={comment.id}>
        <SightingUserInfo flowerName={flowerName} userFullName={comment.user_full_name} description={comment.content}/>
    </div>
}
const SightingComments: React.FunctionComponent<SightingCommentsProps> = ({comments, setCurrPage, maxPages, flowerName}) => {
    return ( <>
    {comments.map(comment => renderComment(comment, flowerName))}
    <PaginationBox currPageHandler={setCurrPage} maxPages={maxPages}/>
    </> );
}
 
export default SightingComments;