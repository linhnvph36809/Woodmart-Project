import { useEffect, useState } from "react";
import BannerGolobal from "../../components/BannerGlobal/BannerGlobal";
import PostItem from "../../components/Posts/PostItem";
import { getAllPost } from "../../api/posts.api";
const Blog = () => {
  const [posts, setPost] = useState<any>([]);
  document.title = "Blog"

  useEffect(() => {
    (async function () {
      const {data} = await getAllPost();
      setPost(data);
    })();
  }, []);

  

  return (
    <>
      <BannerGolobal title="Blog" />
      <div className="content py-12">
        <div className="grid grid-cols-4 gap-6">
          {posts && posts.map((post: any) => (
            <PostItem key={post.id} data={post} />
          ))}
        </div>
        <div>
          <ul className="flex gap-1 justify-center my-10">
            <li>
              <a
                href="#"
                className="min-w-[34px] h-[34px] text-sm text-white
                            wd-text-font-bold rounded bg-primary flex justify-center items-center"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="min-w-[34px] h-[34px] text-sm 
                            wd-text-font-bold rounded flex justify-center items-center"
              >
                2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Blog;
