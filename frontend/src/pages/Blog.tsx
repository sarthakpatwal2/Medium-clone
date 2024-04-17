import { Fullblog } from "../components/Fullblog";
import { Spinner } from "../components/Spinner";
import { useblog } from "../hooks";
import { useParams } from "react-router-dom";


export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useblog({ id: id || "" });
  console.log(blog);

  if (loading || !blog) {
    return <div className="flex justify-center items-center h-screen"><Spinner/></div>;
  }
  return (
    <>

      <Fullblog blog={blog} />
    </>
  );
};
