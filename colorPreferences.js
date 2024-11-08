// Initialize an array with three colors
let colorPreferences = [];

// Ask the user to input their favorite colors
for (let i = 0; i < 3; i++) {
    let color = prompt("Enter a color you like:");
    colorPreferences.push(color);
    console.log("Updated color list:", colorPreferences);
}

// Allow the user to add more colors to the list
let addMore = true;
while (addMore) {
    let newColor = prompt("Enter another color you like (or type 'stop' to finish):");
    if (newColor.toLowerCase() === "stop") {
        addMore = false;
    } else {
        colorPreferences.push(newColor);
        console.log("Updated color list:", colorPreferences);
    }
}
