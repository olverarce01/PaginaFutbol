firebase.initializeApp({
    apiKey: 'AIzaSyC7KErVtON_zmPk9wK40pm4RIR1wIBSdZo',
    authDomain: 'chileanpremierleague-cf84c.firebaseapp.com',
    projectId: 'chileanpremierleague-cf84c'
  });
  var db = firebase.firestore();


  function obtenerNoticias(){

    db.collection("news").get().then((querySnapshot)=>{
        var contenedor=document.getElementById("contenedorCardsNoticias");
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
        var primerItem=document.createElement("div");
         querySnapshot.forEach((doc)=>{
                if(doc.id!="nro")
                {
                
                var divItem=document.createElement("div");
                divItem.classList.add("carousel-item");
                //divItem.classList.add("active");
                
                var aItem=document.createElement("a");
                aItem.href="noticia-plantilla.html";///
                var imgItem=document.createElement("img");
                imgItem.src=doc.data().imagen;
                imgItem.classList.add("rounded");
                imgItem.classList.add("mx-auto");
                imgItem.classList.add("d-block");
                imgItem.width="800";
                imgItem.height="500";
                imgItem.alt="...";

                var divCaption=document.createElement("div");
                divCaption.classList.add("carousel-caption");
                divCaption.classList.add("d-md-block");
                
                var h5Caption=document.createElement("h5");
                h5Caption.classList.add("texto-noticias");
                h5Caption.textContent=doc.data().titulo;

                var pCaption=document.createElement("p");
                pCaption.classList.add("texto-noticias");
                pCaption.textContent=doc.data().resumen;
                
                divCaption.appendChild(h5Caption);
                divCaption.appendChild(pCaption);

                aItem.appendChild(imgItem);

                divItem.appendChild(aItem);
                divItem.appendChild(divCaption);
                contenedor.appendChild(divItem);
                
                }
         })
                primerItem=contenedor.firstChild;
                primerItem.classList.add("active");

        });   
}
obtenerNoticias();