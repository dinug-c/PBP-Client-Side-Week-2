function validateForm() {
    const name1 = document.getElementById("name").value;
    const name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        alert("Name must be filled out");
        return false;
    }
    if (name1 === name2) {
        alert("Name must be different");
        return false;
    }

    return true;
}

function calculateLovePercentage(name1, name2) {
    const name1Lower = name1.toLowerCase();
    const name2Lower = name2.toLowerCase();
    let commonCount = 0;

    for (const char of name1Lower) {
        if (name2Lower.includes(char)) {
            commonCount++;
        }
    }

    const nameLengthSum = name1Lower.length + name2Lower.length;
    const lovePercentage = (commonCount / nameLengthSum) * 100;
    return lovePercentage * 2;
}

function ValidateGender() {
    const CewekRadio = document.getElementById("CewekRadio");
    const CowokRadio = document.getElementById("CowokRadio");

    CewekRadio.addEventListener("change", function() {
        if (CewekRadio.checked) {
            CowokRadio.checked = false; 
        }
    });

    CowokRadio.addEventListener("change", function() {
        if (CowokRadio.checked) {
            CewekRadio .checked = false; 
        }
    });

}


function validateForm() {
    const name1 = document.getElementById("name").value;
    const name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        alert("Name must be filled out");
        return false;
    }
    if (name1 === name2) {
        alert("Name must be different");
        return false;
    }

    return true;
}

function calculateLovePercentage(name1, name2) {
    const name1Lower = name1.toLowerCase();
    const name2Lower = name2.toLowerCase();
    let commonCount = 0;

    for (const char of name1Lower) {
        if (name2Lower.includes(char)) {
            commonCount++;
        }
    }

    const nameLengthSum = name1Lower.length + name2Lower.length;
    const lovePercentage = (commonCount / nameLengthSum) * 100;
    return lovePercentage * 2;
}

const person1 = "randika";
const person2 = "randira";
const lovePercentage = calculateLovePercentage(person1, person2);
console.log(`Love Percentage between ${person1} and ${person2}: ${lovePercentage}%`);
