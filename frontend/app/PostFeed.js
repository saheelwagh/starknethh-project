// pages/Posts.js
import React from 'react';

const posts = [
  { id: 1, text: 'Post 1 Content', creatorId: 123 },
  { id: 2, text: 'Post 2 Content', creatorId: 456 },
  { id: 3, text: 'Post 3 Content', creatorId: 789 },
  { id: 4, text: 'Post 4 Content', creatorId: 101 },
];

const Posts = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id}>
              <p className="text-lg">{post.text}</p>
              <p className="text-sm text-gray-500">Creator ID: {post.creatorId}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
