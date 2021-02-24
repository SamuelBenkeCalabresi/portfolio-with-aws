import './App.css';
import styles from './styles/Home.module.css'
import heartIcon from './assets/images/heart.svg';

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
          <li>Ice cream becetto</li>
          <ul></ul>
        </ul>
      </div>
    </div>
  ); 
}

function Users() {
  return (
    <div className={styles.container}>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Samuel Benke Calabresi.
      </h1>

      <p className={styles.description}>
        Personal {' '}
        <code className={styles.code}>frontend portfolio</code>
      </p>

      <div className={styles.grid}>
        <a 
         href="https://adoring-wilson-a13eb5.netlify.app/"
         target="_blank"
         rel="noopener noreferrer"
         className={styles.card}>
          <h3>Social network Instagram clone web app &rarr;</h3>
          <p>Social network React and Redux app</p>
        </a>

        <a 
         href="https://kind-jennings-e85dca.netlify.app/"
         target="_blank"
         rel="noopener noreferrer"
         className={styles.card}>
          <h3>Ecommerce Amazon clone web app &rarr;</h3>
          <p>Ecommerce Stripes based React app</p>
        </a>

        <a
          href="https://sharp-pasteur-f7ba47.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>Quiz App &rarr;</h3>
          <p>Simple Typescript porject using free Quiz API</p>
        </a>

        <a
          href="https://elegant-cray-743e65.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>Task app Todoist clone &rarr;</h3>
          <p>
            Task React and Redux app
          </p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <Link to="/#">
        Made with
        <img src={heartIcon} alt="Heart Icon" className={styles.footerIcon} />
        by me      
      </Link>
    </footer>
  </div>
  );
}