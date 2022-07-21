

/* Récupère le message entré par l'utilisateur
*/
function getSubmit(){
	let element = document.getElementById("reply_field");
	let text = element.value;

	addMessageHistory(text,true);
	hideReply(true);

	userReply(text);
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
	var element = document.getElementById("bubble");
	if(b){
		element.style.visibility = "hidden";
	}else{
		element.style.visibility = "visible";
	}
}

/* True : Cache l'imput de l'utilisateur
*  False : re-Affiche
*/
function hideReply(b){
	var element = document.getElementById("reply");
	if(b){
		element.style.visibility = "hidden";
	}else{
		element.style.visibility = "visible";
	}
}

/* Efface le texte de l'input de réponse
*/
function clearReply(){
	document.getElementById("reply_field").value = "";
}

/* Affiche la bulle de Mei Chan avec du texte
*/
function displayBubble(text){
	var element = document.getElementById("textBubble");
	element.textContent = text;
	hideBubble(false);
	addMessageHistory(text,false);
}






/* link php : 
 * https://www.w3schools.com/php/
 */