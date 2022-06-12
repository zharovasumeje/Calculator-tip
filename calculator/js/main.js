function tip()
{
   bill = document.getElementById('bill').value;
    
     if(bill == '')
     {
        alert("Please insert your bill!");
     }
     else if (bill >= 100 && bill <= 299)
    {
        yourtip = Math.round(bill * 0.10 ) ;
        alert("Your tip is " + yourtip + "$ . Thank you!");
    } 
    else if (bill >= 300 && bill <= 499)
    {
        yourtip = Math.round(bill * 0.05 ) ; 
        alert("Your tip is " + yourtip + "$ . Thank you!");
    }
    else if (bill >= 500)
    {
        yourtip = Math.round(bill * 0.03) ;
        alert("Your tip is " + yourtip + "$ . Thank you!");
    }
    else {
        alert("You do not have any tip . Thank you!");
    }
}