const buttonMusic = document.getElementById('banner__button__music');
const background_sond = document.getElementById("background_sond");
const textButton = buttonMusic.firstElementChild;
const miStorage = window.localStorage;


buttonMusic.addEventListener("click", ()=>{
	
	if (/\ button__play\b/g.test(buttonMusic.className)){
		buttonMusic.classList.replace("button__play", "button__pause");
		background_sond.play()
		textButton.innerText = "Pause";
		//launchFullScreen(document.documentElement);
	}else{
		buttonMusic.classList.replace("button__pause","button__play");
		background_sond.pause();
		textButton.innerText = "Play";
	}
})


const parrafos = {
	"banner":{
		"eslogan":[
			`Encerrado en la pantalla... <br>
			Muy pronto :).`,
			`Encerrado en la pantalla... <br>
			Estamos trabajando en esto :).`,
			`Encerrado en la pantalla... <br>
			Vuelve pronto :).`,
			`ey... ya basta por favor <br>
			Espero que disfrutes el juego como ella disfruto jugar contigo :).`,
			
		],
		"alert":[
			`En este momento se esta desarrolladno Escape web, si buscas nuestra version anterior haz clic 
			<a href='https://www.luofluck.tech/scapeweb/' target='_BLANK'>aqui</a>.`,
			"ola",
			"Op's ayudame a testear, ¿si?",
			`¿ya no es seguiste en instagram?
			<a href='https://www.instagram.com/EscapeWeb_rev/' target='_BLANK'>EscapeWeb_rev</a>.`,
			`Buscar pistas no siempre es tan facil, a veces hay que hacer cosas que uno no espera`,
		]	
	}

}
/* ESLOGAN */
if(miStorage["sesion"] == undefined){
	localStorage.setItem('sesion', 0);
}else{
	miStorage["sesion"]++;
}
const eslogan = document.getElementById("eslogan");
const lengthEslogan = parrafos.banner.eslogan.length;
const msgEslogan = (lengthEslogan <= miStorage["sesion"]) ? miStorage["sesion"] = 0 : miStorage["sesion"];
eslogan.innerHTML = parrafos.banner.eslogan[msgEslogan];


/* ALERTAS */
const buttonAlert = document.getElementById('button__alert');
const contAlert = document.getElementById('cont__alert');
const msgAlert = contAlert.firstElementChild;
var alertNum = 0;
msgAlert.innerHTML = parrafos.banner.alert[alertNum];
alertVilite = true;
var lengthAlert = parrafos.banner.alert.length - 1;
buttonAlert.addEventListener("click", ()=>{
	if(alertVilite){
		alertVilite = false;
		contAlert.classList.add("main__alert--active");
		alertNum = (lengthAlert <= alertNum) ? alertNum = 0: alertNum += 1;
		console.log(alertNum)
		setTimeout(()=>{
			contAlert.classList.remove("main__alert--active");
			alertVilite = true;
			setTimeout(()=>{
				msgAlert.innerHTML = parrafos.banner.alert[alertNum];
			},200)
		}, 3000);
	}
})


function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}
 function cancelFullScreen() {
     if(document.cancelFullScreen) {
         document.cancelFullScreen();
     } else if(document.mozCancelFullScreen) {
         document.mozCancelFullScreen();
     } else if(document.webkitCancelFullScreen) {
         document.webkitCancelFullScreen();
     }
 }
