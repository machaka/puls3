/*Separando por coma, podemos crear variables sin definir var en cada una*/
$(document).ready(function() {
    var $form   = $('#formulario'),
        $titulo = $('#titulo'),
        $url    = $('#url'),
        $button = $('#mostrar-form'),
        $list   = $('#contenido'),
        $post   = $('.item').first();

    function mostrarFormulario()
    {
        $form.slideToggle();
        //deshabilitamos el evento default del link
        return false;
    }

    function agregarPost()
    {
        var url    = $('#url').val(),
            titulo = $('#titulo').val(),
            $clone = $post.clone();

        $clone.find('.article-title a')
            .text(titulo)
            .attr('href', url);

        $clone.hide();

        $list.prepend($clone);

        $clone.fadeIn();

        return false;
    }

    $button.on('click', mostrarFormulario);
    $form.on('submit', agregarPost);

});

