import { useEffect, useState, type SetStateAction } from "react";
import BotonComponent from "../botones/BotonComponent";

function TableBox() {
  const [mode, setMode] = useState("Encode"); // "Encode" o "Decode"
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  // Efecto para cambiar el título de la página
  useEffect(() => {
    document.title = mode;
  }, [mode]);

  // Manejar el cambio entre modos al hacer clic en las opciones
  const handleModeChange = (selectedMode: SetStateAction<string>) => {
    setMode(selectedMode);
    setInputText("");
  };

  const handleSubmit = async () => {
    fetch("https://encode-decode-jejo.onrender.com/api/" + mode.toLowerCase(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: inputText,
      }),
    })
      .then((res) => res.json())
      .then((data) => setResult(data.text));
  };

  return (
    <div className="ibox">
      <div className="iboxlista">
        <BotonComponent
          nombre="Encode"
          onClick={() => handleModeChange("Encode")}
          css={mode === "Encode" ? "active" : ""}
        />
        <BotonComponent
          nombre="Decode"
          onClick={() => handleModeChange("Decode")}
          css={mode === "Decode" ? "active" : ""}
        />
      </div>
      <input
        type="text"
        placeholder={`Ingrese el texto a ${mode.toLowerCase()}`}
        className="iinput"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div>
        <BotonComponent nombre={mode} onClick={handleSubmit} css={"iboton"} />
      </div>
      <textarea className="itextbox" readOnly value={result} />
    </div>
  );
}

export default TableBox;
