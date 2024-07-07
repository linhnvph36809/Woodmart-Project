import { Link } from "react-router-dom";

const PostItem = ({ data }: { data: any }) => {
  return (
    <>
      <div className="bg-white border-gray-200 rounded-lg posts h-[460px]">
        <Link to={`/blog-detail/${data.slug}`} className="relative">
          <div className="overflow-hidden rounded-t-lg">
            <img
              className="w-full object-cover h-[202px] transtion-all duration-500 ease-in-out image-posts"
              src={data.theme}
              alt="Image Error"
            />
          </div>
          <div className="absolute left-0 right-0 bottom-0 flex justify-between px-5 py-3 bg-black bg-opacity-5">
            <div className="flex items-center gap-2">
              <img
                src={data.user.img}
                alt="Image Error"
                className="rounded-full w-[22px] h-[22px] object-cover"
              />
              <p className="text-sm text-[#f8f6f3] text-font">{data.user.full_name}</p>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-[#f8f6f3]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-[#f8f6f3]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
          </div>
        </Link>
        <div className="p-6">
          <div className="text-[13px] text-[#a5a5a5] text-font flex gap-2 mb-2">
            <p className="#">{data.topic.topic_name}</p>
            <span className="">/</span>
            <p>{data.created_at}</p>
          </div>
          <a href="#" className="nav-color text-lg title-font tracking-tight">
            {data.title}
          </a>
          <p className="text-font text-base text-color-black my-3 hidden-content-post" dangerouslySetInnerHTML={{ __html: data?.content }} >
            
          </p>
          <Link to={`/blog-detail/${data.slug}`} className="color-primary text-[13px] title-font-800">
            Continue reading
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostItem;
