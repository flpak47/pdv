$(function(){
    var totalPagar = 0;
    $('#btn-codigo').mask('0000');

    $('#btn-add-produto').click(function(){

        var codigo = $('#btn-codigo').val();
        $.getJSON('/model/carrega-produto.php', {id: codigo}, function(res){
            if (res == null){
                // produto não existe
                $('#modal-alerta').modal('show');
                return ;
            }

            $('#lista-produtos').append('<li>'+ res.nome +' -- '+ res.marca +'--' + '<span class="produto-preco">'+ res.preco +'</span></li>');
            
            totalPagar += parseFloat(res.preco);

            $('.total-pagar').html("R$ " + totalPagar);

            $('#btn-codigo').val('');

            $('#btn-codigo').keydown(function(ev){
                if (ev.keycode == 13){
                   $('#btn-add-produto').click();                
                  
                   
                }
            }); // fim do keydown


        }); //fim do getJSON

    }); //fim do click

});