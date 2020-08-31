function addBtn() {
  //create Li
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.className = "list-element";
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  //create X delete
  var div = document.createElement("div");
  var txt = document.createTextNode("\u00D7");
  div.className = "list-element-close";
  div.appendChild(txt);
  li.appendChild(div);

  //function to delete
  var close = document.getElementsByClassName("list-element-close");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  var toogle = true;

  list.addEventListener('click', function(ev) {
    toogle = !toogle;
    if (toogle === true) {
      ev.target.style.backgroundColor = 'green';
    }if (toogle === false) {
      ev.target.style.backgroundColor = 'red';
    }
  });
}