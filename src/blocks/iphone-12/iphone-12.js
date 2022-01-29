const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement('div')

    div.style.backgroundImage = `url(img/iphone-12-bg-${i}.jpg)`

    if (i === 1) div.classList.add('change')

    document.querySelector('.iphone-12__slideshow').appendChild(div)
  }
}

slideshowDivs()

const divs = document.querySelectorAll('.iphone-12__slideshow div')

let counter = 0

const slideshow = () => {
  setInterval(() => {
    counter++

    const div = document.querySelector('.iphone-12__slideshow .change')

    div.classList.remove('change')

    if (counter < divs.length) {
      div.nextElementSibling.classList.add('change')
    } else {
      divs[0].classList.add('change')
      counter = 1
    }
  }, 10000);
}

slideshow()
