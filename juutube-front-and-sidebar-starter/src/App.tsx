// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Layout from './views/Layout';
import Home from './views/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import SidebarTest from './views/SidebarTest';

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/sidebar" element={<SidebarTest />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <Router>
      <Home />
      <SidebarTest />
    </Router>
  );
};

export default App;
