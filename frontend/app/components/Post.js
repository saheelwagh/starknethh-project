// components/Post.js
import React from 'react';

const Post = ({ textContent, creatorId }) => (
  <div className="bg-white p-4 mb-4 rounded-md shadow-md">
    <p className="text-lg font-semibold mb-2">{textContent}</p>
    <p className="text-gray-500">Creator ID: {creatorId}</p>
  </div>
);

export default Post;
