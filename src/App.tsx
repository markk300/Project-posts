import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Posts } from './components/Posts';
import { Home } from './components/Home';
import { PostDetails } from './components/PostDetails';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
