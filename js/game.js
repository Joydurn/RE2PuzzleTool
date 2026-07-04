
//create scene
let infoScene=new Phaser.Scene('info');

let homeScene=new Phaser.Scene('home')
let lionScene=new Phaser.Scene('lion');
let unicornScene=new Phaser.Scene('unicorn');
let maidenScene=new Phaser.Scene('maiden');

let lion2Scene=new Phaser.Scene('lion2');
let unicorn2Scene=new Phaser.Scene('unicorn2');
let maiden2Scene=new Phaser.Scene('maiden2');

let gauntletMode=false
homeScene.preload=function(){
    lion=this.load.image('lion','assets/lion.png')
    unicorn=this.load.image('unicorn','assets/unicorn.png')
    maiden=this.load.image('maiden','assets/maiden.png')
    //B scenarios
    lion2=this.load.image('lionB','assets/lion2.png')
    unicorn2=this.load.image('unicornB','assets/unicorn2.png')
    maiden2=this.load.image('maidenB','assets/maiden2.png')
}
homeScene.create=function(){
    let { width, height } = this.sys.game.canvas; //get width and height of game window
    const header=this.add.text(225,5,'CHOOSE MEDALLION',
    { fill: '#90e0ef',fontFamily:'Arial Black', fontSize: 36, stroke:'#00000',strokeThickness: 10})
    .setOrigin(0.5,0)
    //INFO BUTTON
    infoButton = this.add.text(0, 720, 'INFO',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            infoButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            infoButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('info');
        },this)
    
    gauntletButton = this.add.text(0, 300, `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`,{backgroundColor: '#ae1d1d', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 36, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            gauntletButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            gauntletButton.setScale(1);
        })
	    .on('pointerdown', function(){
            gauntletMode = !gauntletMode
            gauntletButton.setText(
            `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`)
        },this)
    
    x_offset=50
    const lionButton = this.add.text(width/3+x_offset, 90, 'Lion A', {backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 32, }).setOrigin(0.5)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            lionButton.setScale(1.05);
            lionSprite.setScale(1.35);
        })
        .on('pointerout',function(pointer){
            lionButton.setScale(1);
            lionSprite.setScale(1.3);
        })
	    .on('pointerdown', function(){
            this.scene.start('lion');
        },this)
    const lionSprite=this.add.sprite(width/3+x_offset,185,'lion').setScale(1.3)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            lionButton.setScale(1.05);
            lionSprite.setScale(1.35);
        })
        .on('pointerout',function(pointer){
            lionButton.setScale(1);
            lionSprite.setScale(1.3);
        })
	    .on('pointerdown', function(){
            this.scene.start('lion');
        },this)




    const unicornButton = this.add.text(width/3+x_offset, 300, 'Unicorn A', {backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 32, }).setOrigin(0.5)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            unicornButton.setScale(1.05);
            unicornSprite.setScale(1.75);
        })
        .on('pointerout',function(pointer){
            unicornButton.setScale(1);
            unicornSprite.setScale(1.7);
        })
	    .on('pointerdown', function(){
            this.scene.start('unicorn');
        },this)
    const unicornSprite=this.add.sprite(width/3+x_offset,395,'unicorn').setScale(1.7)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            unicornButton.setScale(1.05);
            unicornSprite.setScale(1.75);
        })
        .on('pointerout',function(pointer){
            unicornButton.setScale(1);
            unicornSprite.setScale(1.7);
        })
	    .on('pointerdown', function(){
            this.scene.start('unicorn');
        },this)
    

    const maidenButton = this.add.text(width/3+x_offset, 510, 'Maiden A', {backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 32, }).setOrigin(0.5)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            maidenButton.setScale(1.05);
            maidenSprite.setScale(1.35);
        })
        .on('pointerout',function(pointer){
            maidenButton.setScale(1);
            maidenSprite.setScale(1.3);
        })
	    .on('pointerdown', function(){
            this.scene.start('maiden');
        },this)
    const maidenSprite=this.add.sprite(width/3+x_offset,605,'maiden').setScale(1.3)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            maidenButton.setScale(1.05);
            maidenSprite.setScale(1.35);
        })
        .on('pointerout',function(pointer){
            maidenButton.setScale(1);
            maidenSprite.setScale(1.3);
        })
	    .on('pointerdown', function(){
            this.scene.start('maiden');
        },this)
    
    //**********B Scenarios***********
    const lion2Button = this.add.text(width/3*2+x_offset, 90, 'Lion B', {backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 32, }).setOrigin(0.5)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            lion2Button.setScale(1.05);
            lion2Sprite.setScale(1.35);
        })
        .on('pointerout',function(pointer){
            lion2Button.setScale(1);
            lion2Sprite.setScale(1.3);
        })
	    .on('pointerdown', function(){
            this.scene.start('lion');
        },this)
    const lion2Sprite=this.add.sprite(width/3*2+x_offset,185,'lionB').setScale(1.3)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            lion2Button.setScale(1.05);
            lion2Sprite.setScale(1.35);
        })
        .on('pointerout',function(pointer){
            lion2Button.setScale(1);
            lion2Sprite.setScale(1.3);
        })
	    .on('pointerdown', function(){
            this.scene.start('lion2');
        },this)




    const unicorn2Button = this.add.text(width/3*2+x_offset, 300, 'Unicorn B', {backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 32, }).setOrigin(0.5)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            unicorn2Button.setScale(1.05);
            unicorn2Sprite.setScale(1.35);
        })
        .on('pointerout',function(pointer){
            unicorn2Button.setScale(1);
            unicorn2Sprite.setScale(1.3);
        })
	    .on('pointerdown', function(){
            this.scene.start('unicorn');
        },this)
    const unicorn2Sprite=this.add.sprite(width/3*2+x_offset,395,'unicornB').setScale(1.3)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            unicorn2Button.setScale(1.05);
            unicorn2Sprite.setScale(1.35);
        })
        .on('pointerout',function(pointer){
            unicorn2Button.setScale(1);
            unicorn2Sprite.setScale(1.3);
        })
	    .on('pointerdown', function(){
            this.scene.start('unicorn2');
        },this)
    

    const maiden2Button = this.add.text(width/3*2+x_offset, 510, 'Maiden B', {backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 32, }).setOrigin(0.5)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            maiden2Button.setScale(1.05);
            maiden2Sprite.setScale(1.35);
        })
        .on('pointerout',function(pointer){
            maiden2Button.setScale(1);
            maiden2Sprite.setScale(1.3);
        })
	    .on('pointerdown', function(){
            this.scene.start('maiden');
        },this)
    const maiden2Sprite=this.add.sprite(width/3*2+x_offset,605,'maidenB').setScale(1.3)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            maiden2Button.setScale(1.05);
            maiden2Sprite.setScale(1.35);
        })
        .on('pointerout',function(pointer){
            maiden2Button.setScale(1);
            maiden2Sprite.setScale(1.3);
        })
	    .on('pointerdown', function(){
            this.scene.start('maiden2');
        },this)
}   
infoScene.preload=function(){
}
infoScene.create=function(){
    let { width, height } = this.sys.game.canvas; //get width and height of game window
    homeButton = this.add.text(0, 720, 'BACK',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0,1)
    .setPadding(10)
    .setInteractive( { useHandCursor: true })
    .on('pointerover',function(pointer){
        homeButton.setScale(1.05);
    })
    .on('pointerout',function(pointer){
        homeButton.setScale(1);
    })
    .on('pointerdown', function(){
        this.scene.start('home');
    },this)
    text = this.add.text(120, 20, 
        `
        Solve the puzzles as fast as you can, matching the 3 dials to the solution.
        Everytime you load, the starting position is randomised.

        Controls:
        W and S to go up and down the dial
        A and D to switch dials
        Q,E or F to complete puzzle
        R to restart
        P to clear PB
        
        Other notes:
        Tried to account for input delay when going up/down dials: 
        if down/up inputs are less than about 160ms apart, error will be displayed
        when trying to complete the puzzle. This is to try to simualate how the game
        can drop inputs if you spam too fast, definitely not accurate though.
        
        Game/tool is based on Resident Evil 2 Remake's medallion puzzles to help speedrunners 

        Actual puzzles made by CAPCOM Kappa
        
        If got problems or suggestions or whatevers, can contact me at 
        Joydurn Yup#3908 on discord or JoydurnYup on twitch`,
        {fontFamily:'Trebuchet MS', fontSize: 26, color: '#FFFFFF'}).setOrigin(0,0);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

}


//*************************************A SCENARIOS**********************************
//**************************LION SCENE*****************************
//load assets
lionScene.preload=function(){
    //load images
    milo=this.load.image('milo','assets/milo.png')
    //background mask image
    background=this.load.image('background','assets/test.png')
    //lion symbols
    this.load.image('lion1','assets/symbols/lion/dial1Sheet.png')
    this.load.image('lion2','assets/symbols/lion/dial2Sheet.png')
    this.load.image('lion3','assets/symbols/lion/dial3Sheet.png')
    //audio
    this.load.audio('updown', 'assets/sounds/updown.mp3');
    this.load.audio('leftright','assets/sounds/leftright.mp3')
    this.load.audio('cursor','assets/sounds/cursor.mp3')
    this.load.audio('wrong','assets/sounds/wrong.mp3')
    //load camera shake plugin
    this.load.plugin('rexshakepositionplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexshakepositionplugin.min.js', true);
}

