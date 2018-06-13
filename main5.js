window.onload = function()
{
    document.getElementById('hoursButton').addEventListener('click', runCheckHours);
}

function runCheckHours()
{
    var hoursSlept = document.getElementById('hoursInput').value;
    checkHours(hoursSlept); 


    function checkHours(numHours)
    {
        if (hoursSlept >= 8)
            {
                return alert("You're getting plenty of sleep!");
            }   else
                {
                    return alert("Get some more sleep!");
                }
    }
}