const watchBands = document.querySelector('.watches__bands')
const watchCases = document.querySelector('.watches__cases')

const watchTopControl = document.querySelector('.watches__control--top')
const watchRightControl = document.querySelector('.watches__control--right')
const watchBottomControl = document.querySelector('.watches__control--bottom')
const watchLeftControl = document.querySelector('.watches__control--left')

let axisY = 0
let axisX = 0

document.querySelectorAll('.watches__control, .cube__controls a').forEach(control => {
  control.addEventListener('click', e => {
    e.preventDefault()
  })
})

const hideControl = () => {
  if (axisY === -280) {
    watchTopControl.classList.add('hide')
  } else {
    watchTopControl.classList.remove('hide')
  }

  if (axisY === 280) {
    watchBottomControl.classList.add('hide')
  } else {
    watchBottomControl.classList.remove('hide')
  }

  if (axisX === 280) {
    watchRightControl.classList.add('hide')
  } else {
    watchRightControl.classList.remove('hide')
  }

  if (axisX === -280) {
    watchLeftControl.classList.add('hide')
  } else {
    watchLeftControl.classList.remove('hide')
  }
}

watchTopControl.addEventListener('click', () => {
  watchCases.style.marginTop = `${axisY -= 70}rem`
  hideControl()
})

watchBottomControl.addEventListener('click', () => {
  watchCases.style.marginTop = `${axisY += 70}rem`
  hideControl()
})

watchRightControl.addEventListener('click', () => {
  watchBands.style.marginRight = `${axisX += 70}rem`
  hideControl()
})

watchLeftControl.addEventListener('click', () => {
  watchBands.style.marginRight = `${axisX -= 70}rem`
  hideControl()
})
