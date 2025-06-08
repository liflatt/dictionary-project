import "./App.css";

function App() {
  return (
    <div className="App mt-5">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
          <main className="mt-4 d-flex justify-content-center">
            Main Placeholder
          </main>
        </header>
        <footer className="mt-5">
          <p>
            This project was coded by Lindsey Flatt and is{" "}
            <a
              href="https://github.com/liflatt/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>{" "}
            and{" "}
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
