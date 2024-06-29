import { useEffect, useState } from "react";
import PostItem from "../../components/Posts/PostItem";
import { getAllPost } from "../../api/posts.api";

const Posts = () => {
    const [posts,setPost] = useState([]);  

    useEffect(() => {
        (async function(){
            const {data} = await getAllPost();
            const newData = data.reverse().slice(0,4)
            setPost(newData) 
        })()
    },[])

    
    return (
        <>
        <div className="grid grid-cols-4 gap-6">
            {
            posts.map((post:any) =>
            <PostItem key={post.id} data={post}/>
            )}
        </div>
        </>
    )
}

export default Posts ; 