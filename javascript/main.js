/* ----- MENU */
const toggleMenuButtons = document.querySelectorAll('.menu-icon')
const menuLinks = document.querySelectorAll('#menu li a')
const menu = document.querySelector('#menu')

const toggleMenu = () => {
  menu.classList.toggle('active')
  document.querySelector('#open-menu').classList.toggle('active')
  document.querySelector('#close-menu').classList.toggle('active')
}

toggleMenuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleMenu()
  })
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active-link')) toggleMenu()
    menuLinks.forEach((link) => {
      link.classList.remove('active')
    })
    link.classList.add('active')
  })
})

window.addEventListener('scroll', () => {
  if (menu.classList.contains('active')) toggleMenu()
})

window.addEventListener('touchmove', () => {
  if (menu.classList.contains('active')) toggleMenu()
})

/* ------ DISABLE TOGGLE MENU ON DESKTOP */
const checkDesktop = () => {
  let touchTime = 0

  const enableLinks = () => {
    if (new Date() - touchTime < 500) return
    document.querySelectorAll('#menu li a').forEach((link) => {
      link.classList.add('active-link')
    })
  }

  const disableLinks = () => {
    document.querySelectorAll('#menu li a').forEach((link) => {
      link.classList.remove('active-link')
    })
  }

  const updateTouchTime = () => {
    touchTime = new Date()
  }

  document.addEventListener('touchstart', updateTouchTime, true)
  document.addEventListener('touchstart', disableLinks, true)
  document.addEventListener('mousemove', enableLinks, true)

  enableLinks()
}

checkDesktop()
