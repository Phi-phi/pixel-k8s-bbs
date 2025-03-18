import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('/api/posts').then((res) => setPosts(res.data));
  }, []);

  const submitPost = () => {
    axios.post('/api/posts', { content }).then(() => {
      setContent('');
      axios.get('/api/posts').then((res) => setPosts(res.data));
    });
  };

  return (
    <div>
      <h1>掲示板</h1>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={submitPost}>投稿</button>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}