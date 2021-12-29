
import './App.css';
import { Switch, Route } from "react-router-dom";
import Landingpage from './page/landingpage';


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/todolist">
          {/* <Register /> */}
        </Route>
        <Route exact  path="/">
          <Landingpage />
        </Route>
      </Switch>
    </>
  );
};


export default App;
