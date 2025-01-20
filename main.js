

const body= document.body
const div1= document.createElement("div")
const div2= document.createElement("div")
const img= document.createElement("img")
const h1= document.createElement("h1")
const p1= document.createElement("p")
const p2= document.createElement("p")
const div3= document.createElement("div")
const a1= document.createElement("a")
const a2= document.createElement("a")
const a3= document.createElement("a")
const a4= document.createElement("a")
const a5= document.createElement("a")

div1.classList.add("profile-card")
div2.classList.add("profile-card__image")
img.classList.add()
img.src="profile-pic.svg"
h1.classList.add("profile-card__name")
p1.classList.add("profile-card__location")
p2.classList.add("profile-card__bio")
div3.classList.add("profile-card__links")
a1.classList.add("profile-card__link")
a2.classList.add("profile-card__link")
a3.classList.add("profile-card__link")
a4.classList.add("profile-card__link")
a5.classList.add("profile-card__link")


body.append(div1)
div1.append(div2,h1,p1,p2,div3)
div2.append(img)
div3.append(a1,a2,a3,a4,a5)


h1.textContent ="Jessica Randall"
p1.textContent ="London, United Kingdom"
p2.textContent ="Front-end developer and avid reader."
a1.textContent ="GitHub"
a2.textContent ="Frontend Mentor"
a3.textContent ="LinkedI"
a4.textContent ="Twitter"
a5.textContent ="Instagram"


{/* <div class="profile-card">
<div class="profile-card__image">
  <img src="profile-pic.svg" alt="Profile Picture">
</div>
<h1 class="profile-card__name">Jessica Randall</h1>
<p class="profile-card__location">London, United Kingdom</p>
<p class="profile-card__bio">"Front-end developer and avid reader."</p>
<div class="profile-card__links">
  <a href="#" class="profile-card__link profile-card__link--primary">GitHub</a>
  <a href="#" class="profile-card__link">Frontend Mentor</a>
  <a href="#" class="profile-card__link">LinkedIn</a>
  <a href="#" class="profile-card__link">Twitter</a>
  <a href="#" class="profile-card__link">Instagram</a>
</div>
</div> */}
