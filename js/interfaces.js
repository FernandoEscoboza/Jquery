$(document).ready(function(){
    console.log('Hello');
    var element = $('.elemento');

    // Elemento por la pagina
    element.draggable();

    // Redimensionar
    element.resizable();

    // Seleccionar y ordenar elementos
    // $('.game').selectable();
    // $('.game').sortable();
    $('.game').sortable({
        update: function(event, ui){
            console.log('Ha cambiado la lista');
        }
    });

    // Drop
    $('#elemento-movido').draggable();
    // $('#area').droppable();
    $('#area').droppable({
        drop: function(event, ui){
            console.log('Has soltado algo dentro de el area');
        }
    });
    

});