window.onload = function()
{
    var arr = [1, 3, 4, 2, 1, 1, 5, 1, 6, 1, 7, 1]
    var mostFrequent = 1;
    var notFrequent = 0;
    var item;
    
    for (var i = 0; i < arr.length; i++)
        {
            for (var j = i; j < arr.length; j++)
                {
                    if (arr[i] == arr[j])
                        notFrequent++;
                    if (mostFrequent < notFrequent)
                        {
                            mostFrequent = notFrequent;
                            item = arr[i];
                        }
                }
            notFrequent = 0;
        }
    alert(item + " appears " + mostFrequent + " times");
}