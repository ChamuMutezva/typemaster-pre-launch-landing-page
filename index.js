//Intersection Observer api, 
const image__list = document.querySelectorAll(".image__item");
console.log(image__list)
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('slideInLeft');
        } else {
            entry.target.classList.remove('slideInLeft');
        }
    });    
});

image__list.forEach(heads => {
    observer.observe(heads);
});