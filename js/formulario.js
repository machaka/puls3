/*Separando por coma, podemos crear variables sin definir var en cada una*/
//$(document).ready(function() {
    var $form   = $('#formulario'),
        $titulo = $('#titulo'),
        $url    = $('#url'),
        $button = $('#mostrar-form'),
        $list   = $('#contenido'),
        $post   = $('.item').first();

    function ocultarMostrarFormulario()
    {
        $form.slideToggle();
        $list.slideToggle();
        //deshabilitamos el evento default del link
        return false;
    }

    function agregarPost()
    {
        var url    = $url.val(),
            titulo = $titulo.val(),
            $clone = $post.clone();

        $clone.find('.article-title a')
            .text(titulo)
            .attr('href', url);

        $clone.hide();

        $list.prepend($clone);

        ocultarMostrarFormulario();
        $clone.slideDown();


        return false;
    }

    $button.on('click', ocultarMostrarFormulario);
    $form.on('submit', agregarPost);

//});

