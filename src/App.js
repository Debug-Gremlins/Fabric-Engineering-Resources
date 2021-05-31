import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/includes/NavigationBar";
import HomePage from "./pages/HomePage";
import SyllabusPage from "./pages/SyllabusPage";
import BCE from "./pages/BCEpage";
import Chemistry from "./pages/ChemistryPage";
import Math from "./pages/MathPage";
import Ntf from "./pages/NtfPage";
import Physics from "./pages/PhysicsPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import Notice from "./pages/NoticePage";
import DeveloperPage from "./pages/DeveloperPage";
import Footer from "../src/components/includes/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/accessories" component={AccessoriesPage} />
        <Route exact path="/bce" component={BCE} />
        <Route exact path="/chemistry" component={Chemistry} />
        <Route exact path="/math" component={Math} />
        <Route exact path="/ntf" component={Ntf} />
        <Route exact path="/physics" component={Physics} />
        <Route exact path="/syllabus" component={SyllabusPage} />
        <Route exact path="/notice" component={Notice} />
        <Route exact path="/developer" component={DeveloperPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
