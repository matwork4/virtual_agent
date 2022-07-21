
//id, idScenario, textEN, textFR, textJP, isFirst, isEnd, isUserResponse, nameVariable){

_listOfQuestions = [
	new Question(1,1, "Hello", "Bonjour", "こんにちは", true, false, false, "none"),
	new Question(2,1,"I am Mei Chan, your new virtual companion.","Je suis Mei Chan, votre nouveau compagnon virtuel.","私はあなたの新しい仮想コンパニオン、メイチャンです。",false,false,false,"none"),
	new Question(3,1,"What is your favorite fruit ?","Quel est votre fruit préféré ?","あなたの好きな果物は何 ？",false, false, true, "favoriteFruit"),
	new Question(4,1,"Me too I like %%favoriteFruit !","Moi aussi j'aime les %%favoriteFruit !","%%favoriteFruit ぼも大好き", false, false, false,"none"),
	new Question(5,1,"Do you prefer cherries or %%favoriteFruit ?","Préférez-vous les cerises ou les %%favoriteFruit ?","%%favoriteFruit とサクランボのどちらが好きですか？",false,false,true,"none"),
	new Question(6,1,"In summer, cherries are good !","En été, les cerises sont bonnes !","夏はさくらんぼが美味しい！",false,true,false,"none"),
]

//id, idScenario, idQuestion, idNextQuestion, analysis, dataType, dataValue

_listOfReplies = [
	new Reply(1,1,1,2,"*","*","*","none",0),
	new Reply(2,1,2,3,"*","*","*","none",0),
	new Reply(3,1,3,4,"*","*","*","none",0),
	new Reply(4,1,4,5,"*","*","*","none",0),
	new Reply(5,1,5,6,"cerise cherry","cerise","チェリー さくらん","memory",-1),
	new Reply(6,1,5,7,"%%favoriteFruit","%%favoriteFruit","%%favoriteFruit","memory",1),
	new Reply(7,1,5,5,"*","*","*","none",0),

]







