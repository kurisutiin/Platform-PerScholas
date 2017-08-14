<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	
</script>*/

<script type="text/javascript">
function validate()
{
    if(   document.getElementById("userid").value == "workshop"
       && document.getElementById("passid").value == "workshop")
    {
        alert('Form submitted successfully');
        location.href="run.html";
    }
    else
    {
        alert( "validation failed" );
        location.href="fail.html";
    }
}
</script>


</body>
</html>
