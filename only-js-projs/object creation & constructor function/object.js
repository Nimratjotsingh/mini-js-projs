// Creating constructor Function

function HouseKeeper(yearsOfExperience,name,cleaningRepertoire,clean){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function(){
        console.log(`Cleaning in progress by ${name}...`);
    }
}

var houseKeeper1 = new HouseKeeper(12,"Alice",["bathroom","lobby","bedroom"]);
houseKeeper1.clean();