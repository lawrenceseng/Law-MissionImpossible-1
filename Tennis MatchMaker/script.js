document.getElementById('matchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const playerSkill = document.getElementById('playerSkill').value;
    const coachSpecialty = document.getElementById('coachSpecialty').value;
    const resultDiv = document.getElementById('result');

    if (playerSkill === coachSpecialty) {
        resultDiv.innerHTML = `<p>Match found! A coach who specializes in ${coachSpecialty} can help you.</p>`;
    } else {
        resultDiv.innerHTML = `<p>No match found. Consider looking for a coach with a matching specialty.</p>`;
    }
});
