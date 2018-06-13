window.onload = function()
{
    document.getElementById('findNameBtn').addEventListener("click", lookForName);
}

function lookForName()
{
    var myName = "Alexis";
    
    var timesFound = [];
    
    var text = document.getElementById("inputNameBox").value;
    
    for (var i = 0; i < text.length; i++)
        {
            if (text[i] === "A")
                {
                    for (var j = i; j < (myName.length + i); j++)
                        {
                            timesFound.push(text[j]);
                        }
                }
        }
    
    if (timesFound.length === 0)
        {
            alert("Your name wasn't found!");
        } else 
            {
                alert(timesFound);
            }
}