//create
lionScene.create=function(){
    let { width, height } = this.sys.game.canvas; //get width and height of game window
    
    //set colours for tints
    var lightTint=0xfaf9f6
    var darkTint=0xA9A9A9
    //for each dial, generate random index value, then add corresponding sprite and standardise the width
    symbHeight=204
    dial1Num=Math.floor(Math.random() * 5 + 1)
    dial1=this.add.sprite((width/20*8),970-dial1Num*symbHeight,`lion1`).setScale(1.7)
    dial2Num=Math.floor(Math.random() * 5 + 1)
    dial2=this.add.sprite((width/2),970-dial2Num*symbHeight,`lion2`).setScale(1.7)
    dial3Num=Math.floor(Math.random() * 5+1)
    dial3=this.add.sprite((width/20)*12,970-dial3Num*symbHeight,`lion3`).setScale(1.7)
    
    //masks rest of dials (anything added before this line will be covered)
    backgroundMask=this.add.sprite(0,0,`background`).setOrigin(0, 0)
    //gauntlet button
    gauntletButton = this.add.text(width-300, 100, `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`,{backgroundColor: '#ae1d1d', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 24, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            gauntletButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            gauntletButton.setScale(1);
        })
	    .on('pointerdown', function(){
            gauntletMode = !gauntletMode
            gauntletButton.setText(
            `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`)
        },this)
    //back to home button
    homeButton = this.add.text(0, 720, 'BACK',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            homeButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            homeButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('home');
        },this)
    //reload button
    reloadButton = this.add.text(width/2, 720, 'RELOAD',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0.5,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            reloadButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            reloadButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('lion');
        },this)
    //reset pb button
    resetButton = this.add.text(width, 720, 'RESET PB',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(1,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            resetButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            resetButton.setScale(1);
        })
	    .on('pointerdown', function(){
            localStorage.removeItem("LionPBTime");
            this.scene.start('lion');
        },this)
    //Add timer clock
    timedEvent = this.time.addEvent({ delay: 6000000, callback: this.onClockEvent, callbackScope: this, repeat: 1 }); 
    timerText=this.add.text(0, 0, `Timer: `,{fontFamily:'Trebuchet MS', fontSize: 32, color: '#FFFFFF'})
    //PB Header + Text 
    PBHeader=this.add.text(0, 40, `PB This Session: `,{fontFamily:'Trebuchet MS', fontSize: 26, color: '#FFFFFF'})
    PBText=this.add.text(0, 70, ``,{fontFamily:'Trebuchet MS', fontSize: 38, color: '#FFFFFF'})
    if(localStorage.getItem('LionPBTime')!=undefined){
        LionPBTime=localStorage.getItem('LionPBTime')
    }else{
        LionPBTime=null
    }
    //success/failure text
    text = this.add.text(width/2, 150, `Lion Leaf Bird`,{fontFamily:'Trebuchet MS', fontSize: 64, color: '#FFFFFF'}).setOrigin(0.5);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    //selected dial
    selectedDial=1
    dial1.tint=lightTint //highlight current dial
    dial2.tint=darkTint //dull the others
    dial3.tint=darkTint
    //keyboard inputs
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    //adding SOUNDS
    cursor=this.sound.add('cursor',{volume: 0.4})
    wrong=this.sound.add('wrong',{volume: 0.4})
    updown=this.sound.add('updown',{volume: 0.4})
    leftright=this.sound.add('leftright',{volume: 0.1});
    //define the states of tweens before adding them so that update can work
    tween1W={isPlaying:function(){
        return false;
    }}
    tween1S={isPlaying:function(){
        return false;
    }}
    tween2W={isPlaying:function(){
        return false;
    }}
    tween2S={isPlaying:function(){
        return false;
    }}
    tween3W={isPlaying:function(){
        return false;
    }}
    tween3S={isPlaying:function(){
        return false;
    }}
    //on W or S press, go up and down each dial
    pressWfunction = function() { 
        eval(`
        if(dial${selectedDial}Num>5){
            dial${selectedDial}Num=0
        }
        lionScene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}W=lionScene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num+1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}W.play()
        `)
    }

    this.keyW.on('down', pressWfunction)
    
    pressSfunction = function() { 
        eval(`
        if(dial${selectedDial}Num<=0){
            dial${selectedDial}Num=6
        }
        lionScene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}W=lionScene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num-1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}W.play()
        `)
    }

    this.keyS.on('down', pressSfunction);

    //tap A and D to change dial
    this.keyA.on('down', function(event) { 
        console.log('lionA')
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==1){
            selectedDial=3
        }else{
            selectedDial-=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
        
    });
    this.keyD.on('down', function(event) { 
        console.log('lionD')
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==3){
            selectedDial=1
        }else{
            selectedDial+=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
    });


    //extra key inputs emulate
    this.keyUp.on('down', function(event) {
        this.keyW.emit('down', event);
    },this);
    this.keyDown.on('down', function(event) {
        this.keyS.emit('down', event);
    },this);
    this.keyLeft.on('down', function(event) {
        this.keyA.emit('down', event);
    },this);
    this.keyRight.on('down', function(event) {
        this.keyD.emit('down', event);
    },this);

    this.input.on('pointerdown', function(pointer) {

        if (
            pointer.manager.hitTest(pointer, [
                this.btnW,
                this.btnA,
                this.btnS,
                this.btnD,
                this.btnF,
                resetButton,
                homeButton,
                reloadButton,
                gauntletButton
            ], this.cameras.main).length > 0
        ) {
            return; // Clicked on a virtual button
        }

        this.keyF.emit('down', pointer);

    }, this);

    //TOUCHSCREEN CONTROLS
    this.btnW = this.add.circle(230, 350, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(230, 350, "W", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnS = this.add.circle(230, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(  230, 530, "S", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnA = this.add.circle(this.scale.width - 300, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 300, 530, "A", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnD = this.add.circle(this.scale.width - 120, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 530, "D", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnF = this.add.circle(this.scale.width - 120, 230, 60, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 230, "F", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    //EMULATE WASD AND F INPUTS
    this.btnW.on('pointerdown', () => this.keyW.emit('down'));
    this.btnA.on('pointerdown', () => this.keyA.emit('down'));
    this.btnS.on('pointerdown', () => this.keyS.emit('down'));
    this.btnD.on('pointerdown', () => this.keyD.emit('down'));
    this.btnF.on('pointerdown', () => this.keyF.emit('down'));

    //Q E , or F or left click to confirm solution
    completedTime=0
    timerStopped=false
    this.keyQ.on('down',function(event){
        this.keyF.emit('down', event);
    },this);
    this.keyE.on('down',function(event){
        this.keyF.emit('down', event);
    },this);
    this.keyF.on('down',function(event){
        //check if any input was dropped (numbers are not whole)
        if(dial1Num % 1 != 0 ||dial2Num % 1 != 0 ||dial3Num % 1 != 0){
            //after error message, reload page
            setTimeout(function(){
                game.scene.start('lion')
            },1500)
            lionScene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            text.setText(`You're inputting too fast! Restarting!`);
            text.setFill('#FF0000');
        //then check for correct solution
        }else if((dial1Num==0 || dial1Num==6)&&(dial2Num==0||dial2Num==6) && (dial3Num==0||dial3Num==6)){
            //after correct message, reload page
            timerStopped=true
            completedTime=timedEvent.getElapsedSeconds().toFixed(3);
            setTimeout(()=>{
                if (gauntletMode) {
                    this.scene.start('unicorn');
                }else{
                    this.scene.start('lion')
                }
            },1500)
            lionScene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            //show text/update pb
            if(LionPBTime!=null){
                //if pb'd
                console.log(LionPBTime)
                console.log(completedTime)
                if(parseFloat(completedTime)<parseFloat(LionPBTime)){
                    text.setText(`New PB by ${(LionPBTime-completedTime).toFixed(2)}s! ${completedTime} seconds!`);
                    text.setFill('#00FF00');
                    LionPBTime=completedTime
                    localStorage.setItem('LionPBTime', LionPBTime);
                //if no pb
                }else{
                    text.setText(`Correct! ${completedTime} seconds!`);
                }
            //set new pb (no previous pb)
            }else{
                LionPBTime=completedTime
                localStorage.setItem('LionLionPBTime', LionPBTime);
                text.setText(`New PB: ${completedTime} seconds!`);
                text.setFill('#00FF00');
            }
        }else{
            //after 'wrong' message, revert to normal
            setTimeout(function(){
                text.setText('Lion Leaf Bird');
                text.setFill('#FFFFFF');
            },700)
            text.setText('Wrong!') 
            text.setFill('#FF0000');
            lionScene.sound.play('wrong', { volume: 0.4});
            shake.shake()
        }
    },this)

    //press R to reload page
    this.keyR.on('down',function(event){
        game.scene.start('lion')
    })
    //press P to clear PB and reload page
    this.keyP.on('down',function(event){
        localStorage.removeItem("LionPBTime");
        game.scene.start('lion')
    })
    var shake = this.plugins.get('rexshakepositionplugin').add(text, {
        mode: 1, // 0|'effect'|1|'behavior'
        duration: 400,
        magnitude: 7,
        magnitudeMode: 1, // 0|'constant'|1|'decay'
    });
}
//update
lionScene.update=function(){ 
    //when any tween (incrementing of dial values) is running, update the dial values
    if(tween1W.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1W.getValue()
        }, 50);
    }
    if(tween1S.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1S.getValue()
        }, 50);
    }
    if(tween2W.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2W.getValue()
        }, 50);
        
    }
    if(tween2S.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2S.getValue()
        }, 50);
        
    }
    if(tween3W.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3W.getValue()
        }, 50);
        
    }
    if(tween3S.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3S.getValue()
        }, 50);
        
    }
    //update dial sprites
    dial1.y=970-dial1Num*symbHeight
    dial2.y=970-dial2Num*symbHeight
    dial3.y=970-dial3Num*symbHeight
    // console.log(`${dial1Num}         ${dial2Num}        ${dial3Num}`)
    //add timer
    if(timerStopped){
        timerText.setText(`Timer: ${completedTime}`)
    }else{
        let elapsedTime = timedEvent.getElapsedSeconds().toFixed(3);
        timerText.setText(`Timer: ${elapsedTime}`)
    }
    if(LionPBTime!=null){
        PBText.setText(`${LionPBTime}s`)
    }
};

