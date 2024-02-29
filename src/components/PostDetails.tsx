import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetApiPostsQuery, useGetCommentsByIdQuery } from '../features/api/apiPosts';

export const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '');
  const { data: posts } = useGetApiPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({ data: data?.find((p) => p.id === postId) }),
  });
  const { data: comments, isLoading } = useGetCommentsByIdQuery(postId);
  if (isLoading) return <div className="loader"></div>;
  return (
    <div className="detailsContainer">
      <div className="postDetails">
        <h1 className="detailsTitle">{posts?.title}</h1>
        <p className="detailsBody">{posts?.body}</p>
      </div>
      <div className="commentsContainer">
        <h1 className='commentsHeader'>Comments</h1>
        {comments?.map((comment) => (
          <div key={comment?.id} className="commentsDetails">

            <h2 className="commentName">{comment?.name}</h2>
            <p className="commentEmail">{comment.email}</p>
            <p className="commentBody">{comment?.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
