class Question {

    constructor() {
      this.input1 = createInput("Name");
      this.option1 = createElement('h2');
      this.question = createElement('h2');
      this.title = createElement('h2');
      this.option2 = createElement('h2');
      this.submit=createButton('submit')
    }
    hide(){
        this.input1.hide()
        this.option1.hide()
        this.question.hide()
        this.title.hide()
        this.option2.hide()
        this.submit.hide();
    }
  
    display(){
      this.title.html("MyQuizGame");
      this.title.position(350,0);
      this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter ?");
      this.question.position(150,80)
      this.option1.html("1. Everyone");
      this.option1.position(150, 100)
      this.option2.html("2. Everyone");
      this.option2.position(150, 120)
      this.input1.position(150, 230);
    }
  
    
  
  