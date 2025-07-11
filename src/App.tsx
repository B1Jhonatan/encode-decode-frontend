import "./App.css";
import PageMain from "./assets/pages/PageMain";

window.addEventListener("load", () => {
  fetch("https://encode-decode-jejo.onrender.com/wake-up")
    .then((res) => console.log(res.text()))
    .catch(() => console.log("Activando backend..."));
});

function App() {
  return (
    <>
      <PageMain />
    </>
  );
}

export default App;
