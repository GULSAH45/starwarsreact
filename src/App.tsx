import { useState } from "react";
import "./App.css";
import CharacterCards from "./components/characterCards";
import { Characters, UniqueCharsOfHomeworlds } from "./data/characterDatas";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RadioButtons from "./components/filteredRadio";

function App() {
  const [isShown, setIsShown] = useState<boolean>(false);
  export const [isFiltered, setIsFiltered] = useState<string>("");

  function isShownClickHandler() {
    setIsShown((prev) => !prev);
  }

  return (
    <>
      <Button
        variant={isShown ? "danger" : "success"}
        onClick={isShownClickHandler}
      >
        {isShown ? "Hide Characters" : "Show Characters"}
      </Button>
      {isShown === false
        ? ""
        : UniqueCharsOfHomeworlds.map((homeworld) => (
            <div key={homeworld}>
              {" "}
              <RadioButtons homeworld={homeworld} />
            </div>
          ))}

      {isShown === false
        ? ""
        : Characters.map((character) => (
            <CharacterCards
              id={character.id}
              name={character.name}
              pic={character.pic}
              homeworld={character.homeworld}
            />
          ))}
    </>
  );
}

export default App;
