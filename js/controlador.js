

$(document).ready(function() {
    var i=0;
    for ( ; i <=9; i++) {
                $("#div-editor").html($("#div-editor").html()+'<div class="input-group col-lg-6">'+
                '<div class="input-group-prepend">'+
                  '<span class="input-group-text">00'+i+'</span>'+
                '</div>'+
                '<input type="text" id="'+i+'" aria-label="First name" class="form-control">'+
           ' </div>');
          }

    for ( ; i <=99; i++) {
            $("#div-editor").html($("#div-editor").html()+'<div class="input-group col-lg-6">'+
              '<div class="input-group-prepend">'+
                '<span class="input-group-text">0'+i+'</span>'+
              '</div>'+
              '<input type="text" id="'+i+'" aria-label="First name" class="form-control">'+
         ' </div>');
          }

     for ( ; i <=999; i++) {
                $("#div-editor").html($("#div-editor").html()+'<div class="input-group col-lg-6">'+
                  '<div class="input-group-prepend">'+
                    '<span class="input-group-text">'+i+'</span>'+
                  '</div>'+
                  '<input type="text" id="'+i+'" aria-label="First name" class="form-control">'+
             ' </div>');
            }

      

 $(document).on('change', 'input[type=file]', function(e) {
    // Obtenemos la ruta temporal mediante el evento
    var rutaTemp = URL.createObjectURL(e.target.files[0]);
    // abrimos el archivo desde la ruta temporal
    jQuery.get(rutaTemp,function(txt){

               var arregloDeSubCadena = txt.split("\n");
                for (var i = 0; i < arregloDeSubCadena.length; i++) {
                    $("#"+i).val(arregloDeSubCadena[i]);
                }

            });
  });


})



$("#reset").click(function(){

  window.location = "index.html";
})



                  


$("#btn-run").click(function() {
 

  if(!$("#0").val()){

    alert("tiene que haber un inicio.");
  }
  
  else{
         var i = 0;
        var vacio = false;
        var errores = false;
        var acumulador = 0;
        while(!(vacio||errores))
        {
          
         
          if(!isNaN($('#'+i).val())&& $('#'+i).val().length == 5 && $('#'+i).val())
          {
              $('#'+i).css("background-color", "#fff");
              var instruccion = $('#'+i).val();
              var operacion = instruccion.substring(0,2);

              var direccion = parseInt(instruccion.substring(2,6));
             // alert("operacion = "+operacion);
              //alert("direccion = "+direccion);
              
              switch(operacion)
              {
                  case '10': //alert("LEE");
                        var numero = prompt("introduce un valor");
                          $("#"+direccion).val(numero);
                          if($("input[type='radio'][name='rbt-depuracion']:checked").val()==1)
                              {
                                alert("Memoria: "+$("#"+i).val()+" Acumulador: "+acumulador);
                              }
                          i++;
                        break;
                  case '11': //alert("Escribe");
                         if($("input[type='radio'][name='rbt-depuracion']:checked").val()==1)
                              {
                                alert("Memoria: "+$("#"+i).val()+" Acumulador: "+acumulador);
                              }

                            $("#pantalla").val($('#'+direccion).val());
                            
                             i++;
                          break;
                  case '20': //alert("CARGA");
                              acumulador = parseInt($("#"+direccion).val());
                              if($("input[type='radio'][name='rbt-depuracion']:checked").val()==1)
                              {
                                alert("Memoria: "+$("#"+i).val()+" Acumulador: "+acumulador);
                              }
                               i++;
                        break;
                  case '21': //alert("ALMACENA");
                              $("#"+direccion).val(acumulador);
                               if($("input[type='radio'][name='rbt-depuracion']:checked").val()==1)
                                {
                                  alert("Memoria: "+$("#"+i).val()+" Acumulador: "+acumulador);
                                }
                              i++;
                          break;
                  case '30': //alert("SUMA");
                            acumulador += parseInt($("#"+direccion).val());
                             if($("input[type='radio'][name='rbt-depuracion']:checked").val()==1)
                                 {
                                  alert("Memoria: "+$("#"+i).val()+" Acumulador: "+acumulador);
                                }
                            i++;
                        break;
                  case '31': //alert("RESTA");
                            acumulador -= parseInt($("#"+direccion).val());
                             if($("input[type='radio'][name='rbt-depuracion']:checked").val()==1)
                              {
                                alert("Memoria: "+$("#"+i).val()+" Acumulador: "+acumulador);
                              }
                            i++;
                          break;
                          
                  case '32': //alert("DIVIDE");
                            acumulador = parseInt ($("#"+direccion).val())/acumulador;
                             if($("input[type='radio'][name='rbt-depuracion']:checked").val()==1)
                              {
                                alert("Memoria: "+$("#"+i).val()+" Acumulador: "+acumulador);
                              }
                            i++;
                        break;
                  case '33': //alert("MULTIPLICA");
                          acumulador = parseInt($("#"+direccion).val())*acumulador;
                           if($("input[type='radio'][name='rbt-depuracion']:checked").val()==1)
                              {
                                alert("Memoria: "+$("#"+i).val()+" Acumulador: "+acumulador);
                              }
                          i++;
                        break;
                          break;
                  case '40': //alert("BIFURCA");
                          i = direccion;
                           if($("input[type='radio'][name='rbt-depuracion']:checked").val()==1)
                              {
                                alert("Memoria: "+$("#"+i).val()+" Acumulador: "+acumulador);
                              }
                        break;
                  case '41': //alert("BIFURCANEG");
                          if(acumulador<0){
                            i = direccion;
                          }else{i++;}
                           
                           if($("input[type='radio'][name='rbt-depuracion']:checked").val()==1)
                              {
                                alert("Memoria: "+$("#"+i).val()+" Acumulador: "+acumulador);
                              }
                          break;
                  case '42': //alert("BIFURCACERO");
                        if(acumulador == 0){
                            i = direccion;
                          }else{i++;}

                          if($("input[type='radio'][name='rbt-depuracion']:checked").val()==1)
                              {
                                alert("Memoria: "+$("#"+i).val()+" Acumulador: "+acumulador);
                              }
                        break;
                  case '43': 
                          vacio= true;
                          break;
                  default :
                        alert("no hay operacion");
                         $('#'+i).css("background-color", "red");
                        errores=true;
                  break;

              }
          }
          else{
                 alert("no tiene 5 caracteres o introdujo un caracter no valido");
                  $('#'+i).css("background-color", "#E51515");
                  vacio=true;
              }
          
          
        }//fin while


  }
  
  
})