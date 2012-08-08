alert("JavaScript works!");




//variables
var myName = "Chris";
var barberShopNames = [ "Super Cuts","Great Cuts","Express Hair"];
var review = "good"; 
var reviewSites = ["Angie's List","Yelp"];
var money = 20;
var hairCutPrices = [18,16,14];
	console.log(myName,"needs a hair cut but, he is new to the area and is unsure where to go.");
	console.log("After looking around",myName,"has come to the conclusion that there is three different places he can go for a haircut",barberShopNames);
	
var getHairCut = Function(givenCash); {
	var pricePerHairCut = 16,
	var tipAmount = math.floor(givenCash - pricePerHairCut);
	if (givenCash < pricePerHairCut) {
		console.log("This Barbershop is to expensive.");
	var	tipamount = math.floor(givenCash - pricePerHairCut);			 		return tipAmount;
};

var gotHairCut = getHairCut(1);
console.log("Thank you for the awesome haircut here is a"+ tipAmount + "dollar tip.");

getHairCut(20);
gotHairCut(1);