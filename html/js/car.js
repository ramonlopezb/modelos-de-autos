console.log("hola mundo");
const img = document.getElementById('imagenLogoCarro')
img.src = "images/coche.png";
let nuevoModeloDeCarro = document.getElementById('modeloCarro');



let modelosDeCarros= ['camry','corolla','tahoe','cruze','blazer'];

async function fetchdata(model){
    let url = `https://api.api-ninjas.com/v1/cars?model=${model}&X-Api-Key=O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy`
    const res = await fetch(url); 
    const data = await res.json();
	console.log(data);
	return data;	
}
fetchdata();


async function tiposDeCarro ()
{
    for (i=0; i < modelosDeCarros.length; i++){
     let json = await fetchdata(modelosDeCarros[i]);
     console.log(json);
     let h1 = document.getElementById(`modeloCarro${i}`);
     h1.innerHTML= json[0]["model"];
     let ParrafoCamry = document.getElementById("parrafoCamry");
     ParrafoCamry.innerHTML = "Toyota Tacoma Camry 2018";
     let imagenCamry = document.getElementById("imagenCamry");
     imagenCamry.src = "images/toyota-camry-.png";
     let caracteristicaCamry = document.getElementById("caracteristicasCamry");
     caracteristicaCamry.innerHTML="Caracteristicas";
     let p = document.getElementById("parrafoCaracteristicasCamry");
     p.innerHTML ="Toyota Camry es un sedán confiable, amplio y comodísimo, con un tablero asimétrico. El espacio es abundante en cualquiera de los cinco asientos,en el Toyota Camry 2018 encontrarás un gran auto que mejora en todo respecto al modelo anterior";
     let imagenCorolla = document.getElementById("imagenCorolla");
     imagenCorolla.src="images/toyota-corolla-2018.png";
     let parrafoCorolla = document.getElementById("parrafoCorolla");
     parrafoCorolla.innerHTML = "Vehiculo familiar, motor 1.8 , aire acondicionado dual, vidrios automaticos";

    }
}
tiposDeCarro();

