const macbookContent = document.querySelector('.macbook__content')

window.addEventListener('scroll', () => {
  if (window.pageYOffset + window.innerHeight >= macbookContent.offsetTop + macbookContent.offsetHeight / 2) {
    macbookContent.classList.add('change')
  }
})
