import { useState } from "react";

const Header = ({ setWords }) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const addWord = () => {
    setWords((words) => [
      ...words,
      {
        word,
        definition,
      },
    ]);
    setWord("");
    setDefinition("");
  };

  return (
    <header className="w-full flex flex-col justify-center items-center h-96">
      <h1 className="text-4xl font-bold font-happyMonkey">Rema, Learn Fast</h1>
      <p className="text-xl">Learn words faster</p>

      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Add a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="w-80 sm:w-96 mt-7 border outline-none border-gray-500 rounded-md p-3"
          required
        />
        <input
          type="text"
          placeholder="Definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          className="w-80 sm:w-96 mt-2 border outline-none border-gray-500 rounded-md p-3"
          required
        />
        <button
          onClick={addWord}
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition text-white p-3 mt-3 rounded-md"
        >
          Add
        </button>
      </form>
    </header>
  );
};

export default Header;
