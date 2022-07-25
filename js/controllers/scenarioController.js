
//id, idScenario, textEN, textFR, textJP, isFirst, isEnd, isUserResponse, nameVariable){

_listOfQuestions = [
	new Question(0,0,"Question 0 EN","Question 0 FR","Question 0 JP",true,true,false,"none"),
	new Question(1,1, "Hello", "Bonjour %%name ", "こんにちは", true, false, false, "none"),
	new Question(2,1,"I am Mei Chan, your new virtual companion.","Je suis Mei Chan, votre nouveau compagnon virtuel.","私はあなたの新しい仮想コンパニオン、メイチャンです。",false,false,false,"none"),
	new Question(3,1,"Please write your favorite fruit :","Pouvez-vous s'il vous plait écrire votre fruit favoris :","あなたの好きな果物を書いてください：",false, false, true, "favoriteFruit"),
	new Question(4,1,"Me too I like %%favoriteFruit !","Moi aussi j'aime les %%favoriteFruit !","%%favoriteFruit ぼも大好き", false, false, false,"none"),
	new Question(5,1,"Do you prefer cherries or %%favoriteFruit ?","Préférez-vous les cerises ou les %%favoriteFruit ?","%%favoriteFruit とサクランボのどちらが好きですか？",false,false,true,"none"),
	new Question(6,1,"In summer, cherries are good !","En été, les cerises sont bonnes !","夏はさくらんぼが美味しい！",false,true,false,"none"),
	new Question(7,1,"The %%favoriteFruit juice is very good !","Le jus de %%favoriteFruit est très bon !","%%favoriteFruit ジュースはとても美味しいです！",false,true,false,"none"),
	new Question(8,1,"I'll ask you the question again ...","Je vous repose la question ...","もう一度質問します",false,false,false,"none"),
	new Question(10,2,"How are you today %%name ?","Comment allez-vous aujourd'hui %%name ?","%%name お元気ですか？",true,false,true,"none"),
	new Question(11,2,"Why aren't you doing well? Please explain to me.","Pourquoi n’allez-vous pas bien ? Expliquez moi s'il vous plaît.","なんで体調が悪いの？ 説明してください。",false,false,true,"none"),
	new Question(12,2,"Yes, I understand.","Oui, je comprend.","はい、わかりました。",false,true,false,"none"),
	new Question(13,2,"I'm glad to hear it!","Je suis ravie de l’apprendre !","それを学んでうれしいです！",false,false,false,"none"),
	new Question(14,2,"What interesting things did you do today?","Qu'avez-vous fait d'interessant aujourd'hui ?","今日はどんな面白いことをしましたか？",false,false,true,"none"),
	new Question(15,2,"This is interesting","C'est intéressant","それは面白い",false,true,false,"none")
];

//id, idScenario, idQuestion, idNextQuestion, analysisEN, analysisFR, analysisJP, dataType, dataValue

_listOfReplies = [
	new Reply(0,0,0,0,"*","*","*","none",0),
	new Reply(1,1,1,2,"*","*","*","none",0),
	new Reply(2,1,2,3,"*","*","*","none",0),
	new Reply(3,1,3,4,"*","*","*","none",0),
	new Reply(4,1,4,5,"*","*","*","none",0),
	new Reply(5,1,5,6,"cerises cherry cherries","cerises","チェリー さくらん","mental",-1),
	new Reply(6,1,5,7,"%%favoriteFruit","%%favoriteFruit","%%favoriteFruit","mental",1),
	new Reply(7,1,5,8,"*","*","*","mental",-1),
	new Reply(8,1,8,5,"*","*","*","none",0),
	new Reply(10,2,10,11,"not don't bof","ne pas non bof","良くない いいえ 悲しい","physical",-1),
	new Reply(11,2,10,13,"*","*","*","physical",1),
	new Reply(12,2,11,12,"*","*","*","none",0),
	new Reply(13,2,13,14,"*","*","*","none",0),
	new Reply(14,2,14,15,"*","*","*","none",0),
];


var _variables = [
	new Variable("name","Bob"),
];


/* Ajoute les bonnes questions à un scénario S
*/
function setQuestionsByIdScenario(idScenario, S){
	for(var i=0;i<_listOfQuestions.length;i++){
		if(_listOfQuestions[i].idScenario == idScenario){
			S.addQuestion(_listOfQuestions[i]);
		}
	}
}

/* Ajoute les bonnes réponses à un scénario S
*/
function setRepliesByIdScenario(idScenario, S){
	for(var i=0;i<_listOfReplies.length;i++){
		if(_listOfReplies[i].idScenario == idScenario){
			S.addReply(_listOfReplies[i]);
		}
	}
}

/* Renvoie la première question d'un scénario
*/
function getFirstQuestion(S){
	for(var i=0;i<S.questions.length;i++){
		if(S.questions[i].isFirst){
			return S.questions[i];
		}
	}
	return null;
}

/* Sleep function
 * use : await sleep(<duration>);
*/
const sleep = ms => new Promise(r => setTimeout(r, ms));


/* Affiche la question suivante
*/
async function displayQuestion(q,S){
	setVariable("currentQuestion",q.id);

	if(lang == 1){
		var text = convertTextToVariable(q.textFR);
	}else if(lang == 2){
		var text = convertTextToVariable(q.textJP);
	}else{
		var text = convertTextToVariable(q.textEN);
	}
	
	displayBubble(text);
	await sleep(500 + text.length * 50);

	//Si c'est la dernière réplique
	if(q.isEnd){
		return 0;

	//Si il y a une réponse utilisateur
	}else if(q.isUserResponse){
		clearReply();
		hideReply(false);

	//Sinon Mei Chan continue
	}else{
		displayQuestion(getNextQuestion(q.id,S),S);
	}
}

