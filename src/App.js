import "./App.css";
import styles from "./styles/Home.module.css";
import heartIcon from "./assets/images/heart.svg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import About from "./features/About/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navigation_container">
            <li className="link">
              <Link to="/">home</Link>
            </li>
            <li className="link">
              <Link to="/about">about</Link>
            </li>
            <li className="link">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
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
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Samuel Benke Calabresi.</h1>

        <p className={styles.description}>
          Personal <code className={styles.code}>frontend portfolio</code>
        </p>

        <div className={styles.socialNetworksContainer}>
          <a
            href="https://www.linkedin.com/in/samuel-benke-calabresi-478a14a2/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
          >
            <LinkedInIcon className={styles.socialIcon} fontSize="large" />
          </a>
          <a
            href="https://github.com/SamuelBenkeCalabresi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
          >
            <GitHubIcon className={styles.socialIcon} fontSize="large" />
          </a>
          <a
            href="https://www.facebook.com/samuel.benke.5"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
          >
            <FacebookIcon className={styles.socialIcon} fontSize="large" />
          </a>
        </div>

        <div className={styles.grid}>
          <a
            href="https://adoring-wilson-a13eb5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Social network Instagram clone web app &rarr;</h3>
            <p>Social network React and Redux app</p>
          </a>

          <a
            href="https://kind-jennings-e85dca.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Ecommerce Amazon clone web app &rarr;</h3>
            <p>Ecommerce Stripes based React app</p>
          </a>

          <a
            href="https://sharp-pasteur-f7ba47.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Quiz web app &rarr;</h3>
            <p>Simple Typescript porject using free Quiz API</p>
          </a>

          <a
            href="https://elegant-cray-743e65.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Tasks web app Todoist clone &rarr;</h3>
            <p>Task React and Redux app</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/samuel-benke-calabresi-478a14a2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with
          <img src={heartIcon} alt="Heart Icon" className={styles.footerIcon} />
          by me
        </a>
      </footer>
    </div>
  );
}

function Users() {
  return <div></div>;
}
