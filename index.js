function showDetails() {
    document.getElementById("details-section").style.display = "block";
    document.getElementById("show-button").style.display = "none"; // Hide the "Show Details" button
    document.getElementById("hide-button").style.display = "inline"; // Show the "Hide Details" button
}

// Function to hide the details section
function hideDetails() {
    document.getElementById("details-section").style.display = "none";
    document.getElementById("show-button").style.display = "inline"; // Show the "Show Details" button
    document.getElementById("hide-button").style.display = "none"; // Hide the "Hide Details" button
    // Hide the color picker after selecting a color
    document.getElementById('colorPicker').style.display = 'none';
    document.getElementById('color-label').style.display = 'none';
    document.getElementById('change-color-button').style.display = 'inline-block';
}

// Function to show the color picker when the button is clicked
function showColorPicker() {
    // Hide the "Change Background Color" button
    document.getElementById('change-color-button').style.display = 'none';
    
    // Show the color picker and label
    document.getElementById('colorPicker').style.display = 'inline-block';
    document.getElementById('color-label').style.display = 'inline-block';
}

// Function to update the background color of the details section based on user selection
function updateBackgroundColor() {
    var color = document.getElementById('colorPicker').value;
    document.getElementById('details-section').style.backgroundColor = color;
    
    // Hide the color picker after selecting a color
    document.getElementById('colorPicker').style.display = 'none';
    document.getElementById('color-label').style.display = 'none';
    
    // Show the "Change Background Color" button again
    document.getElementById('change-color-button').style.display = 'inline-block';
}
