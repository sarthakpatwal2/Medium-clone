import { Link } from "react-router-dom";

interface blogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: blogCardProps) => {
  return (<Link to={`blog/${id}`}>
    <div  className=" p-4 border-b-2 border-slate-400 pb-4 max-w-screen-md cursor-pointer">
      <div className="flex">
        
          <Avatar name={authorName} />
        
        <div className="font-bold pl-2 flex justify-center flex-col">{authorName}</div>
        <div className="pl-2  font-slate-200 flex justify-center flex-col">{publishedDate}</div>
      </div>
      <div className="text-xl font-bold pt-2">{title}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
      <div className="text-slate-400 text-sm font-thin pt-4">{`${Math.ceil(content.length / 100)} minutes(s) read`}</div>
    </div>
    </Link>
  );
};

export function Avatar({ name}: { name: string ,
}) {
  return (
    <div className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className="text-xs text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
