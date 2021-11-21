import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import type { FunctionComponent } from 'react';

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default App;
