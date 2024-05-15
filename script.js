const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Hiiii sweetheart <3 Happy happy happy birthday waaaahhhhh !!!! My baby turned 22 wo 7alati ya nasi waladi 7abebe galbi 7ayati seed al rujal kibir sana kamla ଘ(੭◌ˊᵕˋ)੭* ੈ♡‧₊˚ Rabana i5aleek lena w irzogak 3la niyatak always taking care of others before yourself always taking responsibility for everyone always shayil ham al nas gabl nafsak zata and wishing good on everyone no matter what, most peaceful wholesome human ever. I hope you always achieve your goals and is always happy and healthy surrounded by everyone you love. You mean so much to me wallahi I’m so glad that I’m part of your life watching you grow become an amazing man right before my eyes, everyday I fall harder and harder for you like it was the first time <3 How can I not when you’re so beautiful and handsome with eyes that drug you 3adeeeeel. Everything about you is perfect no matter the things we go through together no matter the fights and disagreements and all the hard days mali ‘3erak inta wallahi and I can never find anyone better lw I went back in time back to the stone age l7aaaddi youm al deen and searched I still will never find somebody like you and I’m truly truly blessed <3 Stay happy my love nothing is worth your frowns and tears but it would still be an honour for you to let me be able to hold you and comfort you, I’m sorry for everything I’ve done to you and all the times I’ve hurt you. You deserve nothing no matter what happens between us you deserve nothing but the best and I hope I will be able to give you more than that because that’s the bare minimum, for a king like you of course. Happy birthday ya ras taji, al sana al jaya sawa na7tafil bek ya fa5ri <333";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
