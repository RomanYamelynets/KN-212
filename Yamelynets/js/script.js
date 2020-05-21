document.getElementById('submit').onclick = function(){
  let name = document.getElementById('text').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  if(/^[a-zA-Z]+$/.test(name) == false)
	{
    alert('В полі імя мають бути тільки англійські букви');
    return false;
  }

  else if(/^[a-zA-Z@.]+$/.test(email) == false || email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0)
	{
    alert('Неправильний Email');
    return false;
  }

  if(/^[a-zA-Z1-9]+$/.test(message) == false)
	{
    alert('Некоректно введено повідомлення');
    return false;
  }

}


function food__link() {
   const angle = 10;
   const card = document.querySelector(".food__link");
   card.addEventListener('mouseout', e => {
	  card.style.transform = `perspective(400px) rotateX(0deg) rotateY(0deg)`;
   });

   card.addEventListener('mousemove', e => {
      const w = card.clientWidth;
      const h = card.clientHeight;
      const y = (e.offsetX - w * 0.5) / w * angle;
      const x = (1 - (e.offsetY - h * 0.5)) / h * angle;
      card.style.transform = `perspective(400px) rotateX(${x}deg) rotateY(${y}deg)`;
  });
}

food__link();

function color()
{

}

function Click()
{
    alert("Нажаль, ще немає тренувань.В блищий час додамо тренування.");
}

var counter = 0;
function Onmousecounter(element)
{
    counter++;
    alert("Ви пройшли це тренування " + counter + " рази");
}

function Onsubmitform()
{
    alert("Ваше повідомлення прийнято. Очікуйте відповіді");
}

var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "css/blocks/light.css";
    let darkTheme = "css/blocks/dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}
