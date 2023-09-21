const cover = document.querySelector('.cover-container')
const invitation = document.querySelector('.invitation-container')
const openInvitationBtn = document.getElementById('openInvitationBtn')
const navigation = document.querySelector('.navigation')
const footer = document.querySelector('.footer')
const music = document.querySelector('.music')
const audio = document.querySelector('audio');
const aboutDeveloper = document.querySelector('.about-developer')

// handle open-invitation button click
openInvitationBtn.onclick = () => {
  cover.style.display = 'none'
  invitation.style.display = 'flex'
  navigation.style.display = 'block'
  footer.style.display = 'flex'
  music.style.display = 'block'
  audio.volume = 0.2
  audio.play()
  aboutDeveloper.style.display = 'flex'
}

// handle hide navigation based on scroll
let prevScrollposition = window.scrollY
window.onscroll = () => {
  const currentScrollPosition = window.scrollY

  if (prevScrollposition > currentScrollPosition) {
    navigation.style.bottom = '0'
  } else {
    navigation.style.bottom = '-70px'
  }

  prevScrollposition = currentScrollPosition
}

// handle image slideshow at home section
// resource -> https://github.com/PiusLucky/Image-Slider
let slides = document.querySelectorAll('#all_slides .slide')
let currentSlide = 0

const goToSlide = (s) => {
  slides[currentSlide].className = 'slide'
  
  currentSlide = (s + slides.length) % slides.length

  slides[currentSlide].className = 'slide active'
}

const nextSlide = () => {
  goToSlide(currentSlide + 1)
}

let slideInterval = setInterval(nextSlide, 2100)

const playSlideshow = () => {
  slideInterval = setInterval(nextSlide, 2100)
}

playSlideshow()

// handle show couple based on scroll
// resource -> https://codepen.io/alvarotrigo/pen/PoKamZy
const groom = document.querySelector('.couple .groom')
const bride = document.querySelector('.couple .bride')

function showCouple() {
  const windowHeight = window.innerHeight
  const elementGroomTop = groom.getBoundingClientRect().top
  const elementBrideTop = bride.getBoundingClientRect().top
  const elementVisible = 150;

  if ((elementGroomTop || elementBrideTop) < windowHeight - elementVisible) {
    groom.classList.add('active')
    bride.classList.add('active')
  }
}

window.addEventListener('scroll', showCouple)


// create new element with javascript dom manipulation
const wishesList = [
  {
    name: 'fulan',
    wishes: 'selamat ya..'
  },
  {
    name: 'fulanah',
    wishes: 'selmat kak.. semoga jadi keluarga yang samawa..'
  },
  {
    name: 'fulan',
    wishes: 'congrats ya.. semoga langgeng dan punya anak yang solih solihah. Jadi keluarga yang sakinah mawaddah warohmah'
  },
  {
    name: 'fulanah',
    wishes: 'selmat kak.. semoga jadi keluarga yang samawa..'
  },
  {
    name: 'fulan',
    wishes: 'selamat ya..'
  },
  {
    name: 'fulanah',
    wishes: 'selmat kak.. semoga jadi keluarga yang samawa..'
  }
]

const wishesListElmt = document.querySelector('.wishes-list')

wishesList.map(({ name, wishes }) => {
  const wishesItemElmt = document.createElement('section')
  wishesItemElmt.classList.add('wishes-item')
  wishesItemElmt.innerHTML = `
    <div class='wishes-item-avatar'>
      <i class="fas fa-user"></i>
    </div>
    <div class='wishes-item-content'>
      <h6>${name}</h6>
      <p>${wishes}</p>
    </div>
  `

  wishesListElmt.append(wishesItemElmt)
})

// handle playing music
// resource -> https://codepen.io/freeCodeCamp/pen/MWyBapv
const musicBtn = document.querySelector('.music button');
const musicIcon = document.querySelector('.music button i');

musicBtn.onclick = () => {
  if (audio.paused) {
    audio.volume = 0.2
    audio.play()
    musicBtn.classList.add('music-playing')
    musicIcon.classList.remove('fa-play')
    musicIcon.classList.add('fa-pause')
  } else {
    audio.pause()
    musicBtn.classList.remove('music-playing')
    musicIcon.classList.remove('fa-pause')
    musicIcon.classList.add('fa-play')
  }
}

// handle show about developer
const aboutDeveloperAvatar = document.querySelector('.about-developer img')
const aboutDeveloperText = document.querySelector('.about-developer article')
const closeBtn = document.querySelector('.about-developer button')

aboutDeveloperAvatar.onclick = () => {
  aboutDeveloperAvatar.style.display = 'none'
  closeBtn.style.display = 'block'
  aboutDeveloperText.style.display = 'block'
}

closeBtn.onclick = () => {
  aboutDeveloperAvatar.style.display = 'block'
  aboutDeveloperText.style.display = 'none'
  closeBtn.style.display = 'none'
}