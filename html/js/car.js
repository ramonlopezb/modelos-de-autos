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
     let imagenTahoe = document.getElementById("imagenTahoe");
     imagenTahoe.src = "images/tahoe.png";
     let parrafoTahoe = document.getElementById("parrafoTahoe");
     parrafoTahoe.innerHTML = "Cuenta con una capacidad sólida de remolque de hasta 8,600 libras , junto a un motor Chevrolet Tahoe V8 de 355 caballos de fuerza estándar y un V8 opcional de 420 hp";
     let imagenCruze = document.getElementById("imagenCruze");
     imagenCruze.src = "images/chevrolet cruze.png";
     let parrafoCruze = document.getElementById("parrafoCruze");
     parrafoCruze.innerHTML = "Toda la gama viene con seis airbags (frontales para el conductor y acompañante, laterales y de cortina), frenos a disco en las 4 ruedas, ABS con ESP, sistema electrónico de control de tracción, encendido automático de luces, anclajes ISOFIX, apoyacabezas, cinturones de seguridad de 3 puntos en todas las plazas y cámara de visión trasera.";
     let imagenBlazer =document.getElementById("imagenBlazer");
     imagenBlazer.src = "images/blazer.png";
     let parrafoBlazer = document.getElementById("parrafoBlazer");
     parrafoBlazer.innerHTML = "La Chevrolet S-10 es una serie de camionetas tipo pickup, fabricadas por la firma estadounidense General Motors, para su marca Chevrolet y la división GMC (la versión de GMC era conocida como S-15 y más tarde fue renombrada como GMC Sonoma";

     }
}
tiposDeCarro();

