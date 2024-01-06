import React, { useState } from "react";

const Word = ({ word, words, setWords }) => {
  const [showDefinition, setShowDefinition] = useState(false);

  const toggleDefinition = () => {
    setShowDefinition((prev) => !prev);
  };

  const deleteWord = (wordId) => {
    setWords(words.filter((word) => word.id !== wordId));
  };

  return (
    <div
      onClick={toggleDefinition}
      onDoubleClick={() => {
        deleteWord(word.id);
        console.log(word.id);
      }}
      className="border border-gray-400 inline-block p-2 rounded-md"
    >
      {showDefinition ? <p>{word.definition}</p> : <p>{word.word}</p>}
    </div>
  );
};

export default Word;
