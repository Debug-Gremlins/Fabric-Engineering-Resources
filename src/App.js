import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import NavigationBar from "./components/includes/NavigationBar";
import SyllabusPage from "./SyllabusPage";
import DeveloperPage from "./DeveloperPage";
import BCE from "./BCEpage";
import Chemistry from "./ChemistryPage";
import Math from "./MathPage";
import Ntf from "./NtfPage";
import Physics from "./PhysicsPage";
import AccessoriesPage from "./AccessoriesPage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/syllabus" component={SyllabusPage} />
        <Route exact path="/accessories" component={AccessoriesPage} />
        <Route exact path="/developer" component={DeveloperPage} />
        <Route exact path="/bce" component={BCE} />
        <Route exact path="/chemistry" component={Chemistry} />
        <Route exact path="/math" component={Math} />
        <Route exact path="/ntf" component={Ntf} />
        <Route exact path="/physics" component={Physics} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
