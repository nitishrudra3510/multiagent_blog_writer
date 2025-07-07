import { useState } from 'react';
import './App.css';

function App() {
  const [topic, setTopic] = useState('');
  const [blog, setBlog] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/api/write', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic }),
    });
    const data = await res.json();
    setBlog(data.blog);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Multi-Agent Blog Writer</h1>
      <input
        type="text"
        placeholder="Enter blog topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Writing...' : 'Generate Blog'}
      </button>
      {blog && <div className="mt-6 whitespace-pre-wrap">{blog}</div>}
    </div>
  );
}

export default App;