import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Skills from './pages/Skills';
import Header from './pages/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Switch>
      <Route path="/header" component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
}

export default App;
