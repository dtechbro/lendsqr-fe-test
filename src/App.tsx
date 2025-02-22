import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";
import Login from "./pages/Login";
import "./styles/app.scss";
import NotFoundPage from "./pages/NotFound";
import EmptyPage from "./pages/EmptyPage";
import UserDetails from "./pages/UserDetails";
import UsersInfo from "./pages/UsersInfo";
// import users from "./data/users.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UsersInfo />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/empty" element={<EmptyPage />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
