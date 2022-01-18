function calculate() {
    //Declare id
    var marks = parseInt(document.getElementById("mark").value);
    var marks2 = parseInt(document.getElementById("mark2").value);
    var marks3 = parseInt(document.getElementById("mark3").value);
    var avgmark = document.getElementById("averagemark").value;
    var total = document.getElementById("totalmark").value;

    if (confirm("Do you want to continue ?")) {
        alert("Calculate Success")
    }
    else {
        alert("Calculate Cancel");
        return false;
    }
    // Grade output from mark
    if (marks >= 80 && marks <= 100) {
        document.getElementById("grade").innerHTML = "A";
    }
    else if (marks >= 75 && marks < 80) {
        document.getElementById("grade").innerHTML = "A-";
    }
    else if (marks >= 70 && marks < 75) {
        document.getElementById("grade").innerHTML = "B+";
    }
    else if (marks >= 65 && marks < 70) {
        document.getElementById("grade").innerHTML = "B";
    }
    else if (marks >= 60 && marks < 65) {
        document.getElementById("grade").innerHTML = "B-";
    }
    else if (marks >= 55 && marks < 60) {
        document.getElementById("grade").innerHTML = "C+";
    }
    else if (marks >= 50 && marks < 55) {
        document.getElementById("grade").innerHTML = "C";
    }
    else if (marks >= 40 && marks < 50) {
        document.getElementById("grade").innerHTML = "D";
    }
    else if (marks >= 0 && marks < 40) {
        document.getElementById("grade").innerHTML = "F";
    }
    else {
        alert("Please complete your form");
    }
    // Grade output from mark
    if (marks2 >= 80 && marks2 <= 100) {
        document.getElementById("grade2").innerHTML = "A";
    }
    else if (marks2 >= 75 && marks2 < 80) {
        document.getElementById("grade2").innerHTML = "A-";
    }
    else if (marks2 >= 70 && marks2 < 75) {
        document.getElementById("grade2").innerHTML = "B+";
    }
    else if (marks2 >= 65 && marks2 < 70) {
        document.getElementById("grade2").innerHTML = "B";
    }
    else if (marks2 >= 60 && marks2 < 65) {
        document.getElementById("grade2").innerHTML = "B-";
    }
    else if (marks2 >= 55 && marks2 < 60) {
        document.getElementById("grade2").innerHTML = "C+";
    }
    else if (marks2 >= 50 && marks2 < 55) {
        document.getElementById("grade2").innerHTML = "C";
    }
    else if (marks2 >= 40 && marks2 < 50) {
        document.getElementById("grade2").innerHTML = "D";
    }
    else if (marks2 >= 0 && marks2 < 40) {
        document.getElementById("grade2").innerHTML = "F";
    }
    else {
        alert("Please complete your form");
    }
    // Grade output from mark
    if (marks3 >= 80 && marks3 <= 100) {
        document.getElementById("grade3").innerHTML = "A";
    }
    else if (marks3 >= 75 && marks3 < 80) {
        document.getElementById("grade3").innerHTML = "A-";
    }
    else if (marks3 >= 70 && marks3 < 75) {
        document.getElementById("grade3").innerHTML = "B+";
    }
    else if (marks3 >= 65 && marks3 < 70) {
        document.getElementById("grade3").innerHTML = "B";
    }
    else if (marks3 >= 60 && marks3 < 65) {
        document.getElementById("grade3").innerHTML = "B-";
    }
    else if (marks3 >= 55 && marks3 < 60) {
        document.getElementById("grade3").innerHTML = "C+";
    }
    else if (marks3 >= 50 && marks3 < 55) {
        document.getElementById("grade3").innerHTML = "C";
    }

    else if (marks3 >= 40 && marks3 < 50) {
        document.getElementById("grade3").innerHTML = "D";
    }
    else if (marks3 >= 0 && marks3 < 40) {
        document.getElementById("grade3").innerHTML = "F";
    }
    else {
        alert("Please complete your form");
    }
    var final1 = Math.round(marks + marks2 + marks3);
    var total = Math.round(final1 / 3);
    
    // Average Mark change to color to red if less than 40
    if (total <= 39) {
        document.getElementById("averagemark").style.color = 'red';
    }
    else if (total > 39) {
        document.getElementById("averagemark").style.color = 'black';
    }
    document.getElementById("averagemark").innerHTML = total;
    document.getElementById("totalmark").innerHTML = final1;
    return false;
}
