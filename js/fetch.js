var url = "https://randomuser.me/api/"
var person =[];

//grabHTML
gender = document.getElementById('boyGirl');
fName  = document.getElementById('fName');
lName = document.getElementById('lName');
dob = document.getElementById('dob');
age = document.getElementById('age');
pic = document.getElementById('pic');
button = document.getElementById('next'); 

    function load(){
    fetch(url)
    .then( function(data){
       return data.json();
        
    })
    .then(function(i){   
        //console.log(i);
        person.push(i.results[0].gender);
        dob.innerHTML = (i.results[0].dob.date);
        age.innerHTML = (i.results[0].dob.age);
        fName.innerHTML = (i.results[0].name.first);
        lName.innerHTML = (i.results[0].name.last);
        pic.src = i.results[0].picture.medium
        console.log(i.results[0].picture.medium);
        
    });

    console.log(person);
    }