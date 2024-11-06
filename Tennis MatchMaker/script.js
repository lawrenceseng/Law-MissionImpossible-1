ddocument.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let role = document.getElementById("role").value;
    
    // Simulate saving the profile to an array or database
    let profile = { name, location, role };
    localStorage.setItem("userProfile", JSON.stringify(profile));

    // Redirect to matches page (assuming matches.html)
    window.location.href = "matches.html";
});
