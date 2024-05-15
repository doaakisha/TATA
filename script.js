const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "hiiii sweetheart <3 happy happy happy birthday waaaahhhhh !!!! my baby turned 22 wo 7alati ya nasi waladi 7abebe galbi 7ayati rajli seed al rujal kibir sana kamla ଘ(੭◌ˊᵕˋ)੭* ੈ♡‧₊˚ rabana i5aleek lena w irzogak 3la niyatak always taking care of others before yourself always taking responsibility for everyone always shayil ham al nas gabl nafsak zata and wishing good on everyone no matter what, most peaceful wholesome human ever. i hope you always achieve your goals and is always happy and healthy surrounded by everyone you love. you mean so much to me wallahi i’m so glad that i’m part of your life watching you grow become an amazing man right before my eyes, everyday i fall harder and harder for you like it was the first time <3 how can i not when you’re so beautiful and handsome with eyes that drug you 3adeeeeel. everything about you is perfect no matter the things we go through together no matter the fights and disagreements and all the hard days mali ‘3erak inta wallahi and i can never find anyone better lw i went back in time back to the stone age l7aaaddi youm al deen and searched i still will never find somebody like you and i’m truly truly blessed <3 stay happy my love nothing is worth your frowns and tears but it would still be an honour for you to let me be able to hold you and comfort you, i’m sorry for everything i’ve done to you and all the times i’ve hurt you. you deserve nothing no matter what happens between us you deserve nothing but the best and i hope i will be able to give you more than that because that’s the bare minimum, for a king like you of course. happy birthday ya ras taji, al sana al jaya sawa na7tafil bek ya fa5ri <333";
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

