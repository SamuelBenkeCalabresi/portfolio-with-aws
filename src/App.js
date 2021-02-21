import './App.css';

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "301cd7a1b64448dba561e273681dd446";
const redirectUri = "http://localhost:3001";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];
// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";
class App extends Component {
  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }
  }
render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="header">I love you babe..</h1>
      <h1 className="header">🥠 ❤️ 🥠</h1>

      <img src={logo} className="App-logo" alt="logo" />
      {!this.state.token && (
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
      {this.state.token && (
        // Spotify Player Will Go Here In the Next Step
      )}
      </header>
    </div>
  );
  }
}

export default App;
