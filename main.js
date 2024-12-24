
// Dashboard 
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.section'); 

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target'); 

            sections.forEach(section => {
                section.style.display = 'none';
            });

            const activeSection = document.getElementById(target);
            if (activeSection) {
                activeSection.style.display = 'block';
            }

            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    document.getElementById('dashboard').style.display = 'block'; 
});

const images = document.querySelectorAll('#imageGallery img');
images.forEach(img => {
    img.style.gridRowEnd = `span ${Math.ceil(img.naturalHeight / 10)}`;
});




document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("uploadForm");
    const imageGallery = document.getElementById("imageGallery");
    const imageUpload = document.getElementById("imageUpload");

    uploadForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const files = imageUpload.files;

        if (files.length === 0) {
            alert("Пожалуйста, выберите изображение для загрузки.");
            return;
        }

        for (const file of files) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const img = document.createElement("img");
                img.src = event.target.result;
                img.classList.add("uploaded-image");
                imageGallery.appendChild(img);
            };
            reader.readAsDataURL(file);
        }

        imageUpload.value = "";
    });
});




