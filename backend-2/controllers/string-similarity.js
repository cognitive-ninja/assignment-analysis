
// The logic.
// Take a paragraph.
// Convert it into array of words
// Call similarity function of the string similarity library.
// Calculate the score.

const similarity = require('sentence-similarity');
const similarityScore = require('similarity-score');

// const someFunc = function(a,b,options) {
//     let at = levenshtein(a,b);//for example
//     if(a<options.threshold) a = 0;
//     return at;
//   }

const get_similarity = function (){
    
    console.log("string similirity was called");
    const string1 = "Javascript/Nodejs sentence similarity. Although this was designed for sentences, it will work for other sequences as long as the user provides a scoring function for for comparing 2 elements of the sequence.";
    const string2 = "Javascript/Nodejs sentence similarity. Although this was designed for sentences, it will work for other sequences as long as the user provides a scoring function for for comparing 2 elements of the sequence.";
    
    const s1 = string1.split(" ");
    const s2 = string2.split(" ");

    console.log(string1);
    console.log(string2);
    
    const winkOpts = { f: similarityScore.winklerMetaphone, options : {threshold: 0.3} };
    // let opts = { f: someFunc, options : {threshold: 0.1} }
    
    console.log(similarity(s1,s2,winkOpts));
    const res =  similarity(s1,s2,winkOpts);
    return res;
}

module.exports = get_similarity;