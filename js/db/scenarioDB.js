
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
	new Question(15,2,"This is interesting","C'est intéressant","それは面白い",false,true,false,"none"),

new Question(30,3,"","Bonjour ! ","",true,false,false,"31"),
new Question(31,3,"","Ceci est un test. ça marche ? ","",false,false,true,"none"),
new Question(32,3,"","Alors, quelle est ta couleur préférée ? ","",false,false,true,"color"),
new Question(33,3,"","Dommage ...","",false,false,false,"32"),
new Question(34,3,"","Je repose la question.","",false,false,false,"31"),
new Question(35,3,"","Moi aussi j'aime le %%color !","",false,true,false,"none"),
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

new Reply(30,3,31,32,"*","oui, bien sur, effet, super","*","none",0),
new Reply(31,3,31,33,"*","non, bof, pas, ne, mal","*","none",0),
new Reply(32,3,31,34,"*","*","*","none",0),
new Reply(33,3,32,35,"*","*","*","none",0),
new Reply(34,3,30,31,"*","*","*","none",0),
new Reply(35,3,33,32,"*","*","*","none",0),
new Reply(36,3,34,31,"*","*","*","none",0),
];


var _variables = [
	new Variable("name","Tom"),
];