import { useState, useEffect } from "react";
import Header from "./components/Header";
import Words from "./components/Words";

const App = () => {
  // This is where we will store the words.
  const [words, setWords] = useState(
    JSON.parse(localStorage.getItem("words")) || [],
  );

  // This is a hook that will run every time the words array changes.
  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  return (
    <div>
      <Header setWords={setWords} />
      <Words words={words} />
    </div>
  );
};

export default App;
