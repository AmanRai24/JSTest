var all = document.getElementsByTagName("li");
var i;
for (i = 0; i < all.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "clr";
  span.appendChild(txt);
  all[i].appendChild(span);
}

function elt() {
    var li = document.createElement("LI");
    var input = document.getElementById("Input").value;
    var task = document.createTextNode(input);
    li.appendChild(task);
    if (input === '') {
      alert("Please Enter the to do task!!!");
    }
     else{
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("Input").value = "";
  
    var span = document.createElement("span");
    var tt = document.createTextNode("\u00D7");
    span.className = "clr";
    span.appendChild(tt);
    li.appendChild(span);
  
    for (i = 0; i < clr.length; i++) {
      clr[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }


var clr = document.getElementsByClassName("clr");
for (i = 0; i < clr.length; i++) {
  clr[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);