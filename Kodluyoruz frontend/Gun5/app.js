
// var newAge = 299;
// document.getElementById("root").innerHTML=("<h1><span>Yasiniz: " + newAge + "</span></h1>");
var newAge = 29;
var item = document.getElementById('root');
item.innerHTML=`
<h1>
<span>
Yaşınız : ${newAge}
</span>
</h1>
`


//eski
var info = 'yasiniz'+ newAge + ' Notunuz:' + note
//yeni
info = `yasiniz: ${newAge}, notunuz : ${note}`