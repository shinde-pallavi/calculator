function clearScreen(){
  document.getElementById("result").value ="";

}
function pallavi(value)
{
  let res = document.getElementById("result");
  if(res.value=="undefined"){
    res.value = "";

  }
  res.value +=value;
}
