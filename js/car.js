console.log("hola mundo");
const img = document.getElementById('imagenLogoCarro')
img.src = "images/coche.png";
//let nuevoModeloDeCarro = document.getElementById('modeloCarro');



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
     let imagenCamry = document.getElementById("imagenCamry");
     imagenCamry.src = "images/toyota-camry-.png";
     //let caracteristicaCamry = document.getElementById("caracteristicasCamry");
     //caracteristicaCamry.innerHTML="Caracteristicas";
     //let p = document.getElementById("parrafoCaracteristicasCamry");
     //p.innerHTML ="Toyota Camry es un sedán confiable, amplio y comodísimo, con un tablero asimétrico. El espacio es abundante en cualquiera de los cinco asientos,en el Toyota Camry 2018 encontrarás un gran auto que mejora en todo respecto al modelo anterior";
     let imagenCorolla = document.getElementById("imagenCorolla");
     imagenCorolla.src="images/toyota-corolla-2018.png";
     let imagenTahoe = document.getElementById("imagenTahoe");
     imagenTahoe.src = "images/tahoe.png";
     let imagenCruze = document.getElementById("imagenCruze");
     imagenCruze.src = "images/chevrolet cruze.png";
     let imagenBlazer =document.getElementById("imagenBlazer");
     imagenBlazer.src = "images/blazer.png";
     let fabricantes = descripcionEmpresas(json[0]["make"]);
     let combustible =descripcionTipoCombustible(json[0]["fuel_type"]);
     let cilindrada = descripcionCilindros(json[0]["cylinders"]);
     let engranaje =descripcionTransmission(json[0]["transmission"]);
     let contenidoDescripcion = `Este Carro es ${fabricantes} ${combustible} ${cilindrada} ${engranaje}`;
     let descripcionCaracteristicasCarro = document.getElementById(`descripcionCaracteristicasCarro${i}`);
     descripcionCaracteristicasCarro.innerHTML = contenidoDescripcion;
     }
}
tiposDeCarro();

function descripcionEmpresas(make)
{
    return `es fabricado por ${make},`;
    
}


function descripcionTipoCombustible(fuel_type){
    let combustible = "";
    if(fuel_type == "gas"){
        combustible = "Nafta";
    }else if(fuel_type == "diesel"){
        combustible = "diesel";
    }else{
        combustible ="Electricidad";
    }
    return `utiliza ${fuel_type},`;
}

function descripcionCilindros(cylinders){
    return `tiene un motor de ${cylinders} cilindros`;

}

function descripcionTransmission(transmission){
    let cambios = "";
    if ( transmission == "a"){
        cambios = "Automatica";
    }else {
        cambios = "Manual";
    }
    return `tiene una transmision: ${cambios}`;
}




