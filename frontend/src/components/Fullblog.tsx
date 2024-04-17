import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";



export const Fullblog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 pt-10 px-10 w-full pt-200 max-w-screen-2xl">
          <div className=" col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="mt-4 text-slate-500">Post on 2nd December</div>
            <div className="pt-2">{blog.content}</div>
          </div>
          <div className=" col-span-4 ">
            Author
            <div className="flex w-full">
              <div className="pr-2">
                <Avatar name={blog.author.name || "Anonymous"} />
              </div>
              <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
              </div>
            </div>
            <div>
              <div className="pt-2 text-slate-500">
                Random catch phrase about the authors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