//**************************UNICORN SCENE*****************************
//load assets
unicornScene.preload=function(){
    //background mask image
    background=this.load.image('background','assets/test.png')
    //unicorn symbols
    this.load.image('unicorn1','assets/symbols/unicorn/dial1Sheet.png')
    this.load.image('unicorn2','assets/symbols/unicorn/dial2Sheet.png')
    this.load.image('unicorn3','assets/symbols/unicorn/dial3Sheet.png')
    //audio
    this.load.audio('updown', 'assets/sounds/updown.mp3');
    this.load.audio('leftright','assets/sounds/leftright.mp3')
    this.load.audio('cursor','assets/sounds/cursor.mp3')
    this.load.audio('wrong','assets/sounds/wrong.mp3')
    //load camera shake plugin
    this.load.plugin('rexshakepositionplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexshakepositionplugin.min.js', true);
}

//create
unicornScene.create=function(){
    console.log(this.scene.isActive("lion"));
    let { width, height } = this.sys.game.canvas; //get width and height of game window
    //set colours for tints
    var lightTint=0xfaf9f6
    var darkTint=0xA9A9A9
    //for each dial, generate random index value, then add corresponding sprite and standardise the width
    symbHeight=204
    dial1Num=Math.floor(Math.random() * 5 + 1)
    dial1=this.add.sprite((width/20*8),970-dial1Num*symbHeight,`unicorn1`).setScale(1.7)
    dial2Num=Math.floor(Math.random() * 5 + 1)
    dial2=this.add.sprite((width/2),970-dial2Num*symbHeight,`unicorn2`).setScale(1.7)
    dial3Num=Math.floor(Math.random() * 5+1)
    dial3=this.add.sprite((width/20)*12,970-dial3Num*symbHeight,`unicorn3`).setScale(1.7)

    backgroundMask=this.add.sprite(0,0,`background`).setOrigin(0, 0)
    gauntletButton = this.add.text(width-300, 100, `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`,{backgroundColor: '#ae1d1d', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 24, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            gauntletButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            gauntletButton.setScale(1);
        })
	    .on('pointerdown', function(){
            gauntletMode = !gauntletMode
            gauntletButton.setText(
            `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`)
        },this)

    //back to home button
    homeButton = this.add.text(0, 720, 'BACK',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            homeButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            homeButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('home');
        },this)
    //reload button
    reloadButton = this.add.text(width/2, 720, 'RELOAD',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0.5,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            reloadButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            reloadButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('unicorn');
        },this)
    //reset pb button
    resetButton = this.add.text(width, 720, 'RESET PB',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(1,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            resetButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            resetButton.setScale(1);
        })
	    .on('pointerdown', function(){
            localStorage.removeItem("UnicornPBTime");
            this.scene.start('unicorn');
        },this)
    //Add timer clock
    timedEvent = this.time.addEvent({ delay: 6000000, callback: this.onClockEvent, callbackScope: this, repeat: 1 }); 
    timerText=this.add.text(0, 0, `Timer: `,{fontFamily:'Trebuchet MS', fontSize: 32, color: '#FFFFFF'})
    //PB Header + Text 
    PBHeader=this.add.text(0, 40, `PB This Session: `,{fontFamily:'Trebuchet MS', fontSize: 26, color: '#FFFFFF'})
    PBText=this.add.text(0, 70, ``,{fontFamily:'Trebuchet MS', fontSize: 38, color: '#FFFFFF'})
    if(localStorage.getItem('UnicornPBTime')!=undefined){
        UnicornPBTime=localStorage.getItem('UnicornPBTime')
    }else{
        UnicornPBTime=null
    }
    //success/failure text
    text = this.add.text(width/2, 150, `Fish Scorpion Loot`,{fontFamily:'Trebuchet MS', fontSize: 64, color: '#FFFFFF'}).setOrigin(0.5);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    //selected dial
    selectedDial=1
    dial1.tint=lightTint //highlight current dial
    dial2.tint=darkTint //dull the others
    dial3.tint=darkTint
    //keyboard inputs
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    //adding SOUNDS
    cursor=this.sound.add('cursor',{volume: 0.4})
    wrong=this.sound.add('wrong',{volume: 0.4})
    updown=this.sound.add('updown',{volume: 0.4})
    leftright=this.sound.add('leftright',{volume: 0.1});
    //define the states of tweens before adding them so that update can work
    tween1W={isPlaying:function(){
        return false;
    }}
    tween1S={isPlaying:function(){
        return false;
    }}
    tween2W={isPlaying:function(){
        return false;
    }}
    tween2S={isPlaying:function(){
        return false;
    }}
    tween3W={isPlaying:function(){
        return false;
    }}
    tween3S={isPlaying:function(){
        return false;
    }}
    //on W or S press, go up and down each dial
    this.keyW.on('down', function(event) { 
        eval(`
        if(dial${selectedDial}Num>5){
            dial${selectedDial}Num=0
        }
        unicornScene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}W=unicornScene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num+1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}W.play()
        `)
    });
    
    this.keyS.on('down', function(event) { 
        eval(`
        if(dial${selectedDial}Num<=0){
            dial${selectedDial}Num=6
        }
        unicornScene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}S=unicornScene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num-1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}S.play()
        `)
    });
    //tap A and D to change dial
    this.keyA.on('down', function(event) { 
        console.log('unicornA');
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==1){
            selectedDial=3
        }else{
            selectedDial-=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
        
    });
    this.keyD.on('down', function(event) { 
        console.log('unicornD');
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==3){
            selectedDial=1
        }else{
            selectedDial+=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
    });
    this.keyUp.on('down', function(event) {
        this.keyW.emit('down', event);
    },this);
    this.keyDown.on('down', function(event) {
        this.keyS.emit('down', event);
    },this);
    this.keyLeft.on('down', function(event) {
        this.keyA.emit('down', event);
    },this);
    this.keyRight.on('down', function(event) {
        this.keyD.emit('down', event);
    },this);
    this.input.on('pointerdown', function(pointer) {

        if (
            pointer.manager.hitTest(pointer, [
                this.btnW,
                this.btnA,
                this.btnS,
                this.btnD,
                this.btnF,
                resetButton,
                homeButton,
                reloadButton,
                gauntletButton
            ], this.cameras.main).length > 0
        ) {
            return; // Clicked on a virtual button
        }

        this.keyF.emit('down', pointer);

    }, this);

    //TOUCHSCREEN CONTROLS
    this.btnW = this.add.circle(230, 350, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(230, 350, "W", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnS = this.add.circle(230, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(  230, 530, "S", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnA = this.add.circle(this.scale.width - 300, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 300, 530, "A", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnD = this.add.circle(this.scale.width - 120, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 530, "D", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnF = this.add.circle(this.scale.width - 120, 230, 60, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 230, "F", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    //EMULATE WASD AND F INPUTS
    this.btnW.on('pointerdown', () => this.keyW.emit('down'));
    this.btnA.on('pointerdown', () => this.keyA.emit('down'));
    this.btnS.on('pointerdown', () => this.keyS.emit('down'));
    this.btnD.on('pointerdown', () => this.keyD.emit('down'));
    this.btnF.on('pointerdown', () => this.keyF.emit('down'));

    //Q E , or F to confirm solution
    completedTime=0
    timerStopped=false
    this.keyQ.on('down',function(event){
        this.keyF.emit('down', event);
    },this);
    this.keyE.on('down',function(event){
        this.keyF.emit('down', event);
    },this);
    this.keyF.on('down',function(event){
        //check if any input was dropped (numbers are not whole)
        if(dial1Num % 1 != 0 ||dial2Num % 1 != 0 ||dial3Num % 1 != 0){
            //after error message, reload page
            setTimeout(function(){
                game.scene.start('unicorn')
            },1500)
            unicornScene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            text.setText(`You're inputting too fast! Restarting!`);
            text.setFill('#FF0000');
        //then check for correct solution
        }else if((dial1Num==0 || dial1Num==6)&&(dial2Num==0||dial2Num==6) && (dial3Num==0||dial3Num==6)){
            //after correct message, reload page
            timerStopped=true
            completedTime=timedEvent.getElapsedSeconds().toFixed(3);
            setTimeout(()=>{
                if (gauntletMode) {
                    this.scene.start('maiden');
                }else{
                    this.scene.start('unicorn')
                }
            },1500)
            unicornScene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            //show text/update pb
            if(UnicornPBTime!=null){
                //if pb'd
                console.log(UnicornPBTime)
                console.log(completedTime)
                if(parseFloat(completedTime)<parseFloat(UnicornPBTime)){
                    text.setText(`New PB by ${(UnicornPBTime-completedTime).toFixed(2)}s! ${completedTime} seconds!`);
                    text.setFill('#00FF00');
                    UnicornPBTime=completedTime
                    localStorage.setItem('UnicornPBTime', UnicornPBTime);
                //if no pb
                }else{
                    text.setText(`Correct! ${completedTime} seconds!`);
                }
            //set new pb (no previous pb)
            }else{
                UnicornPBTime=completedTime
                localStorage.setItem('UnicornPBTime', UnicornPBTime);
                text.setText(`New PB: ${completedTime} seconds!`);
                text.setFill('#00FF00');
            }
        }else{
            //after 'wrong' message, revert to normal
            setTimeout(function(){
                text.setText('Fish Scorpion Loot');
                text.setFill('#FFFFFF');
            },700)
            text.setText('Wrong!') 
            text.setFill('#FF0000');
            unicornScene.sound.play('wrong', { volume: 0.4});
            shake.shake()
        }
    },this)

    //press R to reload page
    this.keyR.on('down',function(event){
        game.scene.start('unicorn')
    })
    //press P to clear PB and reload page
    this.keyP.on('down',function(event){
        localStorage.removeItem("UnicornPBTime");
        game.scene.start('unicorn')
    })
    var shake = this.plugins.get('rexshakepositionplugin').add(text, {
        mode: 1, // 0|'effect'|1|'behavior'
        duration: 400,
        magnitude: 7,
        magnitudeMode: 1, // 0|'constant'|1|'decay'
    });
    
}
//update
unicornScene.update=function(){ 
    //when any tween (incrementing of dial values) is running, update the dial values
    if(tween1W.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1W.getValue()
        }, 50);
    }
    if(tween1S.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1S.getValue()
        }, 50);
    }
    if(tween2W.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2W.getValue()
        }, 50);
        
    }
    if(tween2S.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2S.getValue()
        }, 50);
        
    }
    if(tween3W.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3W.getValue()
        }, 50);
        
    }
    if(tween3S.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3S.getValue()
        }, 50);
        
    }
    //update dial sprites
    dial1.y=970-dial1Num*symbHeight
    dial2.y=970-dial2Num*symbHeight
    dial3.y=970-dial3Num*symbHeight
    console.log(`${dial1Num}         ${dial2Num}        ${dial3Num}`)
    //add timer
    if(timerStopped){
        timerText.setText(`Timer: ${completedTime}`)
    }else{
        let elapsedTime = timedEvent.getElapsedSeconds().toFixed(3);
        timerText.setText(`Timer: ${elapsedTime}`)
    }
    if(UnicornPBTime!=null){
        PBText.setText(`${UnicornPBTime}s`)
    }
};

