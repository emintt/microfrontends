import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './views/Layout';
import Home from './views/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
