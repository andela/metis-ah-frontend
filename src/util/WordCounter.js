const WordCount = (word) => {
  let count = 0;
  let wordToCount = word.replace(/<[^>]*>/g, ' ');
  wordToCount = wordToCount.replace(/\s+/g, ' ');
  wordToCount = wordToCount.trim();
  if (wordToCount.length === 0) {
    count = 0;
  } else {
    count = wordToCount.split(' ').length;
  }

  return count;
};
export default WordCount;
