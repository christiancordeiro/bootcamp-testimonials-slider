const btnNext = document.querySelector(".button-next")
const btnPrevious = document.querySelector(".button-previous")
const feedback = document.querySelector(".feedback")
const autor = document.querySelector(".autor")
const img = document.querySelector(".img")

const user = [
  {
    img: "./src/img/image-tanya.jpg",
    feedback: `"I've been interested in coding for a while but never taken the jump until now. I couldn't recommend this course enough. I'm nowin the job of my dreams and so excited about the future"`,
    autor: "Tanya Sinclair -",
    prof: "UX Engineer",
  },
  {
    img: "./src/img/image-john.jpg",
    feedback: `"If you want to lay best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer"`,
    autor: "John Tarkpor",
    prof: "Junior Front-end Developer",
  },
]

let slide = 0

const navigation = () => {
  if (slide > user.length - 1) {
    slide = 0
  }
  img.innerHTML = `
  <img src="${user[slide].img}" alt="" class="tanya-img" />
  `
  feedback.innerHTML = `<p>
              ${user[slide].feedback}
            </p>
            <h4 class="autor">${user[slide].autor} <span class="span">${user[slide].prof}</span></h4>`
  slide++
}

navigation()

btnNext.addEventListener("click", navigation)
btnPrevious.addEventListener("click", navigation)
