function aquaWords()
{
    var boldWords = document.getElementsByTagName('strong');
    
    for (var i = 0; i < boldWords.length; i++)
        {
            boldWords[i].style.color = 'aqua';
        }
}
    
function returnColor()
{
        var boldWords = document.getElementsByTagName('strong');
        
        for (var i = 0; i < boldWords.length; i++)
            {
                boldWords[i].style.color = 'black';
            }
}
