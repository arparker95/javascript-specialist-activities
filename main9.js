window.onload = function()
{
    var sentence = "sally really loves fruit.";
    
    function capWord(str)
    {
        return str.charAt(0).toUpperCase() + str.slice(1);   
    }
    
    alert(capWord(sentence));
    
}