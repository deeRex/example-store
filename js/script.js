function starPrint(){
var stars = "";
var starDiv = document.getElementById('star-rating');
var i;
var j = 0;
do{

   stars += '<span class="glyphicon glyphicon-star"></span>';
   j++;
}

while (j <= 10);
 starDiv.innerHTML += stars;
};
starPrint();

// function starPrint(){
//   var x = document.getElementsByClassName('star-rating');
//   var i;
//   var c = 10;
// for (i = 0; i < c; i++) {
//     x[i].innerHTML += "<span class='glyphicon glyphicon-star'></span>";
// }
// }
// starPrint();