/* Renvoie la question suivante lorsqu'il y en a qu'une seule.
*  Param : id pour q.id, S pour current scénario
*/
function getNextQuestion(id,S){
	for(var i=0;i<S.replies.length;i++){
		if(S.replies[i].idQuestion == id){
			for(var j=0;j<S.questions.length;j++){
				if(S.questions[j].id == S.replies[i].idNextQuestion){
					return S.questions[j];
				}
			}
		}
	}
	console.log("Error : no nextQuestion");
}


/* Retourne le contenue d'une variable en fonction
 * de son nom
*/
function getVariableByName(name){
	for(var i=0;i<_variables.length;i++){
		if(_variables[i].name == name){
			return _variables[i].value;
		}
	}
}

/* Ajoute une nouvelle variable ou la modifie
 * si elle existe déjà.
*/
function setVariable(name, value){
	var exist = false;

	//On cherche si la variable existe
	for(var i=0;i<_variables.length;i++){
		if(_variables[i].name == name){
			exist = true;
			_variables[i].value = value;
		}
	}

	//Sinon on la créer
	if(!exist){
		_variables.push(new Variable(name, value));
	}

}

/* Retire les %% d'une chaine de caractère
*/
function removePercent(text){
	return text.substring(2, text.length);
}

/* Remplace une chaine de caractères avec une variable
 * si nécessaire.
*/
function convertTextToVariable(text){
	textSplit = text.split(" ");
	//console.log(textSplit);
	for(var i=0;i<textSplit.length;i++){
		if(textSplit[i].includes("%%")){
			//console.log(textSplit[i]);
			textSplit[i] = getVariableByName(removePercent(textSplit[i]));
		}
	}
	return textSplit.join(" ").toString();
}

/* L'utilisateur répond
*/
function userReply(text){
	var q = currentScenario.getQuestionById(getVariableByName("currentQuestion"));
	
	//On ajoute la variable si nécessaire
	if(q.nameVariable != "none" && q.nameVariable.length > 0){
		setVariable(q.nameVariable,text);
	}
	var replies = getListOfReplies(q, currentScenario);
	//test = replies;

	//Si qu'une seule réponse
	if(replies.length == 1){
		var nextQ = getNextQuestion(q.id,currentScenario);
		displayQuestion(nextQ,currentScenario);

	//Sinon on analyse
	}else if(replies.length > 1){
		var idNextQ = findNextQuestion(text, replies);
		var nextQ = currentScenario.getQuestionById(idNextQ);
		displayQuestion(nextQ,currentScenario);
	}else{
		console.log("Error : no replies found");
	}

}


/* Renvoie la liste des réponses possibles à une question donnée
 * q est la currentquestion, S le currentScenario
*/
function getListOfReplies(q, S){
	var replies = [];
	for(var i=0;i<S.replies.length;i++){
		if(S.replies[i].idQuestion == q.id){
			replies.push(S.replies[i]);
		}
	}
	return replies;
}

/* Renvoie la question suivante à la réponse d'un utilisateur
*/
function findNextQuestion(text, replies){
	var keywords;
	//On analyse chaque réponse possible
	for(var i=0;i<replies.length;i++){
		if(lang == 1){
			keywords = convertTextToVariable(replies[i].analysisFR);
		}else if(lang == 2){
			keywords = convertTextToVariable(replies[i].analysisJP);
		}else{
			keywords = convertTextToVariable(replies[i].analysisEN);
		}

		//ici analyse syntaxique, comparer text & keywords
		if(syntaxAnalisys(text,keywords)){
			return replies[i].idNextQuestion;
		}
	}
	console.log("Erreur : aucune réponse valide (findNextQuestion)")
}

/* Compare 2 strings et renvoie true si ils ont des mots en commun
 * text : ce qui est écrit par l'utilisateur
 * keywords : les mots clefs des réponses 
*/
function syntaxAnalisys(text, keywords){

	//Si *, on accepte tout
	if(keywords.includes("*")){
		return true;
	}

	//Japonais spécial car c'est des caractères pas des mots
	if(lang==2){
		var cut;
		for(var i=0;i<text.length-3;i++){
			cut = text.substring(i, i+2); //peut etre + de caractères
			if(keywords.includes(cut)){
				return true;
			}
		}
		return false;
	}

	//On découpe les mots
	var textSplit = text.split(" ");

	//On regarde si ils sont inclu parmi les mots clefs
	for(var i=0;i<textSplit.length;i++){

		// /!\ Il faudrait un anti dictionnaire au lieu de >3
		if(keywords.includes(textSplit[i].toLowerCase()) && textSplit[i].length>2){
			return true;
		}
	}
	return false;
}



var test; //pour tester des trucs


const ID_SCENARIO = 2;
var currentScenario = new Scenario();

/* Variable langues 
 * 0 : EN
 * 1 : FR
 * 2 : JP
*/
var lang = 1;

setQuestionsByIdScenario(ID_SCENARIO,currentScenario);
setRepliesByIdScenario(ID_SCENARIO,currentScenario);

displayQuestion(getFirstQuestion(currentScenario),currentScenario);



