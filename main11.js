window.onload = function()
{
    var sentence = "I am testing for vowels in my test sentence full of vowels."
    
    alert(sentence.match(/[aeiou]/gi).length);
    
    var capitalLetter = /I/;
    
    console.log(capitalLetter.test("I am testing the capital letter of this sentence."));
}