import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllPost, getPostDetail, getTopics } from "../../api/posts.api";
import Loadding from "../../components/Loadding/Loadding";

const BlogDetail = () => {
  const { slug } = useParams();
  const [postDetail, setPostDetail] = useState<any>();
  const [topics, setTopics] = useState<any>();
  const [posts, setPost] = useState<any>([]);
  const [loadding, setLoadding] = useState<boolean>(false);


  useEffect(() => {
    (async function () {
        setLoadding(true)
      Promise.all([getPostDetail(slug || ""), getTopics(), getAllPost()]).then(
        (values) => {
          const [postDetail, topics, {data}] = values;          
          setPost(data);
          setPostDetail(postDetail);
          setTopics(topics);
          setLoadding(false)
        }
      );
    })();
  }, []);

  

  return (
    <>
      <div className="content">
        <div className="flex justify-between gap-8 py-8">
          <div className="w-9/12">
            <div className="text-center">
              <h1 className="title-font text-[32px] title-color">
                {postDetail?.title}
              </h1>
              <p className="text-font text-[15px] text-[#bdbcbb] py-5">
                Posted by Mr. Mackay
              </p>
            </div>
            <div>
              <img
                src={postDetail?.theme}
                alt="Image lỗi"
                className="w-full rounded-xl"
              />
            </div>
            <p className="text-font nav-color text-[15px] text-justify py-5">
              {postDetail?.content}
            </p>
          </div>
          <div className="w-3/12">
            <div className="pb-5 mb-5 border-b">
              <h4 className="title-font text-lg pb-3">Topics</h4>
              <ul>
                {topics?.map((topic: any) => (
                  <li className="pb-2" key={topic.id}>
                    <a href="" className="text-font nav-color">
                      {topic.topic_name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pb-5 mb-5 border-b">
              <h4 className="title-font text-lg pb-5">Recent Posts</h4>
              <div>
                {posts.map((post: any) => 
                <Link to={`/blog-detail/${post.slug}`} key={post.id}>
                <div className="flex items-start gap-3 hover:cursor-pointer mb-5">
                  <img
                    src={post?.theme}
                    alt="Image Error"
                    className="w-[70px] h-[60px] object-cover rounded-lg"
                  />
                  <div>
                    <h5 className="title-font text-[15px]">
                      {post?.title}
                    </h5>
                    <p className="text-sm text-font nav-color">
                      {post?.created_at}
                    </p>
                  </div>
                </div>
                </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loadding isActive={loadding}/>

    </>
  );
};

export default BlogDetail;
