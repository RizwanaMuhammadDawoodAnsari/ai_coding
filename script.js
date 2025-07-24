// Function to calculate age and show the day of the week the user was born
function calculateAge() {
    let dob = document.getElementById('dob').value;
    if (dob === '') {
        alert("Please select your date of birth.");
        return;
    }

    let dobDate = new Date(dob);
    let currentDate = new Date();

    let ageYears = currentDate.getFullYear() - dobDate.getFullYear();
    let ageMonths = currentDate.getMonth() - dobDate.getMonth();
    let ageDays = currentDate.getDate() - dobDate.getDate();

    // Adjust if days or months are negative
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Get the day of the week when the user was born
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let birthDay = daysOfWeek[dobDate.getDay()];

    document.getElementById('result').innerHTML = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old. <br> You were born on a ${birthDay}. <br> Current Date: ${currentDate.toDateString()}`;
}

// Function to clear the form and result
function clearForm() {
    document.getElementById('dob').value = '';
    document.getElementById('result').innerHTML = '';
}

// Birthday Alarm Function
function setBirthdayAlarm() {
    const dobValue = document.getElementById('dob').value;
    if (!dobValue) {
        alert("Please select your Date of Birth to set an alarm.");
        return;
    }

    const dob = new Date(dobValue);
    const today = new Date();
    
    const dobDay = dob.getDate();
    const dobMonth = dob.getMonth(); // 0-based

    const todayDay = today.getDate();
    const todayMonth = today.getMonth();

    if (dobDay === todayDay && dobMonth === todayMonth) {
        document.getElementById('birthdaySound').play();
        alert("🎉 Happy Birthday! 🎉");
    } else {
        alert("Birthday alarm set! We'll alert you when it's your birthday 🎂");
    }
}

// Allow Enter key to trigger calculation
document.getElementById('dob').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateAge();
    }
});
