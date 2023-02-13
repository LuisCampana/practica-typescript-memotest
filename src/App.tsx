import { useEffect, useState } from "react";
import "./App.css";
import { Imagenes } from "./Services/Imagenes";

function App() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);
  useEffect(() => {
    if (guessed.length === Imagenes.length) {
      alert("You win");
      location.reload();
    }
  }, [guessed]);
  return (
    <ul className="App grid md:grid-cols-5 gap-[25px] grid-cols-2">
      {Imagenes.map((img) => {
        const [, url] = img.split("|");
        return (
          <li
            onClick={() =>
              selected.length < 2 &&
              setSelected((selected) => selected.concat(img))
            }
            key={img}
            className="list-none	p-4 border-solid border-[1px] rounded-[10px] border-[#666] cursor-pointer"
          >
            {selected.includes(img) || guessed.includes(img) ? (
              <img src={url} alt="img" width="90px" height="90px" />
            ) : (
              <img src="https://icongr.am/clarity/eye.svg?size=122&color=currentColor" />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
