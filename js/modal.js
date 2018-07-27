var modal = document.querySelector('.modal'); 

var btn = document.querySelector('#launch'); 

var span = document.getElementsByClassName('close')[0]; 

var close = document.getElementById('done');

//when the user clicks on the button, open the modal
btn.onclick = function(){
 modal.style.display = 'block';
}

close.onclick = function(){
    modal.style .display = 'none'; 
    
}
span.onclick = function(){
    modal.style.display = 'none';
}

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }