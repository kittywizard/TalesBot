module.exports = {
  titlecaseWord: (word) => {
    //convert entire word to lowercase
    const lowercase = word.toLowerCase();
    //take first letter and uppercase it
    const firstLetter = word.charAt(0).toUpperCase();
    //slice word
    const sliced = lowercase.slice(1);
    
    //re-combine
    return firstLetter + sliced;
    
    }
}