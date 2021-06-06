import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/includes/NavigationBar";
import HomePage from "./pages/HomePage";
import SyllabusPage from "./pages/SyllabusPage";
import Level1Term1Page from "../src/components/resources/pages/Level1Term1Page";
import Level1Term2Page from "../src/components/resources/pages/Level1Term2Page";
import BCE1_1 from "../src/components/resources/pages/Level1Term1/BCEpage";
import Chemistry1_1 from "../src/components/resources/pages/Level1Term1/ChemistryPage";
import Math1_1 from "../src/components/resources/pages/Level1Term1/MathPage";
import Ntf1_1 from "../src/components/resources/pages/Level1Term1/NtfPage";
import Physics1_1 from "../src/components/resources/pages/Level1Term1/PhysicsPage";
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
        <Route exact path="/level1-term1" component={Level1Term1Page} />
        <Route exact path="/level1-term2" component={Level1Term2Page} />
        <Route exact path="/bce1-1" component={BCE1_1} />
        <Route exact path="/chemistry1-1" component={Chemistry1_1} />
        <Route exact path="/math1-1" component={Math1_1} />
        <Route exact path="/ntf1-1" component={Ntf1_1} />
        <Route exact path="/physics1-1" component={Physics1_1} />
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