//**************************MAIDEN SCENE*****************************
//load assets
maidenScene.preload=function(){
    //background mask image
    background=this.load.image('background','assets/test.png')
    //unicorn symbols
    this.load.image('maiden1','assets/symbols/maiden/dial1Sheet.png')
    this.load.image('maiden2','assets/symbols/maiden/dial2Sheet.png')
    this.load.image('maiden3','assets/symbols/maiden/dial3Sheet.png')
    //audio
    this.load.audio('updown', 'assets/sounds/updown.mp3');
    this.load.audio('leftright','assets/sounds/leftright.mp3')
    this.load.audio('cursor','assets/sounds/cursor.mp3')
    this.load.audio('wrong','assets/sounds/wrong.mp3')
    //load camera shake plugin
    this.load.plugin('rexshakepositionplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexshakepositionplugin.min.js', true);
}

//create
maidenScene.create=function(){
    let { width, height } = this.sys.game.canvas; //get width and height of game window
    //set colours for tints
    var lightTint=0xfaf9f6
    var darkTint=0xA9A9A9
    //for each dial, generate random index value, then add corresponding sprite and standardise the width
    symbHeight=204
    dial1Num=Math.floor(Math.random() * 5 + 1)
    dial1=this.add.sprite((width/20*8),970-dial1Num*symbHeight,`maiden1`).setScale(1.7)
    dial2Num=Math.floor(Math.random() * 5 + 1)
    dial2=this.add.sprite((width/2),970-dial2Num*symbHeight,`maiden2`).setScale(1.7)
    dial3Num=Math.floor(Math.random() * 5+1)
    dial3=this.add.sprite((width/20)*12,970-dial3Num*symbHeight,`maiden3`).setScale(1.7)

    backgroundMask=this.add.sprite(0,0,`background`).setOrigin(0, 0)
    gauntletButton = this.add.text(width-300, 100, `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`,{backgroundColor: '#ae1d1d', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 24, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            gauntletButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            gauntletButton.setScale(1);
        })
	    .on('pointerdown', function(){
            gauntletMode = !gauntletMode
            gauntletButton.setText(
            `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`)
        },this)

    //back to home button
    homeButton = this.add.text(0, 720, 'BACK',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            homeButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            homeButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('home');
        },this)
    //reload button
    reloadButton = this.add.text(width/2, 720, 'RELOAD',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0.5,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            reloadButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            reloadButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('maiden');
        },this)
    //reset pb button
    resetButton = this.add.text(width, 720, 'RESET PB',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(1,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            resetButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            resetButton.setScale(1);
        })
	    .on('pointerdown', function(){
            localStorage.removeItem("MaidenPBTime");
            this.scene.start('maiden');
        },this)
    //Add timer clock
    timedEvent = this.time.addEvent({ delay: 6000000, callback: this.onClockEvent, callbackScope: this, repeat: 1 }); 
    timerText=this.add.text(0, 0, `Timer: `,{fontFamily:'Trebuchet MS', fontSize: 32, color: '#FFFFFF'})
    //PB Header + Text 
    PBHeader=this.add.text(0, 40, `PB This Session: `,{fontFamily:'Trebuchet MS', fontSize: 26, color: '#FFFFFF'})
    PBText=this.add.text(0, 70, ``,{fontFamily:'Trebuchet MS', fontSize: 38, color: '#FFFFFF'})
    if(localStorage.getItem('MaidenPBTime')!=undefined){
        MaidenPBTime=localStorage.getItem('MaidenPBTime')
    }else{
        MaidenPBTime=null
    }
    //success/failure text
    text = this.add.text(width/2, 150, `Woman Bow Snake`,{fontFamily:'Trebuchet MS', fontSize: 64, color: '#FFFFFF'}).setOrigin(0.5);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    //selected dial
    selectedDial=1
    dial1.tint=lightTint //highlight current dial
    dial2.tint=darkTint //dull the others
    dial3.tint=darkTint
    //keyboard inputs
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    //adding SOUNDS
    cursor=this.sound.add('cursor',{volume: 0.4})
    wrong=this.sound.add('wrong',{volume: 0.4})
    updown=this.sound.add('updown',{volume: 0.4})
    leftright=this.sound.add('leftright',{volume: 0.1});
    //define the states of tweens before adding them so that update can work
    tween1W={isPlaying:function(){
        return false;
    }}
    tween1S={isPlaying:function(){
        return false;
    }}
    tween2W={isPlaying:function(){
        return false;
    }}
    tween2S={isPlaying:function(){
        return false;
    }}
    tween3W={isPlaying:function(){
        return false;
    }}
    tween3S={isPlaying:function(){
        return false;
    }}
    //on W or S press, go up and down each dial
    this.keyW.on('down', function(event) { 
        eval(`
        if(dial${selectedDial}Num>5){
            dial${selectedDial}Num=0
        }
        maidenScene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}W=maidenScene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num+1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}W.play()
        `)
    });
    
    this.keyS.on('down', function(event) { 
        eval(`
        if(dial${selectedDial}Num<=0){
            dial${selectedDial}Num=6
        }
        maidenScene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}S=maidenScene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num-1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}S.play()
        `)
    });
    //tap A and D to change dial
    this.keyA.on('down', function(event) { 
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==1){
            selectedDial=3
        }else{
            selectedDial-=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
        
    });
    this.keyD.on('down', function(event) { 
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==3){
            selectedDial=1
        }else{
            selectedDial+=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
    });
    this.keyUp.on('down', function(event) {
        this.keyW.emit('down', event);
    },this);
    this.keyDown.on('down', function(event) {
        this.keyS.emit('down', event);
    },this);
    this.keyLeft.on('down', function(event) {
        this.keyA.emit('down', event);
    },this);
    this.keyRight.on('down', function(event) {
        this.keyD.emit('down', event);
    },this);
    this.input.on('pointerdown', function(pointer) {

        if (
            pointer.manager.hitTest(pointer, [
                this.btnW,
                this.btnA,
                this.btnS,
                this.btnD,
                this.btnF,
                resetButton,
                homeButton,
                reloadButton,
                gauntletButton
            ], this.cameras.main).length > 0
        ) {
            return; // Clicked on a virtual button
        }

        this.keyF.emit('down', pointer);

    }, this);

    //TOUCHSCREEN CONTROLS
    this.btnW = this.add.circle(230, 350, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(230, 350, "W", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnS = this.add.circle(230, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(  230, 530, "S", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnA = this.add.circle(this.scale.width - 300, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 300, 530, "A", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnD = this.add.circle(this.scale.width - 120, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 530, "D", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnF = this.add.circle(this.scale.width - 120, 230, 60, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 230, "F", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    //EMULATE WASD AND F INPUTS
    this.btnW.on('pointerdown', () => this.keyW.emit('down'));
    this.btnA.on('pointerdown', () => this.keyA.emit('down'));
    this.btnS.on('pointerdown', () => this.keyS.emit('down'));
    this.btnD.on('pointerdown', () => this.keyD.emit('down'));
    this.btnF.on('pointerdown', () => this.keyF.emit('down'));

    //Q E , or F to confirm solution
    completedTime=0
    timerStopped=false
    this.keyQ.on('down',function(event){
        this.keyF.emit('down', event);
    },this);
    this.keyE.on('down',function(event){
        this.keyF.emit('down', event);
    },this);
    
    this.keyF.on('down',function(event){
        //check if any input was dropped (numbers are not whole)
        if(dial1Num % 1 != 0 ||dial2Num % 1 != 0 ||dial3Num % 1 != 0){
            //after error message, reload page
            setTimeout(function(){
                game.scene.start('maiden')
            },1500)
            maidenScene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            text.setText(`You're inputting too fast! Restarting!`);
            text.setFill('#FF0000');
        //then check for correct solution
        }else if((dial1Num==0 || dial1Num==6)&&(dial2Num==0||dial2Num==6) && (dial3Num==0||dial3Num==6)){
            //after correct message, reload page
            timerStopped=true
            completedTime=timedEvent.getElapsedSeconds().toFixed(3);
            setTimeout(()=>{
                if (gauntletMode) {
                    this.scene.start('lion');
                }else{
                    this.scene.start('maiden')
                }
            },1500)
            maidenScene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            //show text/update pb
            if(MaidenPBTime!=null){
                //if pb'd
                console.log(MaidenPBTime)
                console.log(completedTime)
                if(parseFloat(completedTime)<parseFloat(MaidenPBTime)){
                    text.setText(`New PB by ${(MaidenPBTime-completedTime).toFixed(2)}s! ${completedTime} seconds!`);
                    text.setFill('#00FF00');
                    MaidenPBTime=completedTime
                    localStorage.setItem('MaidenPBTime', MaidenPBTime);
                //if no pb
                }else{
                    text.setText(`Correct! ${completedTime} seconds!`);
                }
            //set new pb (no previous pb)
            }else{
                MaidenPBTime=completedTime
                localStorage.setItem('MaidenPBTime', MaidenPBTime);
                text.setText(`New PB: ${completedTime} seconds!`);
                text.setFill('#00FF00');
            }
        }else{
            //after 'wrong' message, revert to normal
            setTimeout(function(){
                text.setText('Woman Bow Snake');
                text.setFill('#FFFFFF');
            },700)
            text.setText('Wrong!') 
            text.setFill('#FF0000');
            maidenScene.sound.play('wrong', { volume: 0.4});
            shake.shake()
        }
    },this)

    //press R to reload page
    this.keyR.on('down',function(event){
        game.scene.start('maiden')
    })
    //press P to clear PB and reload page
    this.keyP.on('down',function(event){
        localStorage.removeItem("MaidenPBTime");
        game.scene.start('maiden')
    })
    var shake = this.plugins.get('rexshakepositionplugin').add(text, {
        mode: 1, // 0|'effect'|1|'behavior'
        duration: 400,
        magnitude: 7,
        magnitudeMode: 1, // 0|'constant'|1|'decay'
    });
    
}
//update
maidenScene.update=function(){ 
    //when any tween (incrementing of dial values) is running, update the dial values
    if(tween1W.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1W.getValue()
        }, 50);
    }
    if(tween1S.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1S.getValue()
        }, 50);
    }
    if(tween2W.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2W.getValue()
        }, 50);
        
    }
    if(tween2S.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2S.getValue()
        }, 50);
        
    }
    if(tween3W.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3W.getValue()
        }, 50);
        
    }
    if(tween3S.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3S.getValue()
        }, 50);
        
    }
    //update dial sprites
    dial1.y=970-dial1Num*symbHeight
    dial2.y=970-dial2Num*symbHeight
    dial3.y=970-dial3Num*symbHeight
    console.log(`${dial1Num}         ${dial2Num}        ${dial3Num}`)
    //add timer
    if(timerStopped){
        timerText.setText(`Timer: ${completedTime}`)
    }else{
        let elapsedTime = timedEvent.getElapsedSeconds().toFixed(3);
        timerText.setText(`Timer: ${elapsedTime}`)
    }
    if(MaidenPBTime!=null){
        PBText.setText(`${MaidenPBTime}s`)
    }
};


