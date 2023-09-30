
import './App.css'
import { Route, Routes } from "react-router-dom";
import Links from './Components/Links';
import ContactPage from './Views/ContactPage';
import HomePage from './Views/HomePage';
import NotFound from './Views/NotFound';

const App = () => {

  return (
    <div>
      <Links />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/contacto"
          element={<ContactPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};

export default App;
