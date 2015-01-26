/*Separando por coma, podemos crear variables sin definir var en cada una*/
//$(document).ready(function() {
    var $form   = $('#formulario'),
        $titulo = $('#titulo'),
        $url    = $('#url'),
        $button = $('#mostrar-form'),
        $list   = $('#contenido'),
        $post   = $('.item').first();


    if (localStorage.getItem('autosave')) {
        $titulo.val(sessionStorage('titulo'));
        $url.val(sessionStorage('url'));
    }

    /*$titulo.on('keyUp', function()
        {
            sessionStorage.titulo = $titulo.val();
        }
    )*/

    var id = setInterval(function() {
        sessionStorage.titulo = $titulo.val();
        sessionStorage.url    = $url.val();
    }, 1000)



    function ocultarMostrarFormulario(e)
    {
        //La manera correcta de quitar la funcionalidad nativa o default de un elemento
        e.preventDefault();
        $form.slideToggle();
        $list.slideToggle();
        //deshabilitamos el evento default del link
        //return false;
    }

    function agregarPost(e)
    {
        e.preventDefault();
        var url    = $url.val(),
            titulo = $titulo.val(),
            $clone = $post.clone();

        $clone.find('.article-title a')
            .text(titulo)
            .attr('href', url);

        $clone.hide();

        $list.prepend($clone);

        ocultarMostrarFormulario();
        //impiamos formulario
        $titulo.val('');
        $url.val('');

        $clone.slideDown();
    }

    $button.on('click', ocultarMostrarFormulario);
    $form.on('submit', agregarPost);

//});