//*************************************B SCENARIOS**********************************
//**************************LION SCENE*****************************
//load assets
lion2Scene.preload=function(){
    //load images
    milo=this.load.image('milo','assets/milo.png')
    //background mask image
    background=this.load.image('background','assets/test.png')
    //lion symbols
    this.load.image('lionB1','assets/symbols/lionB/dial1Sheet.png')
    this.load.image('lionB2','assets/symbols/lionB/dial2Sheet.png')
    this.load.image('lionB3','assets/symbols/lionB/dial3Sheet.png')
    //audio
    this.load.audio('updown', 'assets/sounds/updown.mp3');
    this.load.audio('leftright','assets/sounds/leftright.mp3')
    this.load.audio('cursor','assets/sounds/cursor.mp3')
    this.load.audio('wrong','assets/sounds/wrong.mp3')
    //load camera shake plugin
    this.load.plugin('rexshakepositionplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexshakepositionplugin.min.js', true);
}
//create
lion2Scene.create=function(){
    let { width, height } = this.sys.game.canvas; //get width and height of game window
    
    //set colours for tints
    var lightTint=0xfaf9f6
    var darkTint=0xA9A9A9
    //for each dial, generate random index value, then add corresponding sprite and standardise the width
    symbHeight=204
    dial1Num=Math.floor(Math.random() * 5 + 1)
    dial1=this.add.sprite((width/20*8),970-dial1Num*symbHeight,`lionB1`).setScale(1.7)
    dial2Num=Math.floor(Math.random() * 5 + 1)
    dial2=this.add.sprite((width/2),970-dial2Num*symbHeight,`lionB2`).setScale(1.7)
    dial3Num=Math.floor(Math.random() * 5+1)
    dial3=this.add.sprite((width/20)*12,970-dial3Num*symbHeight,`lionB3`).setScale(1.7)
    
    //masks rest of dials (anything added before this line will be covered)
    backgroundMask=this.add.sprite(0,0,`background`).setOrigin(0, 0)

    gauntletButton = this.add.text(width-300, 100, `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`,{backgroundColor: '#ae1d1d', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 24, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            gauntletButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            gauntletButton.setScale(1);
        })
	    .on('pointerdown', function(){
            gauntletMode = !gauntletMode
            gauntletButton.setText(
            `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`)
        },this)
    //back to home button
    homeButton = this.add.text(0, 720, 'BACK',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            homeButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            homeButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('home');
        },this)
    //reload button
    reloadButton = this.add.text(width/2, 720, 'RELOAD',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0.5,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            reloadButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            reloadButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('lion2');
        },this)
    //reset pb button
    resetButton = this.add.text(width, 720, 'RESET PB',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(1,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            resetButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            resetButton.setScale(1);
        })
	    .on('pointerdown', function(){
            localStorage.removeItem("Lion2PBTime");
            this.scene.start('lion2');
        },this)
    //Add timer clock
    timedEvent = this.time.addEvent({ delay: 6000000, callback: this.onClockEvent, callbackScope: this, repeat: 1 }); 
    timerText=this.add.text(0, 0, `Timer: `,{fontFamily:'Trebuchet MS', fontSize: 32, color: '#FFFFFF'})
    //PB Header + Text 
    PBHeader=this.add.text(0, 40, `PB This Session: `,{fontFamily:'Trebuchet MS', fontSize: 26, color: '#FFFFFF'})
    PBText=this.add.text(0, 70, ``,{fontFamily:'Trebuchet MS', fontSize: 38, color: '#FFFFFF'})
    if(localStorage.getItem('Lion2PBTime')!=undefined){
        Lion2PBTime=localStorage.getItem('Lion2PBTime')
    }else{
        Lion2PBTime=null
    }
    //success/failure text
    text = this.add.text(width/2, 150, `Crown Fire Bird`,{fontFamily:'Trebuchet MS', fontSize: 64, color: '#FFFFFF'}).setOrigin(0.5);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    //selected dial
    selectedDial=1
    dial1.tint=lightTint //highlight current dial
    dial2.tint=darkTint //dull the others
    dial3.tint=darkTint
    //keyboard inputs
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    //adding SOUNDS
    cursor=this.sound.add('cursor',{volume: 0.4})
    wrong=this.sound.add('wrong',{volume: 0.4})
    updown=this.sound.add('updown',{volume: 0.4})
    leftright=this.sound.add('leftright',{volume: 0.1});
    //define the states of tweens before adding them so that update can work
    tween1W={isPlaying:function(){
        return false;
    }}
    tween1S={isPlaying:function(){
        return false;
    }}
    tween2W={isPlaying:function(){
        return false;
    }}
    tween2S={isPlaying:function(){
        return false;
    }}
    tween3W={isPlaying:function(){
        return false;
    }}
    tween3S={isPlaying:function(){
        return false;
    }}
    //on W or S press, go up and down each dial
    this.keyW.on('down', function(event) { 
        eval(`
        if(dial${selectedDial}Num>5){
            dial${selectedDial}Num=0
        }
        lion2Scene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}W=lion2Scene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num+1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}W.play()
        `)
    });
    
    this.keyS.on('down', function(event) { 
        eval(`
        if(dial${selectedDial}Num<=0){
            dial${selectedDial}Num=6
        }
        lion2Scene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}S=lion2Scene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num-1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}S.play()
        `)
    });
    //tap A and D to change dial
    this.keyA.on('down', function(event) { 
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==1){
            selectedDial=3
        }else{
            selectedDial-=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
        
    });
    this.keyD.on('down', function(event) { 
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==3){
            selectedDial=1
        }else{
            selectedDial+=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
    });
    this.keyUp.on('down', function(event) {
        this.keyW.emit('down', event);
    },this);
    this.keyDown.on('down', function(event) {
        this.keyS.emit('down', event);
    },this);
    this.keyLeft.on('down', function(event) {
        this.keyA.emit('down', event);
    },this );
    this.keyRight.on('down', function(event) {
        this.keyD.emit('down', event);
    },this);
    this.input.on('pointerdown', function(pointer) {

        if (
            pointer.manager.hitTest(pointer, [
                this.btnW,
                this.btnA,
                this.btnS,
                this.btnD,
                this.btnF,
                resetButton,
                homeButton,
                reloadButton,
                gauntletButton
            ], this.cameras.main).length > 0
        ) {
            return; // Clicked on a virtual button
        }

        this.keyF.emit('down', pointer);

    }, this);

    //TOUCHSCREEN CONTROLS
    this.btnW = this.add.circle(230, 350, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(230, 350, "W", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnS = this.add.circle(230, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(  230, 530, "S", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnA = this.add.circle(this.scale.width - 300, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 300, 530, "A", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnD = this.add.circle(this.scale.width - 120, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 530, "D", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnF = this.add.circle(this.scale.width - 120, 230, 60, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 230, "F", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    //EMULATE WASD AND F INPUTS
    this.btnW.on('pointerdown', () => this.keyW.emit('down'));
    this.btnA.on('pointerdown', () => this.keyA.emit('down'));
    this.btnS.on('pointerdown', () => this.keyS.emit('down'));
    this.btnD.on('pointerdown', () => this.keyD.emit('down'));
    this.btnF.on('pointerdown', () => this.keyF.emit('down'));

    //Q E , or F to confirm solution
    completedTime=0
    timerStopped=false
    this.keyQ.on('down',function(event){
        this.keyF.emit('down', event);
    },this);
    this.keyE.on('down',function(event){
        this.keyF.emit('down', event);
    },this);

    this.keyF.on('down',function(event){
        //check if any input was dropped (numbers are not whole)
        if(dial1Num % 1 != 0 ||dial2Num % 1 != 0 ||dial3Num % 1 != 0){
            //after error message, reload page
            setTimeout(function(){
                game.scene.start('lion2')
            },1500)
            lion2Scene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            text.setText(`You're inputting too fast! Restarting!`);
            text.setFill('#FF0000');
        //then check for correct solution
        }else if((dial1Num==0 || dial1Num==6)&&(dial2Num==0||dial2Num==6) && (dial3Num==0||dial3Num==6)){
            //after correct message, reload page
            timerStopped=true
            completedTime=timedEvent.getElapsedSeconds().toFixed(3);
            setTimeout(()=>{
                if (gauntletMode) {
                    this.scene.start('unicorn2');
                }else{
                    this.scene.start('lion2')
                }
            },1500)
            lion2Scene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            //show text/update pb
            if(Lion2PBTime!=null){
                //if pb'd
                console.log(Lion2PBTime)
                console.log(completedTime)
                if(parseFloat(completedTime)<parseFloat(Lion2PBTime)){
                    text.setText(`New PB by ${(Lion2PBTime-completedTime).toFixed(2)}s! ${completedTime} seconds!`);
                    text.setFill('#00FF00');
                    Lion2PBTime=completedTime
                    localStorage.setItem('Lion2PBTime', Lion2PBTime);
                //if no pb
                }else{
                    text.setText(`Correct! ${completedTime} seconds!`);
                }
            //set new pb (no previous pb)
            }else{
                Lion2PBTime=completedTime
                localStorage.setItem('LionLion2PBTime', Lion2PBTime);
                text.setText(`New PB: ${completedTime} seconds!`);
                text.setFill('#00FF00');
            }
        }else{
            //after 'wrong' message, revert to normal
            setTimeout(function(){
                text.setText('Crown Fire Bird');
                text.setFill('#FFFFFF');
            },700)
            text.setText('Wrong!') 
            text.setFill('#FF0000');
            lion2Scene.sound.play('wrong', { volume: 0.4});
            shake.shake()
        }
    },this)

    //press R to reload page
    this.keyR.on('down',function(event){
        game.scene.start('lion2')
    })
    //press P to clear PB and reload page
    this.keyP.on('down',function(event){
        localStorage.removeItem("Lion2PBTime");
        game.scene.start('lion2')
    })
    var shake = this.plugins.get('rexshakepositionplugin').add(text, {
        mode: 1, // 0|'effect'|1|'behavior'
        duration: 400,
        magnitude: 7,
        magnitudeMode: 1, // 0|'constant'|1|'decay'
    });
}
//update
lion2Scene.update=function(){ 
    //when any tween (incrementing of dial values) is running, update the dial values
    if(tween1W.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1W.getValue()
        }, 50);
    }
    if(tween1S.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1S.getValue()
        }, 50);
    }
    if(tween2W.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2W.getValue()
        }, 50);
        
    }
    if(tween2S.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2S.getValue()
        }, 50);
        
    }
    if(tween3W.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3W.getValue()
        }, 50);
        
    }
    if(tween3S.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3S.getValue()
        }, 50);
        
    }
    //update dial sprites
    dial1.y=970-dial1Num*symbHeight
    dial2.y=970-dial2Num*symbHeight
    dial3.y=970-dial3Num*symbHeight
    console.log(`${dial1Num}         ${dial2Num}        ${dial3Num}`)
    //add timer
    if(timerStopped){
        timerText.setText(`Timer: ${completedTime}`)
    }else{
        let elapsedTime = timedEvent.getElapsedSeconds().toFixed(3);
        timerText.setText(`Timer: ${elapsedTime}`)
    }
    if(Lion2PBTime!=null){
        PBText.setText(`${Lion2PBTime}s`)
    }
};

