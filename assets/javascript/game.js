var characters = {
    lukeSkywalker : {
        'name': 'lukeSkywalker',
        'side': 'light',
        'attack': 10,
        'counterAttack':10,
        'hp': 400,
        'specialMove': 'That\'s not true. That\'s impossible!',
        'src':'Luke.jpg'
    },
    
    maceWindu : {
        'name': 'maceWindu',
        'side':'light',
        'attack': 20,
        'counterAttack':10,
        'hp': 450,
        'specialMove': 'The senate will decide your fate.',
        'src': 'MaceWindu.png'
    },
    
    yoda : {
        'name': 'yoda',
        'side':'light',
        'attack': 30,
        'counterAttack':10,
        'hp': 300,
        'specialMove': 'Judge me by my size, do you?',
        'src': 'Yoda.jpg'
    },
    
    hanSolo : {
        'name': 'hanSolo',
        'side':'light',
        'attack': 1,
        'counterAttack':10,
        'hp': 150,
        'specialMove': 'Shoot first',
        'src': 'HanSolo.jpg'
    },
    stormtrooper : {
        'name': 'stormtrooper',
        'side':'dark',
        'attack': 10,
        'counterAttack':10,
        'hp': 100,
        //'specialMove': 'It can\'t be!',
        'src': 'StormTrooper.png'
    },
    bobaFett : {
        'name': 'bobaFett',
        'side':'dark',
        'attack': 20,
        'counterAttack':20,
        'hp': 200,
        //'specialMove': 'It can\'t be!',
        'src': 'BobaFett.png'
    },
    darthVader : {
        'name': 'darthVader',
        'side':'dark',
        'attack': 30,
        'counterAttack':30,
        'hp': 400,
        //'specialMove': 'It can\'t be!',
        'src': 'DarthVader.png'
    },
    darthMaul : {
        'name': 'darthMaul',
        'side':'dark',
        'attack': 40,
        'counterAttack':40,
        'hp': 600,
        //'specialMove': 'It can\'t be!',
        'src': 'DarthMaul.png'
    },
    numFighting:0,
    lightCurr:'',
    darkCurr:''
    };

var light = $('#lightGuys');
var dark = $('#darkGuys');
//var arena = $('#arena');

var attackBtn = $('<button>');
var specialBtn = $('<button>');
var restart = $('<button>');
var specialMeter=$('<div class=\'progress\'></div>');
var myBar = $('<div id=\'myBar\' class="progress-bar"  role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100" ></div>');
var imCharacter;
var enemy;
var champ;
var gauntlet;
var notChosen;
var wins=0;
var newChar;
var sideOf;
function ifLose() {

    if (champ.hp<=0) {
        console.log('champ');
        $('#lightArena').empty();
        $('#lightArena').append('<h1>'+characters.lightCurr+' was defeated!</h1>');
        
        restart.html('restart?');
        restart.attr('class','btn btn-warning');
        restart.attr('id','restartBtn');
        $('#lightArena').append(restart);

    }
          
    if (enemy.hp<=0)  {
    console.log('hi');
    $('#darkHolder').append(gauntlet);
    $('#darkArena').empty();
    $('#darkArena').append('<h1>'+characters.darkCurr+' was defeated!</h1>');
    wins++;
    
    if (wins===4) {
        
        restart.html('restart?');
        restart.attr('class','btn btn-warning');
        restart.attr('id','restartBtn');
        $('#darkArena').append(restart);
        
    }
}
}


