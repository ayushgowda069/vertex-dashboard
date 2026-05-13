import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/stats')
      .then(r => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <Header />
      <Home stats={data} />
    </div>
  );
}

export default App;