//**************************UNICORN SCENE*****************************
//load assets
unicorn2Scene.preload=function(){
    //background mask image
    background=this.load.image('background','assets/test.png')
    //unicorn symbols
    this.load.image('unicornB1','assets/symbols/unicornB/dial1Sheet.png')
    this.load.image('unicornB2','assets/symbols/unicornB/dial2Sheet.png')
    this.load.image('unicornB3','assets/symbols/unicornB/dial3Sheet.png')
    //audio
    this.load.audio('updown', 'assets/sounds/updown.mp3');
    this.load.audio('leftright','assets/sounds/leftright.mp3')
    this.load.audio('cursor','assets/sounds/cursor.mp3')
    this.load.audio('wrong','assets/sounds/wrong.mp3')
    //load camera shake plugin
    this.load.plugin('rexshakepositionplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexshakepositionplugin.min.js', true);
}

//create
unicorn2Scene.create=function(){
    let { width, height } = this.sys.game.canvas; //get width and height of game window
    //set colours for tints
    var lightTint=0xfaf9f6
    var darkTint=0xA9A9A9
    //for each dial, generate random index value, then add corresponding sprite and standardise the width
    symbHeight=204
    dial1Num=Math.floor(Math.random() * 5 + 1)
    dial1=this.add.sprite((width/20*8),970-dial1Num*symbHeight,`unicornB1`).setScale(1.7)
    dial2Num=Math.floor(Math.random() * 5 + 1)
    dial2=this.add.sprite((width/2),970-dial2Num*symbHeight,`unicornB2`).setScale(1.7)
    dial3Num=Math.floor(Math.random() * 5+1)
    dial3=this.add.sprite((width/20)*12,970-dial3Num*symbHeight,`unicornB3`).setScale(1.7)

    backgroundMask=this.add.sprite(0,0,`background`).setOrigin(0, 0)
    gauntletButton = this.add.text(width-300, 100, `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`,{backgroundColor: '#ae1d1d', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 24, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            gauntletButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            gauntletButton.setScale(1);
        })
	    .on('pointerdown', function(){
            gauntletMode = !gauntletMode
            gauntletButton.setText(
            `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`)
        },this)

    //back to home button
    homeButton = this.add.text(0, 720, 'BACK',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            homeButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            homeButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('home');
        },this)
    //reload button
    reloadButton = this.add.text(width/2, 720, 'RELOAD',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0.5,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            reloadButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            reloadButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('unicorn2');
        },this)
    //reset pb button
    resetButton = this.add.text(width, 720, 'RESET PB',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(1,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            resetButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            resetButton.setScale(1);
        })
	    .on('pointerdown', function(){
            localStorage.removeItem("Unicorn2PBTime");
            this.scene.start('unicorn2');
        },this)
    //Add timer clock
    timedEvent = this.time.addEvent({ delay: 6000000, callback: this.onClockEvent, callbackScope: this, repeat: 1 }); 
    timerText=this.add.text(0, 0, `Timer: `,{fontFamily:'Trebuchet MS', fontSize: 32, color: '#FFFFFF'})
    //PB Header + Text 
    PBHeader=this.add.text(0, 40, `PB This Session: `,{fontFamily:'Trebuchet MS', fontSize: 26, color: '#FFFFFF'})
    PBText=this.add.text(0, 70, ``,{fontFamily:'Trebuchet MS', fontSize: 38, color: '#FFFFFF'})
    if(localStorage.getItem('Unicorn2PBTime')!=undefined){
        Unicorn2PBTime=localStorage.getItem('Unicorn2PBTime')
    }else{
        Unicorn2PBTime=null
    }
    //success/failure text
    text = this.add.text(width/2, 150, `Twin Scale Worm`,{fontFamily:'Trebuchet MS', fontSize: 64, color: '#FFFFFF'}).setOrigin(0.5);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    //selected dial
    selectedDial=1
    dial1.tint=lightTint //highlight current dial
    dial2.tint=darkTint //dull the others
    dial3.tint=darkTint
    //keyboard inputs
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    //adding SOUNDS
    cursor=this.sound.add('cursor',{volume: 0.4})
    wrong=this.sound.add('wrong',{volume: 0.4})
    updown=this.sound.add('updown',{volume: 0.4})
    leftright=this.sound.add('leftright',{volume: 0.1});
    //define the states of tweens before adding them so that update can work
    tween1W={isPlaying:function(){
        return false;
    }}
    tween1S={isPlaying:function(){
        return false;
    }}
    tween2W={isPlaying:function(){
        return false;
    }}
    tween2S={isPlaying:function(){
        return false;
    }}
    tween3W={isPlaying:function(){
        return false;
    }}
    tween3S={isPlaying:function(){
        return false;
    }}
    //on W or S press, go up and down each dial
    this.keyW.on('down', function(event) { 
        eval(`
        if(dial${selectedDial}Num>5){
            dial${selectedDial}Num=0
        }
        unicorn2Scene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}W=unicorn2Scene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num+1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}W.play()
        `)
    });
    
    this.keyS.on('down', function(event) { 
        eval(`
        if(dial${selectedDial}Num<=0){
            dial${selectedDial}Num=6
        }
        unicorn2Scene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}S=unicorn2Scene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num-1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}S.play()
        `)
    });
    //tap A and D to change dial
    this.keyA.on('down', function(event) { 
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==1){
            selectedDial=3
        }else{
            selectedDial-=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
        
    });
    this.keyD.on('down', function(event) { 
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==3){
            selectedDial=1
        }else{
            selectedDial+=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
    });
    this.keyUp.on('down', function(event) {
        this.keyW.emit('down', event);
    },this);
    this.keyDown.on('down', function(event) {
        this.keyS.emit('down', event);
    },this);
    this.keyLeft.on('down', function(event) {
        this.keyA.emit('down', event);
    },this);
    this.keyRight.on('down', function(event) {
        this.keyD.emit('down', event);
    },this);
    this.input.on('pointerdown', function(pointer) {

        if (
            pointer.manager.hitTest(pointer, [
                this.btnW,
                this.btnA,
                this.btnS,
                this.btnD,
                this.btnF,
                resetButton,
                homeButton,
                reloadButton,
                gauntletButton
            ], this.cameras.main).length > 0
        ) {
            return; // Clicked on a virtual button
        }

        this.keyF.emit('down', pointer);

    }, this);

    //TOUCHSCREEN CONTROLS
    this.btnW = this.add.circle(230, 350, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(230, 350, "W", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnS = this.add.circle(230, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(  230, 530, "S", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnA = this.add.circle(this.scale.width - 300, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 300, 530, "A", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnD = this.add.circle(this.scale.width - 120, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 530, "D", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnF = this.add.circle(this.scale.width - 120, 230, 60, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 230, "F", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    //EMULATE WASD AND F INPUTS
    this.btnW.on('pointerdown', () => this.keyW.emit('down'));
    this.btnA.on('pointerdown', () => this.keyA.emit('down'));
    this.btnS.on('pointerdown', () => this.keyS.emit('down'));
    this.btnD.on('pointerdown', () => this.keyD.emit('down'));
    this.btnF.on('pointerdown', () => this.keyF.emit('down'));

    //Q E , or F to confirm solution
    completedTime=0
    timerStopped=false
    this.keyQ.on('down',function(event){
        this.keyF.emit('down', event);
    },this);
    this.keyE.on('down',function(event){
        this.keyF.emit('down', event);
    },this);
    
    this.keyF.on('down',function(event){
        //check if any input was dropped (numbers are not whole)
        if(dial1Num % 1 != 0 ||dial2Num % 1 != 0 ||dial3Num % 1 != 0){
            //after error message, reload page
            setTimeout(function(){
                game.scene.start('unicorn2')
            },1500)
            unicorn2Scene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            text.setText(`You're inputting too fast! Restarting!`);
            text.setFill('#FF0000');
        //then check for correct solution
        }else if((dial1Num==0 || dial1Num==6)&&(dial2Num==0||dial2Num==6) && (dial3Num==0||dial3Num==6)){
            //after correct message, reload page
            timerStopped=true
            completedTime=timedEvent.getElapsedSeconds().toFixed(3);
            setTimeout(()=>{
                if (gauntletMode) {
                    this.scene.start('maiden2');
                }else{
                    this.scene.start('unicorn2');
                }
            },1500)
            unicorn2Scene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            //show text/update pb
            if(Unicorn2PBTime!=null){
                //if pb'd
                console.log(Unicorn2PBTime)
                console.log(completedTime)
                if(parseFloat(completedTime)<parseFloat(Unicorn2PBTime)){
                    text.setText(`New PB by ${(Unicorn2PBTime-completedTime).toFixed(2)}s! ${completedTime} seconds!`);
                    text.setFill('#00FF00');
                    Unicorn2PBTime=completedTime
                    localStorage.setItem('Unicorn2PBTime', Unicorn2PBTime);
                //if no pb
                }else{
                    text.setText(`Correct! ${completedTime} seconds!`);
                }
            //set new pb (no previous pb)
            }else{
                Unicorn2PBTime=completedTime
                localStorage.setItem('Unicorn2PBTime', Unicorn2PBTime);
                text.setText(`New PB: ${completedTime} seconds!`);
                text.setFill('#00FF00');
            }
        }else{
            //after 'wrong' message, revert to normal
            setTimeout(function(){
                text.setText('Twin Scale Worm');
                text.setFill('#FFFFFF');
            },700)
            text.setText('Wrong!') 
            text.setFill('#FF0000');
            unicorn2Scene.sound.play('wrong', { volume: 0.4});
            shake.shake()
        }
    },this)

    //press R to reload page
    this.keyR.on('down',function(event){
        game.scene.start('unicorn2')
    })
    //press P to clear PB and reload page
    this.keyP.on('down',function(event){
        localStorage.removeItem("Unicorn2PBTime");
        game.scene.start('unicorn2')
    })
    var shake = this.plugins.get('rexshakepositionplugin').add(text, {
        mode: 1, // 0|'effect'|1|'behavior'
        duration: 400,
        magnitude: 7,
        magnitudeMode: 1, // 0|'constant'|1|'decay'
    });
    
}
//update
unicorn2Scene.update=function(){ 
    //when any tween (incrementing of dial values) is running, update the dial values
    if(tween1W.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1W.getValue()
        }, 50);
    }
    if(tween1S.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1S.getValue()
        }, 50);
    }
    if(tween2W.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2W.getValue()
        }, 50);
        
    }
    if(tween2S.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2S.getValue()
        }, 50);
        
    }
    if(tween3W.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3W.getValue()
        }, 50);
        
    }
    if(tween3S.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3S.getValue()
        }, 50);
        
    }
    //update dial sprites
    dial1.y=970-dial1Num*symbHeight
    dial2.y=970-dial2Num*symbHeight
    dial3.y=970-dial3Num*symbHeight
    console.log(`${dial1Num}         ${dial2Num}        ${dial3Num}`)
    //add timer
    if(timerStopped){
        timerText.setText(`Timer: ${completedTime}`)
    }else{
        let elapsedTime = timedEvent.getElapsedSeconds().toFixed(3);
        timerText.setText(`Timer: ${elapsedTime}`)
    }
    if(Unicorn2PBTime!=null){
        PBText.setText(`${Unicorn2PBTime}s`)
    }
};

