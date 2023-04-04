const star = document.querySelectorAll(".fa-star")
star.forEach(element => {
    element.addEventListener("click", () => {
        element.style.color = "yellow"
        
    } )
});
const readMoreBtn = document.querySelector('.read-more-btn');
const hiddenText = document.querySelector('.hidden-text');
const parent = readMoreBtn.parent
console.log(parent);
readMoreBtn.addEventListener('click', () => {
        hiddenText.style.display = 'block';
        readMoreBtn.style.display = 'none';
      });

