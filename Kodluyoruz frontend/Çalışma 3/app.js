function noteCalculator(inputtedNote){
    if(inputtedNote < 50){
        document.getElementById("para").innerHTML=`Notunuz: ${inputtedNote}. Dersten kaldınız.`
    }
    else if(60>=inputtedNote && inputtedNote>= 50){
        document.getElementById("para").innerHTML=`Notunuz: ${inputtedNote}. Dersten geçtiniz. Notunuz kötü.`
    }
    else if(80>=inputtedNote && inputtedNote> 60){
        document.getElementById("para").innerHTML=`Notunuz: ${inputtedNote}. Dersten geçtiniz. Notunuz orta.`
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
    let input = document.getElementById("username");
    event.preventDefault();
    if(!(isNaN(input.value))){
        noteCalculator(input.value);
    }
    else{
        document.getElementById("para").innerHTML="Yanlış bir değer girmiş olabilirsiniz."
    }
})