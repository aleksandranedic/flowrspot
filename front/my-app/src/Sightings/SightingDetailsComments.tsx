import { FormEvent, useEffect, useRef, useState } from "react";
import { addComment, fetchSightingComments, sightingCommentsData } from "../fetch-data/services/sightingService";
import { useFetch } from "../fetch-data/useFetch";
import { SightingComment } from "../model/SightingInterface";
import { useAppSelector } from "../state/hooks";
import SightingComments from "./SightingComments";


interface SightingDetailsCommentsProps {
    id: string,
    flowerName: string,
    increaseCommentNum: () => void
}

const SightingDetailsComments: React.FunctionComponent<SightingDetailsCommentsProps> = ({id, flowerName, increaseCommentNum}) => {
    const [currPage, setCurrPage] = useState<number>(1)
    const [comment, setComment] = useState<string>("");
    const logged:boolean = useAppSelector(state => state.loggedUser.logged)
    const [data, isPending, error] = useFetch<sightingCommentsData>(fetchSightingComments, `sightings/${id}/comments?page=${currPage}`)
    const [comments, setComments] = useState<SightingComment[]>([]);

    const commentRef = useRef<HTMLTextAreaElement>(null);

    const  handleSubmit = async (event:FormEvent) => {
        event.preventDefault();
        if (!comment)
            return;
        const d = await addComment(`sightings/${id}/comments`, {content:comment})
        setComments([...comments, d.data.comment])
        setComment("");
        commentRef!.current!.value = '';
        increaseCommentNum();
    }

    useEffect(() => {
        if (!data) 
            return;
        setComments(data.comments);
        
    }, [data])

    return ( 
        <div className="flex flex-col gap-10 p-20">
            <hr/>
            <div className="flex justify-between sm:pl-20 sm:pr-20">
                <p className="font-Ubuntu text-secondary-title !font-light text-xl"> {comments.length} comments</p>
                { logged &&
                    <button className="text-primary-text shadow-lg p-3 font-Ubuntu !font-medium rounded hover:text-lg"> Add Comment</button>
                }
            </div>
            {!isPending && !error && data && <SightingComments comments={comments} flowerName={flowerName} setCurrPage={setCurrPage} maxPages={data.meta.pagination.total_pages}/>}
            { logged && 
                <form className="flex flex-col items-end gap-3 mt-10" onSubmit={handleSubmit}>
                    <div className="modal-group h-fit w-full">
                            <label className="modal-input-label">Write a comment...</label>
                            <textarea rows={3} ref={commentRef} className="modal-input" name="description" required onChange={e => setComment(e.target.value)}/>
                    </div>
                    <input type="submit" value="Publish comment" className="pink-button !rounded !text-lg"/>
                </form>
            }
        </div>
     );
}
 
export default SightingDetailsComments;