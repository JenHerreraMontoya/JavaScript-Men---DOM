"use strict";
function menuHorizontal(){
    //Creamos la variable donde se van a ir añadiendo los ul, li y a que vamos a crear.
    var nav = document.getElementById("menuHorizontal");

    var ul = document.createElement("ul"); //Creamos ul

    //Opción1 -- HOME del Menú

    var liOpcion1 = document.createElement("li"); //Creamos li de la opcion Home

    liOpcion1.setAttribute("class","active");
    
    var aOpcion1 = document.createElement("a"); //Creamos enlace de la opcion Home
    
    aOpcion1.setAttribute("href","#"); //Le asignamos un atributo href="#"

    var img1 = document.createElement("img");

    img1.setAttribute("src","imagenes/casa.png");

    img1.setAttribute("alt","icono casa");

    aOpcion1.appendChild(img1);

    aOpcion1.appendChild(document.createTextNode("HOME")); //Creamos y asignamos a la vez un nodo de texto

    liOpcion1.appendChild(aOpcion1); //adjuntamos el enlace al li

    ul.appendChild(liOpcion1); //adjuntamos el li al ul

    nav.appendChild(ul); //adjuntamos el nav al ul

    //Opción2 -- Menus del Menú
    
    var liOpcion2 = document.createElement("li"); //Creamos li de la opcion Home
    
    liOpcion2.setAttribute("class","dropdown");
    
    var aOpcion2 = document.createElement("a"); //Creamos enlace de la opcion Home
    
    aOpcion2.setAttribute("href","#"); //Le asignamos un atributo href="#"

    aOpcion2.setAttribute("class","dropbtn");
 
    var img2 = document.createElement("img");

    img2.setAttribute("src","imagenes/menu.png");

    img2.setAttribute("alt","icono menú");

    aOpcion2.appendChild(img2);

    aOpcion2.appendChild(document.createTextNode("MENUS")); //Creamos y asignamos a la vez un nodo de texto

    var img3 = document.createElement("img");
    
    img3.setAttribute("src","imagenes/anadir.png");

    img3.setAttribute("alt","icono signo más");

    img3.setAttribute("class","plus");

    aOpcion2.appendChild(img3);

    liOpcion2.appendChild(aOpcion2); //adjuntamos el enlace al li

    ul.appendChild(liOpcion2); //adjuntamos el li al ul

    //DropdownMenú
    var ulOpcion2 = document.createElement("ul");

    ulOpcion2.setAttribute("class","dropdown-content");
    
    liOpcion2.appendChild(ulOpcion2);

    var liOpcion2ul = document.createElement("li");

    ulOpcion2.appendChild(liOpcion2ul);

    var aOpcion2li = document.createElement("a");

    aOpcion2li.setAttribute("href","#");

    var img3Opcion2 = document.createElement("img");

    img3Opcion2.setAttribute("src","imagenes/anadir.png");

    img3Opcion2.setAttribute("alt","icono signo más");
    
    img3Opcion2.setAttribute("class","plusA");
    
    aOpcion2li.appendChild(document.createTextNode("Menu 1"));

    aOpcion2li.appendChild(img3Opcion2);

    liOpcion2ul.appendChild(aOpcion2li);

    ulOpcion2.appendChild(liOpcion2ul);

    var aOpcion3li = document.createElement("a");

    aOpcion3li.setAttribute("href","#");

    aOpcion3li.appendChild(document.createTextNode("Menu 2"));

    liOpcion2ul.appendChild(aOpcion3li);

    //Opción3 -- SETTINGS del Menú
    
    var liOpcion3 = document.createElement("li"); //Creamos li de la opcion Home

    var aOpcion3 = document.createElement("a"); //Creamos enlace de la opcion Home
      
    aOpcion3.setAttribute("href","#"); //Le asignamos un atributo href="#"

    var img4 = document.createElement("img");

    img4.setAttribute("src","imagenes/ajustes.png");

    img4.setAttribute("alt","icono ajustes");

    aOpcion3.appendChild(img4);
  
    aOpcion3.appendChild(document.createTextNode("SETTINGS")); //Creamos y asignamos a la vez un nodo de texto
  
    liOpcion3.appendChild(aOpcion3); //adjuntamos el enlace al li
  
    ul.appendChild(liOpcion3); //adjuntamos el li al ul

    //Opción4 -- CONTACT del Menú
    
    var liOpcion4 = document.createElement("li"); //Creamos li de la opcion Home

    var aOpcion4 = document.createElement("a"); //Creamos enlace de la opcion Home
      
    aOpcion4.setAttribute("href","#"); //Le asignamos un atributo href="#"

    var img5 = document.createElement("img");

    img5.setAttribute("src","imagenes/telefono.png");

    img5.setAttribute("alt","icono telefono");

    aOpcion4.appendChild(img5);
  
    aOpcion4.appendChild(document.createTextNode("CONTACT")); //Creamos y asignamos a la vez un nodo de texto
  
    liOpcion4.appendChild(aOpcion4); //adjuntamos el enlace al li
  
    ul.appendChild(liOpcion4); //adjuntamos el li al ul

}
window.onload = menuHorizontal;