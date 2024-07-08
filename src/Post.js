import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css'; // CSS 파일을 import 합니다.

const Post = () => {
  const { postNumber } = useParams();
  const [title, setTitle] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const titlePath = `/${postNumber}/title.txt`;
    const filePath = `/${postNumber}/file.txt`; // 상대 경로로 설정합니다.

    // Fetch title
    fetch(titlePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        setTitle(data.trim());
      })
      .catch((error) => {
        setError(error.message);
      });

    // Fetch file list
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
    <div className="container">
      <h1>{title}</h1>
      {error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <div>
          {imageFiles.map((file, index) => (
            <div key={index}>
              <img 
                src={`/${postNumber}/${file}`} 
                alt={`Image ${file}`} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
