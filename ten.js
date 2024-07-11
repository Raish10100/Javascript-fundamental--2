/*As a web developer,Your task  is to build a function that examines a sentence and counts how many 
times each unique word appears in it. Using a Map,the function efficiently keeps track of the occurrence of 
each word in the sentences.*/

function countWordOccurrences(sentence) {
    const words = sentence.toLowerCase().split(/\s+/);
    const wordCountMap = new Map();
    
    for (const word of words) {
      if (wordCountMap.has(word)) {
        wordCountMap.set(word, wordCountMap.get(word) + 1);
      } else {
        wordCountMap.set(word, 1);
      }
    }
    
    
    return wordCountMap;
  }
  
  
  const sentence = "The quick brown fox jumps over the lazy dog and the brown fox is quick.";
  const wordOccurrences = countWordOccurrences(sentence);
  
  wordOccurrences.forEach((count, word) => {
    console.log(`Word "${word}" appears ${count} times.`);
  });
  