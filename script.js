document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get input values
    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseFloat(document.getElementById('age').value);

    let calorieNeeds = 0;

    // Calculation based on gender
    if (gender === 'female') {
        const a = height * 3.10;
        const b = (weight * 9.25) + 447.6;
        const c = age * 4.33;
        calorieNeeds = a + b + c;
    } else {
        const a = height * 4.8;
        const b = (weight * 13.4) + 88.4;
        const c = age * 5.68;
        calorieNeeds = a + b + c;
    }

    // Display the result
    document.getElementById('calorieResult').textContent = calorieNeeds.toFixed(2);
});
