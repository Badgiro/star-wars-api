import { Route, Routes, BrowserRouter } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import Header from "@components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {routesConfig.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.component} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
