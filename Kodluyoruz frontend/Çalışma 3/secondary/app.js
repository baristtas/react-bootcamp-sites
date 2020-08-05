var array = [];
document.getElementById("login").addEventListener("submit", function (event){
    event.preventDefault();
    let rawInput = document.getElementById("input");
    var input = rawInput.value;
    array.push(input);
    console.log(array);
    document.getElementById("input").value="";
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
})