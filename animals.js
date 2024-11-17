// Get the elements
const changeStyleButton = document.getElementById('change-style-btn');
const resetStyleButton = document.getElementById('reset-style-btn');
const rhinoSection = document.getElementById('rhino-section');
const lionSection = document.getElementById('lion-section');
const elephantSection = document.getElementById('elephant-section');

// Store the original text style for reset (using the default colors for text)
const originalStyle = {
    rhino: { color: "white", fontWeight: "normal", fontStyle: "normal" },
    lion: { color: "white", fontWeight: "normal", fontStyle: "normal" },
    elephant: { color: "white", fontWeight: "normal", fontStyle: "normal" },
};

// Function to change the style of the text in the sections
function changeTextStyle() {
    rhinoSection.style.color = "#01ffff";
    rhinoSection.style.fontWeight = "bold";
    rhinoSection.style.fontStyle = "italic";

    lionSection.style.color = "#91ff00";
    lionSection.style.fontWeight = "bold";
    lionSection.style.fontStyle = "italic";

    elephantSection.style.color = "#ffa200";
    elephantSection.style.fontWeight = "bold";
    elephantSection.style.fontStyle = "italic";
}

// Function to reset the text style to original settings
function resetTextStyle() {
    rhinoSection.style.color = originalStyle.rhino.color;
    rhinoSection.style.fontWeight = originalStyle.rhino.fontWeight;
    rhinoSection.style.fontStyle = originalStyle.rhino.fontStyle;

    lionSection.style.color = originalStyle.lion.color;
    lionSection.style.fontWeight = originalStyle.lion.fontWeight;
    lionSection.style.fontStyle = originalStyle.lion.fontStyle;

    elephantSection.style.color = originalStyle.elephant.color;
    elephantSection.style.fontWeight = originalStyle.elephant.fontWeight;
    elephantSection.style.fontStyle = originalStyle.elephant.fontStyle;
}

// Event listeners for the buttons
changeStyleButton.addEventListener('click', changeTextStyle);
resetStyleButton.addEventListener('click', resetTextStyle);
