var characters = {
    lukeSkywalker : {
        'name': 'lukeSkywalker',
        'side': 'light',
        'attack': 10,
        'counterAttack':10,
        'hp': 100,
        'specialMove': 'It can\'t be!',
        'src':'Luke.jpg'
    },
    
    maceWindu : {
        'name': 'maceWindu',
        'side':'light',
        'attack': 10,
        'counterAttack':10,
        'hp': 100,
        'specialMove': 'It can\'t be!',
        'src': 'MaceWindu.png'
    },
    
    yoda : {
        'name': 'yoda',
        'side':'light',
        'attack': 10,
        'counterAttack':10,
        'hp': 100,
        'specialMove': 'It can\'t be!',
        'src': 'Yoda.jpg'
    },
    
    hanSolo : {
        'name': 'hanSolo',
        'side':'light',
        'attack': 10,
        'counterAttack':10,
        'hp': 100,
        'specialMove': 'It can\'t be!',
        'src': 'HanSolo.jpg'
    },
    stormtrooper : {
        'name': 'stormtrooper',
        'side':'dark',
        'attack': 10,
        'counterAttack':10,
        'hp': 100,
        'specialMove': 'It can\'t be!',
        'src': 'StormTrooper.png'
    },
    bobaFett : {
        'name': 'bobaFett',
        'side':'dark',
        'attack': 10,
        'counterAttack':10,
        'hp': 100,
        'specialMove': 'It can\'t be!',
        'src': 'BobaFett.png'
    },
    darthVader : {
        'name': 'darthVader',
        'side':'dark',
        'attack': 10,
        'counterAttack':10,
        'hp': 100,
        'specialMove': 'It can\'t be!',
        'src': 'DarthVader.png'
    },
    darthMaul : {
        'name': 'darthMaul',
        'side':'dark',
        'attack': 10,
        'counterAttack':10,
        'hp': 100,
        'specialMove': 'It can\'t be!',
        'src': 'DarthMaul.png'
    }
    }
    
    var light = $('#lightGuys');
    var dark = $('#darkGuys');
    //var arena = $('#arena');
    var champ;
    var imCharacter;
    
    function attack() {
        enemy.hp -= champ.attack;
        champ.hp -= enemy.counterAttack;
        //animate
    }
    
    function clickCharacter() {
    
    }
    
    function genCharacter(obj,arg) {
        var obj2= characters[obj]
        imCharacter = $('<img>');
        imCharacter.attr("src", 'assets/images/'+obj2.src);
        //imCharacter.attr("width", "100px");
        //imCharacter.style.border('10px black');
        imCharacter.attr("alt", obj2.name);
        imCharacter.attr('class','img')
        imCharacter.attr('id', 'btn'+obj2.name);
        if (arg===undefined) {
            $('#'+obj2.side+'Guys').append(imCharacter);
            console.log('this');
        }
        else {
            $('#'+arg).append(imCharacter);
            $('#'+obj2.side+'Guys').empty();
            console.log(obj2.src);
        }
        //return imCharacter;
    }
    function goHome() {
        genCharacter('hanSolo');
        genCharacter('lukeSkywalker');
        genCharacter('maceWindu');
        genCharacter('yoda');
    
        genCharacter('stormtrooper');
        genCharacter('bobaFett');
        genCharacter('darthMaul');
        genCharacter('darthVader');
    }
    
    function defend() {
    
    }
    
    goHome();
    
    $('.img').on('click', function() {
        
        
        //genCharacter(this.alt,'arena');
        // var hello = $(this.id);
        var sideOf = characters[this.alt].side;
        $('#'+sideOf+'Arena').append($('#'+this.id));
        $('#'+this.id).width('300px');
        
        $('#'+sideOf+'Guys').detach();
        // $(this.id).attr('width','200px');
        
    });
    
    
    
    // $('.btn').on('click', function() {
    //     var buttonName = this.name;
    //     var localBtn = this;
    
    
        
    //     goHome();
    // });