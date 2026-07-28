const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function generateAkanName(){

    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    let gender = document.getElementById("gender").value;

    // Validation

    if(isNaN(day) || isNaN(month) || isNaN(year)){
        alert("Please enter your complete birth date.");
        return;
    }

    if(day < 1 || day > 31){
        alert("Day must be between 1 and 31.");
        return;
    }

    if(month < 1 || month > 12){
        alert("Month must be between 1 and 12.");
        return;
    }

    if(gender === ""){
        alert("Please select your gender.");
        return;
    }

    // Century and Year

    let CC = Math.floor(year / 100);
    let YY = year % 100;

    // Formula provided

    let dayNumber = (
        (
            (CC / 4) -
            (2 * CC) -
            1 +
            ((5 * YY) / 4) +
            ((26 * (month + 1)) / 10) +
            day
        ) % 7
    );

    dayNumber = Math.floor(dayNumber);

    if(dayNumber < 0){
        dayNumber += 7;
    }

    let akanName;

    if(gender === "male"){
        akanName = maleNames[dayNumber];
    }else{
        akanName = femaleNames[dayNumber];
    }

    document.getElementById("result").innerHTML =
    `You were born on <strong>${days[dayNumber]}</strong>.<br>Your Akan name is <strong>${akanName}</strong>.`;

    // Clear form after submission

    document.getElementById("akanForm").reset();

}