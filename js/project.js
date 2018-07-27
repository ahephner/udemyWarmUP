// var dip = document.querySelector('#answer').innerHTML;

// console.log(dip);

time = document.getElementById('clock');

function show(){
    var num1 = Number(document.querySelector('#num1').value);
    var num2 = Number(document.querySelector('#num2').value);
    var display = document.querySelector('#answer'); 
    var select = document.querySelector('#math')
        if(select.value == 'add'){ 
           display.innerHTML =  num1 + num2;
        
        }else if (select.value == 'subtract') {
            display.innerHTML =  num1 - num2;   
        }else if(select.value == 'times'){
            display.innerHTML =  num1 * num2;
        } else if (select.value == 'divide'){
            display.innerHTML =  num1 / num2;
            
        } else{
            display.innerHTML = 'Not allowed';
        }
        
    }
    //time function
    function checkTime(i){
        return (i<10)? '0' + i : i; 
    }
    function getTime(){
        var today = new Date(), 
        h = checkTime(today.getHours());
        m = checkTime(today.getMinutes());
        s = checkTime(today.getSeconds()); 
        time.innerHTML =  h+':'+m + ':'+ s ;
   //keeps clocking rolling along 
        t= setTimeout(function(){
        getTime();
    }, 500);
        } getTime() 


//anonymous function
var a = function(x, i){
    console.log(x + i);
    
}
a(2,4);

//self invoking functon

(function(){
    console.log('hi');
    
//runs after page loaded
    // var  body = document.querySelector('body');
    // body.style.backgroundColor = '#ff4d4d'
    
}());


















