interface Post {
  id: number;
  title: string;
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
             <h1>{item.title}</h1>
           </div>
           <div>
             <p>User:{item.id}</p>
           </div>
         </div>
       ))}
     </div>
  );
 };
 