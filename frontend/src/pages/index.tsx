import { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    id: number;
    content: string;
}

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [content, setContent] = useState('');

  const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

  useEffect(() => {
    axios.get<Post[]>(`${BACKEND_URL}/posts`).then((res) => setPosts(res.data));
  }, []);

  const submitPost = () => {
    axios.post(`${BACKEND_URL}/posts`, { content }).then(() => {
      setContent('');
      axios.get<Post[]>(`${BACKEND_URL}/posts`).then((res) => setPosts(res.data));
    });
  };

  return (
    <div>
      <h1>掲示板</h1>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={submitPost}>投稿</button>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}