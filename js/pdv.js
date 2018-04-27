$(function(){

    var totalPagar = 0;

    $('#btn-codigo').focus();

    $('#btn-codigo').mask('0000');

    $('#btn-add-produto').click(function(){

        var codigo = $('#btn-codigo').val();

        $.getJSON('/model/carrega-produto.php', {id: codigo}, function(res){
            
            if(res == null) {
                // produto não existe
                $('#modal-alerta').modal('show');
                return ;
            }

            var li = '<li>'+ res.nome +' -- '+ res.marca +' -- <span class="produto-preco">R$ '+ res.preco +'</span></li>';
            $('#lista-produtos').append(li);

            totalPagar +=  parseFloat(res.preco);

            $('.total-pagar').html("R$ " + totalPagar);

            $('#btn-codigo').val('');

        }); //fim do getJSON

    }); //fim do click

    $('#btn-codigo').keydown(function(ev){
        
        if (ev.keyCode == 13){
            $('#btn-add-produto').click();
        }
        
    }); //fim keydown

    $('#modal-alerta').on('hidden.bs.modal', function(){
        $('#btn-codigo').focus();
        $('#btn-codigo').val('');
    }); //fim modal

    $('#btn-finalizar').click(function(){

        $('#modal-finalizar').modal('show');

    }); // fim click

    $(document).keydown(function(ev){
        if (ev.key == 'F4') {
            $('#btn-finalizar').click();
        }
    });

});