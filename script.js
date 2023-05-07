document.getElementById("parent").innerHTML = "Something Else";
document.getElementById("parent").style.backgroundColor = "red";
document.getElementById("parent").style.cssText =
  "background-color: yellow; color: black";
document.getElementsByClassName("parent1")[0].style.cssText =
  "background-color: green; color: white";
document.getElementsByClassName("demo")[2].innerHTML = "Hi I am index 2";
document.getElementsByClassName("demo")[4].style.cssText =
  "background-color: aqua; color: black";
document.getElementsByTagName("h1")[0].innerHTML = "Hi I am h1";
document.querySelector("#head2").innerHTML = "Hey I am changed.";
document.querySelector(".head3").innerHTML = "Hey I am changed.";

//querySelectorAll
const changeall = document.querySelectorAll("h3");
for (i = 0; i < changeall.length; i++) {
  changeall[i].innerHTML = "Bishal Gurung";
}
function myFunction() {
  const myWindow = window.open();
  myWindow.document.write((innerHTML = "<h1>I am Different Page</h1>"));
  myWindow.document.close();
}
