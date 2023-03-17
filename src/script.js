let movieID = 373571;
const apiKey = "6d326c6165f963f78b528d76e49f358c";
const imgURL = "https://image.tmdb.org/t/p/original";
const lang = "pt-BR";

async function loadingInfo() {
	let req = await fetch(
		`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=${lang}`
	);
	json = await req.json();
	let bp = imgURL + json.backdrop_path;
	let bgImg = (document.getElementById("body").style = `
            background: linear-gradient(180deg, #3a2f79 0%, rgba(6, 42, 96, 0) 200px), url("${bp}") no-repeat;
            background-position: center -5px;
	        background-size: cover;
	        background-attachment: fixed;
            `);
	let over = document.getElementById("overview")
	over.innerHTML = json.overview
}
loadingInfo();
