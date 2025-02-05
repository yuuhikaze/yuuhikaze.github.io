function loadDiagram(event) {
    // Prevent the default link action (opening in a new tab)
    event.preventDefault();

    // Create an image element to hold the SVG
    var imgElement = document.createElement('img');
    imgElement.src = event.target.href; // Get the link's href value (path to the SVG)
    imgElement.alt = "Diagram";

    // Select the secondary pane and append the image
    var secondaryPane = document.getElementById('secondary-pane');
    secondaryPane.innerHTML = ''; // Clear any previous content
    secondaryPane.appendChild(imgElement); // Add the new diagram to the secondary pane
}
