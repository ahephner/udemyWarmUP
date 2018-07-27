// value = document.querySelector('.text').value = 'changed'
function add(){
    text1 = document.querySelector('.text').value;  
    text2 = document.querySelector('.text2').value; 
    console.log( Number(text1) + Number(text2));
    document.querySelector('.text').value='';
    document.querySelector('.text2').value='';
}


 function change(){
     
         var a = document.getElementById('word')
         console.log(a);
         if(a.innerHTML ==='Change value here'){
             a.innerHTML = 'Swapped';
         }else{
             a.innerHTML = 'Change value here'; 
         }
      
    }


    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.innerHTML === "Hello") {
            x.innerHTML = "Swapped text!";
        } else {
            x.innerHTML = "Hello";
        }
    }