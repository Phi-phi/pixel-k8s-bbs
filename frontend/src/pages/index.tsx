import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get<Post[]>('/api/proxy').then((res) => setPosts(res.data));
  }, []);

  const submitPost = () => {
    axios.post('/api/proxy', { content }).then(() => {
      setContent('');
      axios.get<Post[]>('/api/proxy').then((res) => setPosts(res.data));
    });
  };

  return (
    <div>
      <h1>掲示板</h1>
      <input value={content} onChange={(e: ChangeEvent<HTMLInputElement>) => setContent(e.target.value)} />
      <button onClick={submitPost}>投稿</button>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}