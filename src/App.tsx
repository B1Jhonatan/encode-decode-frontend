import "./App.css";
import TableBox from "./assets/components/TableBox";

window.addEventListener("load", () => {
  fetch("https://encode-decode-jejo.onrender.com/wake-up/")
    .then((res) => console.log(res.text()))
    .catch(() => console.log("Activando backend..."));
});

function App() {
  return (
    <>
      <TableBox />
    </>
  );
}

export default App;
