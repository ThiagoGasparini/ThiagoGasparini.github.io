import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';

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
