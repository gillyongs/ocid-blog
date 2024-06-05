// src/Post.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postNumber } = useParams();
  const [imageFiles, setImageFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const filePath = `./${postNumber}/a.txt`; // 상대 경로로 설정합니다.

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        const files = data.split('\n').map(file => file.trim()).filter(file => file);
        setImageFiles(files);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [postNumber]);

  return (
    <div>
      <h1>Po2st Number: {postNumber}</h1>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          {imageFiles.map((file, index) => (
            <div key={index}>
              <img src={`./${postNumber}/${file}`} alt={`Image ${file}`} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
