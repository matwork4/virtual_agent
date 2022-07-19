

/* Récupère le message entré par l'utilisateur
*/
function getSubmit(){
	let element = document.getElementById("reply_field");
	let text = element.value;
	//console.log(text);
	addMessageHistory(text,true);
	hideReply(true);
}

/* Ajoute un message dans le chat history
 */
function addMessageHistory(text, isSentByMe){

	//On créer un nouvel élément p
	let element = document.createElement("p");
	element.innerHTML = text;
	if(isSentByMe){
		element.setAttribute("class","from-me");
	}else{
		element.setAttribute("class","from-them");
	}

	//On ajoute le message dans le DOM
	document.getElementById("imessage").appendChild(element);
}

/* True : Cache la bulle de dialogue de Mei Chan
*  False : re-Affiche
*/
function hideBubble(b){
	if(b){
		document.getElementById("bubble").style.visibility = "hidden";
	}else{
		document.getElementById("bubble").style.visibility = "visible";
	}
}

/* True : Cache l'imput de l'utilisateur
*  False : re-Affiche
*/
function hideReply(b){
	if(b){
		document.getElementById("reply").style.visibility = "hidden";
	}else{
		document.getElementById("reply").style.visibility = "visible";
	}
}






/* link php : 
 * https://www.w3schools.com/php/
 */