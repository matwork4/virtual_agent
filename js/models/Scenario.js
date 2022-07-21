class Scenario{

	constructor(){
		this.questions = [];
		this.replies = []; 
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

	getQuestionById(idQuestion){
		for(let i=0; i<this.questions.length;i++){
			if(this.questions[i].id == idQuestion){
				return this.questions[i];
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
	removeReply(idReply){
		for(let i=0; i<this.replies.length;i++){
			if(this.replies[i].id == idReply){
				this.replies.splice(i,1);
			}
		}
	}

	getReplyById(idReply){
		for(let i=0; i<this.replies.length;i++){
			if(this.replies[i].id == idReply){
				return this.replies[i];
			}
		}
	}


}