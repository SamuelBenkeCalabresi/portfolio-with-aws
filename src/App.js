import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navigation_container">
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <Link to="/about_our_becetti">About our becetti</Link>
            </li>
            <li className="link">
              <Link to="/things_to_do">Things do to and to go to</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about_our_becetti">
            <About />
          </Route>
          <Route path="/things_to_do">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <h1 className="header">I love you babe..</h1>
      <h1 className="header">🥠 ❤️ 🥠</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <div className="background_image">
        <h2 className="header_our_love">we are the cutest inhabitants of our universe, mind this, cause we are the only ones!! do you wanna know more about our becetti? Follow the list below</h2>
        <ul className="becetti_list">
          <li>Smoothie becetto</li>
          <li>Sneaky linguetta</li>
          <li>Washing machine</li>
          <li>Fish becetto</li>
          <li>Vacuum cleaner becetto</li>
          <ul></ul>
        </ul>
      </div>
    </div>
  ); 
}

function Users() {
  return <h2>So many beautiful things to do with you, from glazing into your eyes to travel all over..</h2>;
}

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <h1 className="header">I love you babe..</h1>
//       <h1 className="header">🥠 ❤️ 🥠</h1>
//     </div>
//   );
// }

// export default App;