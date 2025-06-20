import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App mt-5">
      <div className="container">
        <h1 className="mt-5 mb-5">Dictionary App</h1>
        <main>
          <Dictionary defaultKeyword="daydream" />
        </main>
        <footer>
          <p>
            Coded by Lindsey Flatt,{" "}
            <a
              href="https://github.com/liflatt/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
            , and{" "}
            <a
              href="https://lf-dictionary-project.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
