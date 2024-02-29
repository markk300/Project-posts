import React, { useState } from 'react';
import { useGetApiPostsQuery } from '../features/api/apiPosts';
import { Posts } from './Posts';
import useLogComponent from '../hooks/useLogComponent';

export const Home: React.FC = () => {
  const { data: posts, isLoading } = useGetApiPostsQuery();
  const [search, setSearch] = useState('');
  useLogComponent({ componentName: 'Home' });
  if (isLoading) return <div className='loader'></div>;
  return (
    <div>
      <div className='search'>
        <h1 className='searchTitle'>Search for posts</h1>
        <input className='searchInput' type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        <Posts data={posts?.filter((post)=>post.title.toLowerCase().includes(search.toLowerCase()))} />
      </div>
    </div>
  );
};
