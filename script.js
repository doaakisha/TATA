const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "hiii sweetheart <3 happy happy happy birthday waaahhhh !!! my baby turned 22 wo 7alati ya nasi waladi 7abebe galbi 7ayati seed al rujal kibir sana kamla ૮₍ ´ ꒳ `₎ა °｡⋆ *. ̊♡ rabana i5aleek lena w irzogak 3la niyatak always taking care of others before yourself always taking responsibility for everyone always shayil ham al nas gabl nafsak zata and wishing good on everyone no matter what, most peaceful wholesome human ever. i hope you always achieve your goals and is always happy and healthy surrounded by everyone you love. ";
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
