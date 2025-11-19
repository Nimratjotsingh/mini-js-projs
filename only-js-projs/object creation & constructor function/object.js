// Creating constructor Function

function HouseKeeper(yearsOfExperience,name,cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper(12,"Alice",["bathroom","lobby","bedroom"]);