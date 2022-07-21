class Scenario{

	constructor(){
		this.questions = [];
		this.replies = []; 
		this.variables = [];

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

	/* Ajoute une réponse (réquivalent relation QQ) a la fin de la liste
	*/
	addReply(r){
		this.replies.push(r);
	}


	/* Retire une réponse en fonction de son ID
	*/
	removeReply(reply){
		for(let i=0; i<this.replies.length;i++){
			if(this.replies[i].id == reply){
				this.replies.splice(i,1);
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