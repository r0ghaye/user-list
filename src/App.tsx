import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import UsersListPage from "./pages/UsersListPage/UsersListPage";

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
