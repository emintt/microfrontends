import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './views/Layout';
import Home from './views/Home';
import { UserProvider } from 'mediastore/UserContext';
import { MediaProvider } from 'mediastore/MediaContext';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <MediaProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </MediaProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
