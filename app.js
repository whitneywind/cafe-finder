const randomCafe = {
    randomCafeName: "",
    findCafe: function() {
        let cafeName = Math.random();
        if (cafeName < 0.20) {
            this.randomCafeName = "Blue Bottle";
        } else if (cafeName < 0.40) {
            this.randomCafeName = "Sachi.la";
        } else if (cafeName < 0.6) {
            this.randomCafeName = "Kindness and Mischief";
        } else if (cafeName < 0.8) {
            this.randomCafeName = "Goodboybob";
        } else {
            this.randomCafeName = "Bloom and Plume";
        }
    }
};

//const randomCafeButton = document.getElementById("search-btn");
//randomCafeButton.addEventListener('click', function() {
//    randomCafe.findCafe();
//    document.getElementById("cafeNameDisplay").innerHTML = randomCafe.randomCafeName;
//});



const downtownCafe = {
    downtownCafeName: "",
    findDowntownCafe: function() {
        let cafeName = Math.random();
        if (cafeName < 0.20) {
            this.downtownCafeName = "Stumptown";
        } else if (cafeName < 0.40) {
            this.downtownCafeName = "Verve";
        } else if (cafeName < 0.6) {
            this.downtownCafeName = "Tilt Coffeebar";
        } else if (cafeName < 0.8) {
            this.downtownCafeName = "Cafe Maru";
        } else {
            this.downtownCafeName = "Tea Master Matcha Cafe";
        }
    }
};

const koreatownCafe = {
    koreatownCafeName: "",
    findKoreatownCafe: function() {
        let cafeName = Math.random();
        if (cafeName < 0.20) {
            this.koreatownCafeName = "Mumu Bakery & Cafe";
        } else if (cafeName < 0.40) {
            this.koreatownCafeName = "Alchemist Coffee Project";
        } else if (cafeName < 0.6) {
            this.koreatownCafeName = "Alfred Coffee Koreatown";
        } else if (cafeName < 0.8) {
            this.koreatownCafeName = "I Coffee Bar";
        } else {
            this.koreatownCafeName = "Sharp Specialty Coffee";
        }
    }
};

const westlaCafe = {
    westlaCafeName: "",
    findWestlaCafe: function() {
        let cafeName = Math.random();
        if (cafeName < 0.20) {
            this.westlaCafeName = "Menotti's";
        } else if (cafeName < 0.40) {
            this.westlaCafeName = "Chitchat Coffee and Matcha";
        } else if (cafeName < 0.6) {
            this.westlaCafeName = "Matcha Village";
        } else if (cafeName <0.8) {
            this.westlaCafeName = "Federal Coffee";
        } else {
            this.westlaCafeName = "Coffee Connection";
        }
    }
}


const cafeButton = document.getElementById("search-btn");
cafeButton.addEventListener('click', function() {
    let neighborhoodChoice = document.getElementById("neighborhoods");
        if (neighborhoodChoice.value == "downtown") {
        downtownCafe.findDowntownCafe();
        document.getElementById("cafeNameDisplay").innerHTML = downtownCafe.downtownCafeName;
    } else if (neighborhoodChoice.value == "koreatown") {
        koreatownCafe.findKoreatownCafe();
        document.getElementById("cafeNameDisplay").innerHTML = koreatownCafe.koreatownCafeName;
    } else if (neighborhoodChoice.value == "westla") {
        westlaCafe.findWestlaCafe();
        document.getElementById("cafeNameDisplay").innerHTML = westlaCafe.westlaCafeName;
    }
    else {
    randomCafe.findCafe();
    document.getElementById("cafeNameDisplay").innerHTML = randomCafe.randomCafeName;
    }
});
