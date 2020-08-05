
// // num.length değer girdi mi diye dener

// function checkNote(not){
//     if(0<not<100){
//         if(30>=not>=10){
//             console.log("notunuz:",not,"tebrikler");
//         }
//     }
// }

// console.log(typeof(not));
// checkNote(not);
// //get parametresi gönderme için güvenli değil.
// //get aramalarda kullan.
function noteCalculator(inputtedNote){
    if(inputtedNote <= 50){
        document.getElementById("para").innerHTML=`Notunuz: ${inputtedNote}. Dersten kaldınız.`
    }
    else if(60>=inputtedNote && inputtedNote> 50){
        document.getElementById("para").innerHTML=`Notunuz: ${inputtedNote}. Dersten geçtiniz. Notunuz orta.`
    }
    else if(80>=inputtedNote && inputtedNote> 60){
        document.getElementById("para").innerHTML=`Notunuz: ${inputtedNote}. Dersten geçtiniz. Notunuz hala orta.`
    }
    else if(90>=inputtedNote && inputtedNote> 80){
        document.getElementById("para").innerHTML=`Notunuz: ${inputtedNote}. Dersten geçtiniz. Notunuz iyi`
    }
    else if(100>inputtedNote && inputtedNote> 90){
        document.getElementById("para").innerHTML=`Notunuz: ${inputtedNote}. Dersten geçtiniz. Notunuz pekiyi.`
    }
    else if(inputtedNote == 100){
        document.getElementById("para").innerHTML=`Notunuz: ${inputtedNote}. Dersten geçtiniz. Mükemmel.`
    }
    
    else{
        document.getElementById("para").innerHTML=`Yanlış bir değer girmiş olabilirsiniz.`
    }
    }

let form= document.getElementById("login")
form.addEventListener("submit", function (event){
    // console.log(event.target);
    let input = document.getElementById("username");
    event.preventDefault();
    // console.log(input.value);
    if(!(isNaN(input.value))){
        noteCalculator(input.value);
    }
    else{
        document.getElementById("para").innerHTML="Yanlış bir değer girmiş olabilirsiniz."
    }
})
// console.log(note);

// while( Boolean(1) ){
//     if (isNaN(note) == 0 && not != ""){
//         break;
//     }
// }
// bugün yapılanlara bak ve anlamlandır sorularla gel.


// console.log(note);
// console.log(typeof(note));

// document.getElementById("para").innerHTML="selam"