import React from 'react';

function Home({ stats }) {
  if (!stats) return <div style={{ padding: '2rem', color: '#94a3b8' }}>Loading stats...</div>;
  return (
    <main style={{ padding: '2rem' }}>
      <h2>System Overview</h2>
      <p>Queue depth: {stats.queue_depth}</p>
      <p>Total executions: {stats.executions?.total}</p>
    </main>
  );
}

export default Home;
