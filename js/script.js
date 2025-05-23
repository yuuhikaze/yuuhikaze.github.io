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

function loadIllustrations(event) {
    // Prevent default link behavior
    event.preventDefault();

    // List of illustration images
    const illustrations = [
        'static/images/illustrations/2025-02-10_21h54m40s.png',
        'static/images/illustrations/PXL_20240702_134439701.jpg',
        'static/images/illustrations/el-pedro-1.png',
        'static/images/illustrations/2022-12-25_10h31m04s.png',
        'static/images/illustrations/2023-02-08_08h13m25s.png',
        'static/images/illustrations/path3376.png',
        'static/images/illustrations/leaves.png',
        'static/images/illustrations/apple-cloth-1.png',
        'static/images/illustrations/mural-sketch.png',
    ];

    // Select the secondary pane and clear its previous content
    var secondaryPane = document.getElementById('secondary-pane');
    secondaryPane.innerHTML = '';

    // Create a gallery container
    var galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery-container');

    // Loop through the images and create image elements for each
    illustrations.forEach(function(imagePath) {
        var imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.alt = "Illustration";
        imgElement.classList.add('gallery-item');
        
        // Add the image to the gallery container
        galleryContainer.appendChild(imgElement);
    });

    // Append the gallery container to the secondary pane
    secondaryPane.appendChild(galleryContainer);
}

function createImageModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <img class="modal-image" src="" alt="Enlarged image">
        </div>
    `;
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.modal-close');
    const backdrop = modal.querySelector('.modal-backdrop');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal-open');
        document.body.style.overflow = 'auto';
    });
    
    backdrop.addEventListener('click', () => {
        modal.classList.remove('modal-open');
        document.body.style.overflow = 'auto';
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal-open')) {
            modal.classList.remove('modal-open');
            document.body.style.overflow = 'auto';
        }
    });

    return modal;
}

// Modify the loadIllustrations function to add click handlers:
function loadIllustrations(event) {
    event.preventDefault();
    
    const illustrations = [
        'static/images/illustrations/2025-02-10_21h54m40s.png',
        'static/images/illustrations/PXL_20240702_134439701.jpg',
        'static/images/illustrations/el-pedro-1.png',
        'static/images/illustrations/2022-12-25_10h31m04s.png',
        'static/images/illustrations/2023-02-08_08h13m25s.png',
        'static/images/illustrations/path3376.png',
        'static/images/illustrations/leaves.png',
        'static/images/illustrations/apple-cloth-1.png',
        'static/images/illustrations/mural-sketch.png',
    ];

    const secondaryPane = document.getElementById('secondary-pane');
    secondaryPane.innerHTML = '';

    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery-container');

    // Create modal only once
    const modal = createImageModal();
    const modalImg = modal.querySelector('.modal-image');

    illustrations.forEach(function(imagePath) {
        const imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.alt = "Illustration";
        imgElement.classList.add('gallery-item');
        
        // Add click handler for each image
        imgElement.addEventListener('click', () => {
            modalImg.src = imagePath;
            modal.classList.add('modal-open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
        
        galleryContainer.appendChild(imgElement);
    });

    secondaryPane.appendChild(galleryContainer);
}
