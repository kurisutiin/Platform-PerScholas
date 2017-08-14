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
    <input type="button" value="Login"  onclick="javascript:validate()" />
</form>
<script type="text/javascript">
function validate()
{
    if(   document.getElementById("text1").value == "workshop"
       && document.getElementById("text2").value == "workshop" )
    {
        alert( "validation succeeded" );
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