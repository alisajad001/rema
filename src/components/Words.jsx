import Word from "./Word";

const Words = ({ words }) => {
  return (
    <div className="mx-auto max-w-[1000px] px-4 flex gap-3 flex-wrap">
      {words.map((word) => {
        return <Word word={word} key={word.word} />;
      })}
    </div>
  );
};

export default Words;
