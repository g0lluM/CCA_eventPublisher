function check()
{
    var $place = document.getElementById("eventPlace").value;
    var $date = document.getElementById("eventDate").value;
    var $dateReg = /%d%d\//;
    
    if ($place == null || $place == "" || $date == null || $date == "")
    {
	alert("You have to specify a date and a place. The abstract is not compulsory.");
	return false;
    }
}
