$(document).ready(function(){

    $('#btn_enviar').click(function(){

        var errores = '';
        //Validar Nombre =============
        if( $('#nombre').val() == '') {

          errores += '<p><img src="pictures/x2.png" border="0" width="15" height="15"> Escriba un nombre de producto.</p>';
        $('#nombre').css("border-bottom-color", "#F14B4B")
      } else{
        $('#nombre').css("border-bottom-color", "#D1D1D1")
      }
        //Validar Categoria =============
        if( $('#categoria').val() == '') {

          errores += '<p><img src="pictures/x2.png" border="0" width="15" height="15"> Seleccione una categoria.</p>';
        $('#categoria').css("border-bottom-color", "#F14B4B")
      } else{
        $('#categoria').css("border-bottom-color", "#D1D1D1")
      }
        //Validar costo de inversion =============
        if( $('#costoinversion').val() == '') {

          errores += '<p><img src="pictures/x2.png" border="0" width="15" height="15"> Escriba un precio unitario.</p>';
        $('#costoinversion').css("border-bottom-color", "#F14B4B")
      } else{
        $('#costoinversion').css("border-bottom-color", "#D1D1D1")
      }
        //Validar precio al publico =============
        if( $('#pre_publico').val() == '') {

          errores += '<p><img src="pictures/x2.png" border="0" width="15" height="15"> Escriba un coste al publico.</p>';
        $('#pre_publico').css("border-bottom-color", "#F14B4B")
      } else{
        $('#pre_publico').css("border-bottom-color", "#D1D1D1")
      }
        //Validar precio al cliente =============
        if( $('#pre_cliente').val() == '') {

          errores += '<p><img src="pictures/x2.png" border="0" width="15" height="15"> Escriba un coste al cliente regular.</p>';
        $('#pre_cliente').css("border-bottom-color", "#F14B4B")
      } else{
        $('#pre_cliente').css("border-bottom-color", "#D1D1D1")
      }

        if ( errores == '' == false) {

          var mensaje_modal = '<div class="modal_wrap">' +
                              '<div class="mensaje_modal">' +
                              '<h3>Errores encontrador</h3>' +
                              errores +
                              '<span id="btn_closed">Cerrar</span>'+
                              '</div>'+
                              '</div>';

          $('body').append(mensaje_modal);

        }

        //Cerrando Modal ====================
        $('#btn_closed').click(function(){
          $('.modal_wrap').remove();
        });
    });
});