//**************************MAIDEN SCENE*****************************
//load assets
maiden2Scene.preload=function(){
    //background mask image
    background=this.load.image('background','assets/test.png')
    //unicorn symbols
    this.load.image('maidenB1','assets/symbols/maidenB/dial1Sheet.png')
    this.load.image('maidenB2','assets/symbols/maidenB/dial2Sheet.png')
    this.load.image('maidenB3','assets/symbols/maidenB/dial3Sheet.png')
    //audio
    this.load.audio('updown', 'assets/sounds/updown.mp3');
    this.load.audio('leftright','assets/sounds/leftright.mp3')
    this.load.audio('cursor','assets/sounds/cursor.mp3')
    this.load.audio('wrong','assets/sounds/wrong.mp3')
    //load camera shake plugin
    this.load.plugin('rexshakepositionplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexshakepositionplugin.min.js', true);
}
//create
maiden2Scene.create=function(){
    let { width, height } = this.sys.game.canvas; //get width and height of game window
    //set colours for tints
    var lightTint=0xfaf9f6
    var darkTint=0xA9A9A9
    //for each dial, generate random index value, then add corresponding sprite and standardise the width
    symbHeight=204
    dial1Num=Math.floor(Math.random() * 5 + 1)
    dial1=this.add.sprite((width/20*8),970-dial1Num*symbHeight,`maidenB1`).setScale(1.7)
    dial2Num=Math.floor(Math.random() * 5 + 1)
    dial2=this.add.sprite((width/2),970-dial2Num*symbHeight,`maidenB2`).setScale(1.7)
    dial3Num=Math.floor(Math.random() * 5+1)
    dial3=this.add.sprite((width/20)*12,970-dial3Num*symbHeight,`maidenB3`).setScale(1.7)

    backgroundMask=this.add.sprite(0,0,`background`).setOrigin(0, 0)
    gauntletButton = this.add.text(width-300, 100, `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`,{backgroundColor: '#ae1d1d', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 24, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            gauntletButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            gauntletButton.setScale(1);
        })
	    .on('pointerdown', function(){
            gauntletMode = !gauntletMode
            gauntletButton.setText(
            `Gauntlet Mode:\n        ${gauntletMode ? 'ON' : 'OFF'}`)
        },this)
    //back to home button
    
    homeButton = this.add.text(0, 720, 'BACK',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            homeButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            homeButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('home');
        },this)
    //reload button
    reloadButton = this.add.text(width/2, 720, 'RELOAD',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(0.5,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            reloadButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            reloadButton.setScale(1);
        })
	    .on('pointerdown', function(){
            this.scene.start('maiden2');
        },this)
    //reset pb button
    resetButton = this.add.text(width, 720, 'RESET PB',{backgroundColor: '#4CAF50', fill: '#FFFFFF',fontFamily:'Trebuchet MS', fontSize: 54, }).setOrigin(1,1)
        .setPadding(10)
        .setInteractive( { useHandCursor: true })
        .on('pointerover',function(pointer){
            resetButton.setScale(1.05);
        })
        .on('pointerout',function(pointer){
            resetButton.setScale(1);
        })
	    .on('pointerdown', function(){
            localStorage.removeItem("Maiden2PBTime");
            this.scene.start('maiden2');
        },this)
    //Add timer clock
    timedEvent = this.time.addEvent({ delay: 6000000, callback: this.onClockEvent, callbackScope: this, repeat: 1 }); 
    timerText=this.add.text(0, 0, `Timer: `,{fontFamily:'Trebuchet MS', fontSize: 32, color: '#FFFFFF'})
    //PB Header + Text 
    PBHeader=this.add.text(0, 40, `PB This Session: `,{fontFamily:'Trebuchet MS', fontSize: 26, color: '#FFFFFF'})
    PBText=this.add.text(0, 70, ``,{fontFamily:'Trebuchet MS', fontSize: 38, color: '#FFFFFF'})
    if(localStorage.getItem('Maiden2PBTime')!=undefined){
        Maiden2PBTime=localStorage.getItem('Maiden2PBTime')
    }else{
        Maiden2PBTime=null
    }
    //success/failure text
    text = this.add.text(width/2, 150, `Ram Harp Bird`,{fontFamily:'Trebuchet MS', fontSize: 64, color: '#FFFFFF'}).setOrigin(0.5);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    //selected dial
    selectedDial=1
    dial1.tint=lightTint //highlight current dial
    dial2.tint=darkTint //dull the others
    dial3.tint=darkTint
    //keyboard inputs
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    //adding SOUNDS
    cursor=this.sound.add('cursor',{volume: 0.4})
    wrong=this.sound.add('wrong',{volume: 0.4})
    updown=this.sound.add('updown',{volume: 0.4})
    leftright=this.sound.add('leftright',{volume: 0.1});
    //define the states of tweens before adding them so that update can work
    tween1W={isPlaying:function(){
        return false;
    }}
    tween1S={isPlaying:function(){
        return false;
    }}
    tween2W={isPlaying:function(){
        return false;
    }}
    tween2S={isPlaying:function(){
        return false;
    }}
    tween3W={isPlaying:function(){
        return false;
    }}
    tween3S={isPlaying:function(){
        return false;
    }}
    //on W or S press, go up and down each dial
    this.keyW.on('down', function(event) { 
        eval(`
        if(dial${selectedDial}Num>5){
            dial${selectedDial}Num=0
        }
        maiden2Scene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}W=maiden2Scene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num+1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}W.play()
        `)
    });
    
    this.keyS.on('down', function(event) { 
        eval(`
        if(dial${selectedDial}Num<=0){
            dial${selectedDial}Num=6
        }
        maiden2Scene.sound.play('updown', { volume: 0.4 });
        tween${selectedDial}S=maiden2Scene.tweens.addCounter({
            from: dial${selectedDial}Num,
            to: dial${selectedDial}Num-1,
            duration: 215,
            paused:true
        });
        tween${selectedDial}S.play()
        `)
    });
    //tap A and D to change dial
    this.keyA.on('down', function(event) { 
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==1){
            selectedDial=3
        }else{
            selectedDial-=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
        
    });
    this.keyD.on('down', function(event) { 
        if(tween1W.isPlaying() || tween1S.isPlaying() || tween2W.isPlaying() || tween2S.isPlaying() || tween3W.isPlaying() || tween3S.isPlaying()){
            return;
        }
        leftright.play();
        eval(`dial${selectedDial}.tint=${darkTint}`) //remove tint
        //switch dial
        if(selectedDial==3){
            selectedDial=1
        }else{
            selectedDial+=1
        }
        eval(`dial${selectedDial}.tint=${lightTint}`) //highlight new dial
    });
    this.keyUp.on('down', function(event) {
        this.keyW.emit('down', event);
    },this);
    this.keyDown.on('down', function(event) {
        this.keyS.emit('down', event);
    },this);
    this.keyLeft.on('down', function(event) {
        this.keyA.emit('down', event);
    },this);
    this.keyRight.on('down', function(event) {
        this.keyD.emit('down', event);
    },this);
    this.input.on('pointerdown', function(pointer) {

        if (
            pointer.manager.hitTest(pointer, [
                this.btnW,
                this.btnA,
                this.btnS,
                this.btnD,
                this.btnF,
                resetButton,
                homeButton,
                reloadButton,
                gauntletButton
            ], this.cameras.main).length > 0
        ) {
            return; // Clicked on a virtual button
        }

        this.keyF.emit('down', pointer);

    }, this);

    //TOUCHSCREEN CONTROLS
    this.btnW = this.add.circle(230, 350, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(230, 350, "W", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnS = this.add.circle(230, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(  230, 530, "S", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnA = this.add.circle(this.scale.width - 300, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 300, 530, "A", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnD = this.add.circle(this.scale.width - 120, 530, 80, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 530, "D", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    this.btnF = this.add.circle(this.scale.width - 120, 230, 60, 0xffffff, 0.3).setInteractive();
    this.add.text(this.scale.width - 120, 230, "F", {fontSize: "48px",color: "#ffffff",fontStyle: "bold"}).setOrigin(0.5);
    //EMULATE WASD AND F INPUTS
    this.btnW.on('pointerdown', () => this.keyW.emit('down'));
    this.btnA.on('pointerdown', () => this.keyA.emit('down'));
    this.btnS.on('pointerdown', () => this.keyS.emit('down'));
    this.btnD.on('pointerdown', () => this.keyD.emit('down'));
    this.btnF.on('pointerdown', () => this.keyF.emit('down'));

    //Q E , or F to confirm solution
    completedTime=0
    timerStopped=false
    this.keyQ.on('down',function(event){
        this.keyF.emit('down', event);
    },this);
    this.keyE.on('down',function(event){
        this.keyF.emit('down', event);
    },this);
    
    this.keyF.on('down',function(event){
        //check if any input was dropped (numbers are not whole)
        if(dial1Num % 1 != 0 ||dial2Num % 1 != 0 ||dial3Num % 1 != 0){
            //after error message, reload page
            setTimeout(function(){
                game.scene.start('maiden2')
            },1500)
            maiden2Scene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            text.setText(`You're inputting too fast! Restarting!`);
            text.setFill('#FF0000');
        //then check for correct solution
        }else if((dial1Num==0 || dial1Num==6)&&(dial2Num==0||dial2Num==6) && (dial3Num==0||dial3Num==6)){
            //after correct message, reload page
            timerStopped=true
            completedTime=timedEvent.getElapsedSeconds().toFixed(3);
            setTimeout(()=>{
                if (gauntletMode) {
                    this.scene.start('lion2');
                }else{
                    this.scene.start('maiden2')
                }
            },1500)
            maiden2Scene.sound.play('cursor', { volume: 0.4, seek: 0.65});
            //show text/update pb
            if(Maiden2PBTime!=null){
                //if pb'd
                console.log(Maiden2PBTime)
                console.log(completedTime)
                if(parseFloat(completedTime)<parseFloat(Maiden2PBTime)){
                    text.setText(`New PB by ${(Maiden2PBTime-completedTime).toFixed(2)}s! ${completedTime} seconds!`);
                    text.setFill('#00FF00');
                    Maiden2PBTime=completedTime
                    localStorage.setItem('Maiden2PBTime', Maiden2PBTime);
                //if no pb
                }else{
                    text.setText(`Correct! ${completedTime} seconds!`);
                }
            //set new pb (no previous pb)
            }else{
                Maiden2PBTime=completedTime
                localStorage.setItem('Maiden2PBTime', Maiden2PBTime);
                text.setText(`New PB: ${completedTime} seconds!`);
                text.setFill('#00FF00');
            }
        }else{
            //after 'wrong' message, revert to normal
            setTimeout(function(){
                text.setText('Ram Harp Bird');
                text.setFill('#FFFFFF');
            },700)
            text.setText('Wrong!') 
            text.setFill('#FF0000');
            maiden2Scene.sound.play('wrong', { volume: 0.4});
            shake.shake()
        }
    },this)

    //press R to reload page
    this.keyR.on('down',function(event){
        game.scene.start('maiden2')
    })
    //press P to clear PB and reload page
    this.keyP.on('down',function(event){
        localStorage.removeItem("Maiden2PBTime");
        game.scene.start('maiden2')
    })
    var shake = this.plugins.get('rexshakepositionplugin').add(text, {
        mode: 1, // 0|'effect'|1|'behavior'
        duration: 400,
        magnitude: 7,
        magnitudeMode: 1, // 0|'constant'|1|'decay'
    });
    
}
//update
maiden2Scene.update=function(){ 
    //when any tween (incrementing of dial values) is running, update the dial values
    if(tween1W.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1W.getValue()
        }, 50);
    }
    if(tween1S.isPlaying()){
        setTimeout(function(){
            dial1Num=tween1S.getValue()
        }, 50);
    }
    if(tween2W.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2W.getValue()
        }, 50);
        
    }
    if(tween2S.isPlaying()){
        setTimeout(function(){
            dial2Num=tween2S.getValue()
        }, 50);
        
    }
    if(tween3W.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3W.getValue()
        }, 50);
        
    }
    if(tween3S.isPlaying()){
        setTimeout(function(){
            dial3Num=tween3S.getValue()
        }, 50);
        
    }
    //update dial sprites
    dial1.y=970-dial1Num*symbHeight
    dial2.y=970-dial2Num*symbHeight
    dial3.y=970-dial3Num*symbHeight
    console.log(`${dial1Num}         ${dial2Num}        ${dial3Num}`)
    //add timer
    if(timerStopped){
        timerText.setText(`Timer: ${completedTime}`)
    }else{
        let elapsedTime = timedEvent.getElapsedSeconds().toFixed(3);
        timerText.setText(`Timer: ${elapsedTime}`)
    }
    if(Maiden2PBTime!=null){
        PBText.setText(`${Maiden2PBTime}s`)
    }
};


//**********FINAL GAME CONFIG************
//set config
let config={
    type:Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#00001e',
    scene: [homeScene,infoScene,lionScene,unicornScene,maidenScene,lion2Scene,unicorn2Scene,maiden2Scene]
}
//create game, pass config
let game= new Phaser.Game(config);
