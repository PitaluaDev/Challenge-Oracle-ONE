
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/



 	//Verificar solo minusculas
 	const  soloLetras = (e) => {
		       key = e.keyCode || e.which;
		       tecla = String.fromCharCode(key).toLowerCase();
		       letras = " abcdefghijklmnñopqrstuvwxyz";
		       especiales = "8-37-39-46";

		       tecla_especial = false;
		       for(var i in especiales){
		            if(key == especiales[i]){
		                tecla_especial = true;
		                break;
		            }
		        }

		        if(letras.indexOf(tecla)==-1 && !tecla_especial){
		            alert("Ingrese solo letras minusculas");
		            return false;
		        }


		        
		   }
 	

 	  //Funcion para encriptar y desencriptar
 	  const  encriptar = () =>  {
 	  	if (document.getElementById("input-encriptar").value == '') {
				 	 	 alert("Debe de Ingresar aluna cadena de texto para cifrar");
				 	 	 location.reload();						 				
						   
				 	 	 
		  }else{
		  	let textarea =document.getElementById("input-encriptar").value;

			  var textoCifrado = textarea.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
		  
			  document.querySelector("#text-copy").value = textoCifrado;
			  alert("Se a cifrado la siguiente información " +textarea );
		  }
 	  }

	   //Captura el ID del Boton 	 
 	 let encriptarBnt = document.getElementById("btnEncriptar");  	  
	  //Escuchador del evento y se le pasa la funcion copiarValor
   		encriptarBnt.addEventListener("click", encriptar, false);


	 

		//Funcion desencriptar 
		const  desencriptar = () => { 

			let textarea =document.getElementById("input-encriptar").value;
			var textoDeCifrado = textarea.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
		
		document.querySelector("#text-copy").value = textoDeCifrado; 		
		
		}    
		
		let desencriptarBnt = document.getElementById("btn-desencriptar");  	  
		//Escuchador del evento y se le pasa la funcio desencriptar
		 desencriptarBnt.addEventListener("click", desencriptar, false);


		//Copiar Valor 
 	  const copiarValor = () => {
		if (document.getElementById("text-copy").value == '') {
			alert("Debe de haber una cadena de texto para copiar");
			location.reload();			 				
			
			
              }else{

   			var ValorCampo = document.getElementById('text-copy');
		    //usamos API del portapapeles   navigator.clipboard
		    navigator.clipboard.writeText(ValorCampo.value)
		        .then(() => {
		        //Nos Devuelve una Promesa y ejecutamos las Funciones alertOk mostrarAlerta   

		        alert("Se ha copiado al porta papeles " + ValorCampo.value);	       

		    })
		        .catch(err => {
		        //en Caso de algun error mostramos un msj en Consola.
		        console.log('Error al Copiar', err);

		      })
			 
			 
			}; 
	   }
//Escuchador del evento y se le pasa la funcion copiarValor
		 	 var CopyBtn = document.getElementById("copiar");
		 	  CopyBtn.addEventListener("click", copiarValor, false);


		 	

 	  


		   	
