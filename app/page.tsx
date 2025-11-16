'use client';

import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    const response = await fetch('/api/test');
    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">PostgreSQL Connection Test</h1>
      <button 
        onClick={testConnection}
        disabled={loading}
        className="bg-blue-500 text-black px-4 py-2 rounded"
      >
        {loading ? 'Testing...' : 'Test Connection'}
      </button>
      
      {result && (
        <pre className="mt-4 p-4 text-black bg-gray-100 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}