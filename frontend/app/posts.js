// pages/posts.js
import React from 'react';
import Post from '../components/Post';

const PostsPage = () => {
  const posts = [
    { id: 1, textContent: 'Lorem ipsum dolor sit amet.', creatorId: 123 },
    { id: 2, textContent: 'Consectetur adipiscing elit.', creatorId: 456 },
    { id: 3, textContent: 'Sed do eiusmod tempor incididunt.', creatorId: 789 },
    { id: 4, textContent: 'Ut labore et dolore magna aliqua.', creatorId: 101 },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex flex-col items-center">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
