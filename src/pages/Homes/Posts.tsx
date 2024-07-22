import { useEffect, useState } from "react";
import PostItem from "../../components/Posts/PostItem";
import axios from "axios";

const Posts = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("https://woodmart.click/api/posts");
        if (data?.length) {
          const newData = data.reverse().slice(0, 4);
          setPost(newData);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {posts?.map((post: any) => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
    </>
  );
};

export default Posts;
