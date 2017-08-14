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
    if(   document.getElementById("text1").value == "workshop"
       && document.getElementById("text2").value == "workshop" && 
          document.getElementById("text3").value == "workshop@gmail.com" )
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
