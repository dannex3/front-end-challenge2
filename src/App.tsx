import { Home } from "./pages/home";
import { Head } from "./components/header";
import { Bottom } from "./components/footer";
import { About } from '../src/pages/about';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import './global.css';

function App() {
  return (
    <>
      <Head />
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
      <Bottom />
    </>
  );
};

export default App;