var array = [];
document.getElementById("todo").addEventListener("submit", function (event){
    event.preventDefault();
    let rawInput = document.getElementById("todoinput");
    var input = rawInput.value;
    array.push(input);
    console.log(array);
    document.getElementById("todoinput").value="";
    // var ul = document.getElementById("todoList");
    // var li = document.createElement("li");
    // li.appendChild(document.createTextNode(input));
    // ul.appendChild(li);
})
//focus,submit eventleri
Aligani
157159ali
// bi klasöre gir 
// 
// klasör içini gör cd Sites
// klasör oluştur
// 