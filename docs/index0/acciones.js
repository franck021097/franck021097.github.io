function preload(){
    ocultar();
    var i= document.getElementById("opciones").style.display="none";
    i= document.getElementById("preload").style.display="grid";

    
setTimeout(
function(){
    var i= document.getElementById("preload").style.backgroundImage= "url('')";
},3000);

setTimeout(
function(){
    var i= document.getElementById("preload-p");
    i.innerHTML="¡Hola web!"
},3000);

setTimeout(
function(){
    var i= document.getElementById("preload-p");
    i.innerHTML="Esto no es solo una pagina"
},6000);


setTimeout(
function(){
    var i= document.getElementById("preload-p");
    i.innerHTML="Es una experiencia";
},9000);

setTimeout(
function(){
    var i= document.getElementById("preload-p");
    i.innerHTML="";
},12000);

setTimeout(
function(){
    var im= document.getElementById("flecha");
    im.setAttribute("onclick","usuario()");
    im.setAttribute("src","../imagenes/Flecha.png");
},12000);

}

function usuario(){
    var i= document.getElementById("preload").style.display="none";
    i= document.getElementById("opciones").style.display="none";
    i= document.getElementById("header").style.display="grid";
    i= document.getElementById("presentacion").style.display="grid";
    i= document.getElementById("main").style.display="block";
    i= document.getElementById("footer").style.display="grid";
    var im= document.getElementById("flecha").style.display="none";
    var i= document.getElementById("prueba").style.display="grid";
}

function ocultar(){
    var i= document.getElementById("preload").style.display="none";
    i= document.getElementById("header").style.display="none";
    i= document.getElementById("presentacion").style.display="none";
    i= document.getElementById("main").style.display="none";
    i= document.getElementById("footer").style.display="none";
    i= document.getElementById("prueba").style.display="none";
    i= document.getElementById("opciones").style.display="grid";
}

function ver(ver){

var i= document.getElementById("prueba").style.display="grid";
    
var secciones=["experiencia", "objetivo","experiencia","interes","educacion","Información_personal","idiomas",
"aptitudes","proyectos"];

var imagenes=["1","2","3","4","5"];

var nombres_certificados=[
    "ipnFPC.jpeg","cvCarso.png","rCelTab.png","fpMiriada.png","ipMiX.png","pbPlatzi.png","ccbPlatzi.png","cfeyePlatzi.png","cdhtml-cssPlatzi.png","cphtml-cssPlatzi.png","cssiPlatzi.png","cetebPlatzi.png","tipPlatzi.png","cipPlatzi.png","ciba1psPlatzi.png","cpreworkPlatzi.png","crdmfPlatzi.png","cssSL.jpg","htmlSL.jpg","jsSL.jpg","c++SL.jpg","sqlSL.jpg","excel.jpg","word.png"];


let indice=[];

for(let i=0; i<imagenes.length; i++){
    indice[i] = Math.floor(Math.random()*(23));
}

console.log("los valores son: " +"\n"+indice[0]+"\n"+ indice[1] +"\n"+indice[2]);


for (let i=0; i<imagenes.length; i++) {
    var valor =document.getElementById(imagenes[i]);
    valor.setAttribute("src", "../imagenes/certificados/" + nombres_certificados[indice[i]]);
    
}


for(let i of secciones){
        if(ver!==i){
            var ocultar=document.getElementById(i).style.display="none";
        }else{
            var ocultar=document.getElementById(i).style.display="block";
        }
    }
}

