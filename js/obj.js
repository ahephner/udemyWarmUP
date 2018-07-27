var nfcNorth = {
    team: ['Chicago','Green Bay', 'Minnesota'], 
    mascot: ['Bears', 'Packers', 'Vikings'],  
    record: {bears: {2017: '5-11',2016: '3-13', 2015: '6-10' }, pack:{2017: '7-9', 2016: '10-6 Division Winner', 2015:'10-6'}, vikes:{2017: '13-3 division winner', 2016: '8-8', 2015:'11-5 Division Winner'}},
    pic: ['https://cdn.vox-cdn.com/thumbor/y1wZqsB0UutlARLmb1eaVUNvue4=/0x0:1150x780/1320x0/filters:focal(0x0:1150x780):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/11441109/Chicago_Bears_Logo.png', 
           , 'https://images-na.ssl-images-amazon.com/images/I/71-FWP7vE1L._SX355_.jpg' 
           , 'https://i.ytimg.com/vi/0G_ro2QMKBw/maxresdefault.jpg'],
    link: ['https://www.chicagobears.com/','https://www.packers.com/', 'https://www.vikings.com/'], 
    logo: function(newMas){
        this.team = newMas;
        return this;  
    }
}
console.log(nfcNorth.team);
//call obj in a new obj
//console.log(nfcNorth.record["2016"]);

//pass parameters to logo 
// nfcNorth.logo('test');

var lions = document.getElementById('lions');
var pack = document.getElementById('pack');
var bears = document.getElementById('bears');
var vikes = document.getElementById('vikes');
var display = document.getElementById('team');
var teamDisplay = document.getElementById('teamLogo'); 
var mascot = document.querySelector('.mascot');
var record = document.querySelector('.records');
var link = document.getElementById('link'); 

bears = function(){
    display.innerHTML = nfcNorth.team[0]+' '+ nfcNorth.mascot[0] + `<br/> <h4>Record</h4>`;
    teamDisplay.src = nfcNorth.pic[0];
    teamDisplay.style.visibility = 'visible';
    link.href = nfcNorth.link[0];  
    //changing the name here
   // mascot.innerHTML = nfcNorth.logo('Da Bears'); 

   //clean out record from other team on screen 
    record.innerHTML = ''
     for(var i in nfcNorth.record.bears ){
         record.innerHTML += i + ": " + nfcNorth.record.bears[i] + `<br/>`;
        // descChicago.push(i + ' ' + nfcNorth.record.bears[i] ).split('');
        // console.log(descChicago);
        
    }   
    
}

pack = function(){
    display.innerHTML = nfcNorth.team[1] +' '+ nfcNorth.mascot[1] + `<br/> <h4>Record</h4>`;
    teamDisplay.src = nfcNorth.pic[2];
    teamDisplay.style.visibility = 'visible';  
    link.href = nfcNorth.link[1];
      //clean out record from other team on screen 
      record.innerHTML = '';

    for(var i in nfcNorth.record.pack){
        record.innerHTML += i + ": " + nfcNorth.record.pack[i] + `<br/>`;
    }   
}

vikes = function(){
    display.innerHTML = nfcNorth.team[2] +' '+ nfcNorth.mascot[2] + `<br/> <h4>Record</h4>`;
    teamDisplay.src = nfcNorth.pic[3];
    teamDisplay.style.visibility = 'visible';  
    link.href = nfcNorth.link[2];
      //clean out record from other team on screen 
    record.innerHTML = '';

    for(var i in nfcNorth.record.vikes){
        record.innerHTML += i + ": " + nfcNorth.record.vikes[i] + `<br/>`;
    }   
}
var nfcMich = {
    team: 'Detroit', 
    mascot: 'Lions', 
    record: {2017: '9-7',2016: '9-7', 2015: '7-9' },
    pic: 'https://vignette.wikia.nocookie.net/logopedia/images/6/6c/Detroit_Lions_2017_logo.png/revision/latest?cb=20170202015531',
    link: 'https://www.detroitlions.com/' 
        
}
lions = function(){
    display.innerHTML = nfcMich.team + ' ' + nfcMich.mascot + `<br/> <h4>Record</h4>`;
    teamDisplay.src = nfcMich.pic;
    teamDisplay.style.visibility = 'visible'; 
    link.href = nfcMich.link; 
    
      //clean out record from other team on screen 
      record.innerHTML = ''

    for(var i in nfcMich.record){
        
        record.innerHTML += i + ": " + nfcMich.record[i] + `<br/>`;
        
    }
    
}