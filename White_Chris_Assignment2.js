alert("JavaScript works!");




//variables
var myName = "Chris";
var barberShopNames = [ "Super Cuts","Great Cuts","Express Hair"];
var hairCutPrices = [18,16,14];
var reviews = ["good","O.K.","Great"]; 
var reviewSite = "Angie's List";
var money = 20;
var startStory = function () {
	console.log(myName,"needs a hair cut but, he is new to the area 				         and is unsure where to go.");
	console.log("After looking around",myName,"has come to the 	         conclusion that there is three different places he can go         for a haircut",barberShopNames,".");
	console.log("Before deciding which place to go for a hair cut,he checked for reviews on",reviewSite,"."); 
};
var getTipAmount = function () {
	var moneyToSpend = 20;
	var price = 14;
	var tipAmount = moneyToSpend - price;
	console.log("His haircut turned out great and the price was awesome, becuase of that he was able to give a tip of", tipAmount,"dollars.");
};

startStory();
	
	for (var i=0; i < 3; i++) {
		console.log(barberShopNames[i],"costs", hairCutPrices[i],"        dollars and had a", reviews[i],  "review.");
	};
	
	console.log("It appeared that",barberShopNames[2],"had both the best reviews and price so",myName,"thought he would give",barberShopNames[2],"a try.");
	
getTipAmount();
	
	
