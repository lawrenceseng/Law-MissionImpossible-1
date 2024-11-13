// Function to show the coach profile
function showCoachProfile() {
    // Display the coach profile section
    const coachProfile = document.getElementById("coach-profile");
    coachProfile.classList.remove("hidden");
}

function displayMatchDetails() {
    var urlParams = new URLSearchParams(window.location.search);

    document.getElementById('player').innerText = "Name: "  + urlParams.get('player-name');
    document.getElementById('date').innerText = "Date: "  + urlParams.get('date');
    document.getElementById('time').innerText = "Time: "  + urlParams.get('time');
    document.getElementById('venue').innerText = "Venue: "  + urlParams.get('location');
}