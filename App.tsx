import React from 'react';
import Main from './src/main';
import ErrorBoundary from './src/components/ErrorBoundary';

const App =() => {
  return (
    <ErrorBoundary>
      <Main/>
    </ErrorBoundary>
  );
}

export default App