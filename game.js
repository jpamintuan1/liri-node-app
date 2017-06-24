var character = "force";
var profession = "stoner";
var gender = "male";
var age = 1000;
var strength = 100000;
var hitPoints = 1000;

function Features (character, profession, gender, age, strength,hitPoints){
	this.character = character;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitPoints = hitPoints; 
	
	this.printStats = function(){
		console.log(this.character);
		console.log(this.profession);
		console.log(this.gender);
		console.log(this.age);
		console.log(this.strength);
		console.log(this.hitPoints);
}
this.isAlive = function(){
 	if(this.hitPoints >0){
 		console.log(this.hitPoints);
 		console.log("character is a alive"); 	
 	}

	
}

this.attack = function(c){
	console.log('hit points before', c.hitPoints)
	c.hitPoints = c.hitPoints-this.strength
	console.log('hit points after', c.hitPoints)
}
this.levelUp = function(){
	this.age = this.age + 1
	this.strength= this.strength + 5
	this.hitPoints = this.hitPoints + 25
}	

}
var features1 = new Features ("Bat", "computer", "female", 1000,20,1000);
console.log("features1");
var features2 = new Features("Monkey","jock","male",100,10,18);
console.log("features2");
console.log(features1);
 
// }
// 	if (this.character === true){
// 			console.log(this.character);
// 		}
// features1.printStats()
features2.printStats()

//features1.attack(features2)
//features2.printStats()



features2.levelUp()
// features2.isAlive()
// features2.attack()
features2.printStats()