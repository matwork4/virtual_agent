class Question {

  constructor(id, idScenario, textEN, textFR, textJP, isFirst, isEnd, isUserResponse, nameVariable){
  	this.id = id; 
  	this.idScenario = idScenario; //int
  	this.textEN = textEN; //String
  	this.textFR = textFR; //String
  	this.textJP = textJP; //String
  	this.isFirst = isFirst; //bool
  	this.isEnd = isEnd; //bool
    this.isUserResponse = isUserResponse; //bool
  	this.nameVariable = nameVariable; //String
  }

}