function compute()
{

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    
    //parse current year from current date
    var year = new Date().getFullYear()+parseInt(years);

    //check to ensure principal amount is positive
        if (principal <= 0)
            { 
            alert("Enter a positive number");
            document.getElementById("principal").focus()
            return false();
            }
    
    //display results 
        document.getElementById("result").innerHTML= "If you deposit <b>" +principal+
          "</b>,\<br\>at an interest rate of <b>"+rate+"% </b> \<br\>You will receive " +
          "an amount of <b>"+interest+"</b>,\<br\>in the year <b>"+year+"</b>\<br\>"

    
}
        
function updateRate()
{
    //display rate value when slider is adjusted. 
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

