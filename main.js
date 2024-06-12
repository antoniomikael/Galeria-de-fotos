$(document).ready(function () {

    $('header button').click(() => {

        $('form').slideDown();
    })
    $('#btn-cancelar').click(() => {
        $('form').slideUp();
    })

    $('form').on('submit', (e) => {
        e.preventDefault();
        const enderecoImagemNova = $('#endereco-image').val();
        const novoitem = $('<li style="display: none"> </li>')
        $(`<img src ="${enderecoImagemNova}"/>`).appendTo(novoitem);
        $(`
        <div class="divLink">
        <a href "${enderecoImagemNova}" target="_blank" title="ver imagem em tamanho real">
            ver imagem em tamanho real
        </a>
        `).appendTo(novoitem)
        $(novoitem).appendTo('ul');
        $(novoitem).fadeIn(1000);   
        $('#endereco-image').val('');
    })
})