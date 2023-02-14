import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./modal";
import { Imagenes } from "./Services/Imagenes";

function App() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [time, setTime] = useState(0);
  const [savetime, setSavetime] = useState(0);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (time !== 0) {
      if (time !== 0 && time !== -1) {
        setSavetime(time);
      }
      const timeout = setTimeout(() => {
        setTime(time + 1);
        if (guessed.length === Imagenes.length) {
          setTime(-1);
          return () => clearTimeout(timeout);
        }
      }, 1000);
    }
  }, [time]);
  if (time === 0) {
    return (
      <button className="text-[40px]" onClick={() => setTime(1)}>
        Play
      </button>
    );
  }

  return (
    <>
      <h1
        className="pb-[40px] text-[#F70A0A] text-[25px] cursor-pointer"
        onClick={() => location.reload()}
      >
        Memotest Star Wars
      </h1>
      <h3 className="pb-[30px] text-[#F70A0A]">Tiempo Transcurrido: {time}</h3>
      <ul className="App grid lg:grid-cols-5 gap-[25px] grid-cols-2 md:grid-cols-4">
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
        {guessed.length === Imagenes.length ? (
          <div>
            <Modal savetime={savetime} />
          </div>
        ) : (
          ""
        )}
      </ul>
    </>
  );
}

export default App;
