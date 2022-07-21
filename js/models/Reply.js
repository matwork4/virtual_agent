class Reply{

	constructor(id, idScenario, idQuestion, idNextQuestion, analysisEN, analysisFR, analysisJP, dataType, dataValue){
		this.id = id;
		this.idScenario = idScenario; //int
		this.idQuestion = idQuestion; //int
		this.idNextQuestion = idNextQuestion; //int
		this.analysisEN = analysisEN; //String
		this.analysisFR = analysisFR;
		this.analysisJP = analysisJP;
		this.dataType = dataType; //String
		this.dataValue = dataValue; //int
	}
}