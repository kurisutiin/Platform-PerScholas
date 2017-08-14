<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
/*<input type="text" name="" id="myId"/>
<input type="button" name="" onclick="num(6)" value="button" />
<script type="text/javascript">
	

</script>*/

<form>
    <input type="text" placeholder="Username" id="text1" /><br />
    <input type="password" placeholder="Password" id="text2" /><br />
    <input type="text" placeholder="email" id="text3" /><br/>
    <input type="submit" name="submit" value="Submit" />
</form>
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