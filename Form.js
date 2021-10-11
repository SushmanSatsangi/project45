class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
      this.level1 = createButton("Easy(250 meters)");
      this.level2 = createButton("Moderate(1000 meters)");
      this.level3 = createButton("Hard(3000 meters)");
      this.displaybtn = createButton("Show Journey");
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.level1.hide();
      this.level2.hide();
      this.level3.hide();
    }
  
    display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
      this.level1.position(displayWidth/2+50, displayHeight/2);
      this.level2.position(displayWidth/2+100, displayHeight/2);
      this.level3.position(displayWidth/2+150, displayHeight/2);
      this.displaybtn.position(displayWidth/2+200, displayHeight/2);
      
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
      this.level1.mousePressed(()=>{

        
      });
    }
  }
  