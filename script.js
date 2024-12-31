function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    // Correct string interpolation using backticks (`) for template literals
    banner.style.background = `url("./images/${bg}")`;  // Use backticks for template literals
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach((content) => {
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add("active");
        }
    });
}
