$(function(){

    $('#preco').mask('000.00', {reverse: true});

    listarProdutos();


    $("#salvar-produto").click(function(){
        
        
        if ($('#nome').val().length <= 0){
            $('#nome').addClass('is-invalid');
            return false;
        }
    });

    $("#salvar-produto").click(function(){
        
        
        if ($('#marca').val().length == 0){
            $('#marca').addClass('is-invalid');
            return false;
        }  

    });      

    $("#salvar-produto").click(function(){
        
        
        if ($('#preco').val().length <= 0){
            $('#preco').addClass('is-invalid');
            return false;
        }

        var dados = {
            produto: $('#nome').val(),
            marca: $('#marca').val(),
            categoria: $('#categoria').val(),
            preco: $('#preco').val(),
            sexo: $('#sexo').val()
        };
        
        $.post('/model/insere-produto.php', dados, function(info){
            if (info == "ok") {
                $("#novo-produto").modal("hide");
                listarProdutos();
            } else {
                $('#msg-erro').html(info);
                $('#msg-erro').show();
            }
        });
        
}); // fim do click

    $('#lista-produtos tbody').on('click', '.btn-deletar-produto', function(){
        var codigo = $(this).parent().parent().attr('codigo');
        $('#btn-del').attr('href','/model/deleta-produto.php?id=' + codigo);
        $('#deletar-produto').modal('show');
    });
});

function listarProdutos(){

    $.getJSON('/model/listar-produtos.php', function(dados){
        $('#lista-produtos tbody').empty();
        dados.forEach(function(el, id){      
           
            var tr = '<tr codigo=" '+ el.id +'">'
            + '<td>'+ el.id +'</td>'
            + '<td>'+ el.nome +'</td>'
            + '<td>'+ el.categoria +'</td>'
            + '<td>R$ '+ el.preco +'</td>'
            + '<td>'
            + '<button class="btn btn-primary" title="Editar"><i class="fas fa-edit"></i></button>'
            + '&nbsp'
            + '&nbsp'
            + '<button class="btn btn-danger btn-deletar-produto" title="Deletar"><i class="fas fa-minus-circle"></i></button>'
            + '</td>'
            + '</tr>';

            $('#lista-produtos tbody').append(tr);
            


        });// forEach


    });// getJSON
    }