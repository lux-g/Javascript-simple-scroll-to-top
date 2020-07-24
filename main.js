const topBtn = document.querySelector('.top');

topBtn.addEventListener('click', function () {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});