function genCharacter(obj) {
    var obj2= characters[obj]
    imCharacter = $('<img>');
    imCharacter.attr("src", 'assets/images/'+obj2.src);
    imCharacter.attr("alt", obj2.name);
    imCharacter.attr('class','img img2');
    imCharacter.attr('id', 'btn'+obj2.name);
   // if (arg===undefined) {
        $('#'+obj2.side+'Guys').append(imCharacter);
        console.log('this');
    //}
    // else {
    //     $('#'+arg).append(imCharacter);
    //     $('#'+obj2.side+'Guys').empty();
    //     console.log(obj2.src);
    // }
}
function goHome() {
    $('#lightGuys').empty();

    genCharacter('lukeSkywalker');
    genCharacter('maceWindu');
    genCharacter('yoda');
    genCharacter('hanSolo');
}
function goHome2() {
    $('#darkGuys').empty();
    genCharacter('stormtrooper');
    genCharacter('bobaFett');
    genCharacter('darthVader');
    genCharacter('darthMaul');

}
function imgClick(t) {
    newChar = characters[t.alt]
    sideOf = newChar.side;
    characters[sideOf+'Curr']=t.alt;
    console.log(characters[sideOf+'Curr']); 
    console.log($('#'+t.id).attr('class'));  
    $('#'+sideOf+'Arena').empty();
    $('#'+sideOf+'Arena').append($('#'+t.id));
    $('#'+t.id).width('300px');
    $('#'+t.id).off('click');
    console.log($('#'+t.id).attr('class'));
    if (sideOf==='dark') {
        gauntlet= $('#darkGuys').detach();
    }
    else {
        $('#lightGuys').empty();
        //notChosen=$('#lightGuys').detach();
    }
    $('#'+sideOf+'Text').empty();     
    characters.numFighting++;
    console.log(characters.numFighting);
    if (characters.numFighting ===2) {
        characters.numFighting=0;
        console.log('made');
        //var attackBtn = $('<button>');
        attackBtn.html('Attack');
        attackBtn.attr('id','attackBtn');
        attackBtn.attr('class','btn btn-secondary');
        $('#turnOptions').append(attackBtn);
        //var specialBtn = $('<button>');
        specialBtn.html('Special');
        specialBtn.attr('id','specialBtn');
        specialBtn.attr('class','btn btn-secondary');
        $('#turnOptions').append(specialBtn);
        // var specialMeter=$('<div class=\'progress\'></div>');
        // var myBar = $('<div id=\'myBar\' class="progress-bar"  role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100" ></div>');
        myBar.attr('widthVal',10);
        console.log(myBar.attr('id'));
        console.log(attackBtn.attr('id'));
        specialMeter.attr('id','specialMeter');
        //specialMeter.attr('class',)
        
        $('#turnOptions').append(specialMeter);
        specialMeter.append(myBar);
    }
}
goHome();
$('#lightText').html('<h1>Choose your Champion!</h1>');
goHome2();
$('#darkText').html('<h1>Choose a Challenger!</h1>');


$('body').on('click', '#attackBtn', function() {
    //console.log(characters.darkCurr);        
    
    var audio = new Audio('assets/audio/'+'Swing02'+'.WAV');
    audio.play();
    enemy = characters[characters.darkCurr];
    champ = characters[characters.lightCurr];
    enemy.hp-=champ.attack;
    champ.hp-=enemy.counterAttack;
    console.log(enemy, champ);    

        
    var width2 = parseInt(myBar.attr('widthVal'));
    console.log(width2); 
            
    if (width2 < 100) {
        width2+=30;
        console.log(width2); 
        if (characters.lightCurr==='hanSolo') {
            width2=100;
        }
        if(width2>100) {
            width2=100;
        }
        myBar.css('width', width2 + '%'); 
        myBar.attr('widthVal', width2);
        //elem.html(width2 * 1  + '%');
    }
    ifLose();

        //animate
    
});
$('body').on('click', '#specialBtn', function() {
    if (myBar.attr('widthVal')==100) {
        console.log('bang');
        myBar.attr('widthVal',0);
        myBar.css('width', '0%');
        $('#lightText').append('<h1>'+characters[characters.lightCurr].specialMove+'</h1>');
        var windowTimeout = setTimeout(function() {
            $('#lightText').empty();
          }, 2000);
        champ.attack +=champ.attack*3;
        if (characters.lightCurr==='hanSolo') {
            champ.attack =enemy.hp;
        }
        var audio = new Audio('assets/audio/'+'Swing02'+'.WAV');
        audio.play();
        // enemy = characters[characters.darkCurr];
        // champ = characters[characters.lightCurr];
        // enemy.hp-=champ.attack;
        // champ.hp-=enemy.counterAttack;
        console.log(enemy, champ); 
        ifLose();
    }
});
$('body').on('click','#restartBtn', function() {
    win=0;
    characters.lukeSkywalker.hp=400;
    characters.lukeSkywalker.attack=10;
    characters.maceWindu.attack=20;
    characters.yoda.attack=30;
    characters.hanSolo.attack=1;
    characters.maceWindu.hp=450;
    characters.yoda.hp=300;
    characters.hanSolo.hp=150;
    characters.stormtrooper.hp=100;
    characters.bobaFett.hp=200;
    characters.darthMaul.hp=400;
    characters.darthVader.hp=600;
    myBar.attr('widthVal',0);
    $('#darkArena').empty();
    $('#lightArena').empty();
    $('#turnOptions').empty();
    //$('#darkHolder').find(':first-child').remove();

    goHome();
    $('#lightText').html('<h1>Choose your Champion!</h1>');
    goHome2();
    $('#darkText').html('<h1>Choose a Challenger!</h1>');
    // $('.img').on('click',function() {
    //     var t=this;
    //     imgClick(t);

    // })
});

$('body').on('click','.img', function() {
    
    //genCharacter(this.alt,'arena');
    // var hello = $(this.id);
    var t = this;
imgClick(t);  
});


var bumpIt = function() {
    $('body').css('margin-bottom', $('.footer').height());
    },
    didResize = false;

bumpIt();

$(window).resize(function() {
didResize = true;
});
setInterval(function() {
if(didResize) {
    didResize = false;
    bumpIt();
}
}, 250);


// $('.btn').on('click', function() {
//     var buttonName = this.name;
//     var localBtn = this;


    
//     goHome();
// });