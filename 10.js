//Revision

function wordCounter(SentencePara) {
    const SentenceToWordsArray = SentencePara.split(' ');
    const map = new Map();
  
    SentenceToWordsArray.forEach(word => {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }); // Corrected closing parenthesis for the forEach loop
  
    return map; // Returning the map instead of logging the value
  }
  
  const sentence = "please please submit  assignment on time, your assignments are important";
  const result = wordCounter(sentence);
  console.log(result);
  