class Scenario{

	constructor(){
		this.questions = [];
		this.replies = []; //Que des questions ouvertes ? + analyse syntaxique
		this.relationsQR = []; //Pas besoin non plus
		this.variables = [];
		this.currentReplies = []; //On le fait ou pas ? 
		//Ou on remplace par de l'analyse syntaxique

		this.isClosedQuestion = false;
		this.isOpenQuestion = false;
		//this.isResumeScenario = false;
	}

	/* Ajoute une question a la fin de la liste
	*/
	addQuestion(q){
		this.questions.push(q);
	}

	/* Retire une question en fonction de son ID
	*/
	removeQuestion(idQuestion){
		for(let i=0; i<this.questions.length;i++){
			if(this.questions[i].id == idQuestion){
				//Retire 1 élément à l'indice i
				this.questions.splice(i,1);
			}
		}
	}

	/* Ajoute une réponse a la fin de la liste
	*/
	addReply(r){
		this.replies.push(r);
	}

	/* Retire une réponse en fonction de son ID
	*/
	removeReply(idReply){
		for(let i=0; i<this.replies.length;i++){
			if(this.replies[i].id == idReply){
				this.replies.splice(i,1);
			}
		}
	}

	/* Ajoute une relation QR a la fin de la liste
	*/
	addRelationQR(r){
		this.relationsQR.push(r);
	}

	/* Retire une relation QR en fonction de son ID
	*/
	removeRelationQR(idRelationQR){
		for(let i=0; i<this.relationsQR.length;i++){
			if(this.relationsQR[i].id == idRelationQR){
				this.relationsQR.splice(i,1);
			}
		}
	}

	/* Ajoute une variable a la fin de la liste
	*/
	addVariable(v){
		this.variables.push(v);
	}

	/* Retire une variable en fonction de son ID
	*/
	removeVariable(idVariable){
		for(let i=0; i<this.variables.length;i++){
			if(this.variables[i].id == idVariable){
				this.variables.splice(i,1);
			}
		}
	}


}