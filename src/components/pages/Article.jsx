import {useParams} from "react-router-dom";

export function Article () {
    const {id} = useParams()
    return (
        <div className="">
            Article {id}
        </div>
    )
}