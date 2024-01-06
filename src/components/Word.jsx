import React, { useState } from "react";

const Word = ({ word }) => {
  const [showDefinition, setShowDefinition] = useState(false);

  // This function will be called when the user clicks on the word.
  const toggleDefinition = () => {
    setShowDefinition((prev) => !prev);
  };

  return (
    <div
      onClick={toggleDefinition}
      className="border border-gray-400 inline-block p-2 rounded-md"
    >
      {showDefinition ? <div>{word.definition}</div> : <div>{word.word}</div>}
    </div>
  );
};

export default Word;
