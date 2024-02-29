import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body:string
 }
 
 interface PostsProps {
  data?: Post[];
 }
 
 export const Posts = ({ data }: PostsProps) => {
  return (
     <div className="postsContainer">
       {data?.map((item) => (
         <div key={item.id} className="posts">
           <div>
             <Link to={`/post/${item.id}`} className="postTitle">{item.title}</Link>
           </div>
           <div>
             <p className="user">User:{item.id}</p>
           </div>
         </div>
       ))}
     </div>
  );
 };
 