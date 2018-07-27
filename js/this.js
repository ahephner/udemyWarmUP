// will show all that this can do 
// (function t(){
//     console.log(this);
    
// }()); 


//this basically saves the var to that function so you can invoke it continually 
//can still overwrite it just have to be implicit
function saveVar(){
    if(this.number === undefined){
    this.number = 0; 
}
    //to overwrite uncomment
    //this.number = 6; 
   this.number ++; 

    console.log(this.number);
    
}
// saveVar(); 
// saveVar(); 


time = document.getElementById('clock');
mes = document.querySelector('.throw');
id = document.getElementById('userName')//.toString().toLowerCase();
pass = document.getElementById('passWord')//.toString().toLowerCase(); 
var me = 'AJ';
var open = 'hey'
var box = []
var snapShot = []; 

function checkTime(i){
    return (i<10)? '0' + i : i; 
}
function getTime(){
    var today = new Date();
     h = checkTime(today.getHours());
     m = checkTime(today.getMinutes());
     s = checkTime(today.getSeconds()); 
    time.innerHTML = h+':'+m + ':'+ s ;
    box.push(h,m,s); 
//keeps clocking rolling along 
    t= setTimeout(function(){
    getTime();
}, 500);
    } getTime()


   
    for(var x = 0; x<=2; x++){
         snapShot.push(box[x]);  
        
    }

  
     



    function read(){
        console.log(id.value, pass.value);
        
    if(id.value === me && pass.value === open){
         mes.innerHTML = '<br/> Hello: ' + me + ' logged in @: ' +  snapShot[0]+ ':' + snapShot[1] + ':' + snapShot[2] ;
        pass.value ='';
        id.value = '';     
    } else if (id.value === me && pass.value != open){
        alert('bad password');
        pass.value ='';
        id.value = ''; 
    } else if (id.value != me && pass.value === open){
        alert('unrecognized username'+ ' '+ id.value);
        pass.value ='';
        id.value = ''; 
    }else{
        console.log('something went wrong');
        
    }
}


///break 
var sentence = 'Today is Thursday July 26th and we are warming up'

for(var i = 0; i<= sentence.length; i++){

    if(i % 3 == 0){
        console.log(sentence[i]) 
    }else if(i === 10) {
        break; 
        
    }
}