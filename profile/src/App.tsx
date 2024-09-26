import { BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import { UserProvider } from 'mediastore/UserContext';
import { MediaProvider } from 'mediastore/MediaContext';
// import Layout from './views/Layout';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <MediaProvider>
          <Home />
        </MediaProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
