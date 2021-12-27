
// Mouse and hover

$(document).ready(function(){

    // MouseOver and MouseOut
    var caja = $('#caja');

    // caja.mouseover(function(){
    //     $(this).css('background', 'red')
    //             .css('cursosr', 'pointer');
    // });

    // caja.mouseout(function(){
    //     $(this).css('background', 'green')
    //             .css('cursosr', 'pointer');
    // });

    // Hover
    function cambiarojo(){
        $(this).css('background', 'red');
    }

    function cambiarverde(){
        $(this).css('background', 'green');
    }

    caja.hover(cambiarojo, cambiarverde);

    // Click and Doble Click
    caja.click(function(){
        $(this).css('background', 'blue');
    });

    caja.dblclick(function(){
        $(this).css('background', 'gold');
    });

    // Blur and focus
    // blur sirve para realizar una accion cuando no se deja de enfoncar
    var name = $('#name');
    var datos = $('#datos')

    name.focus(function(){
        $(this).css('border', '2px solid black');
    });

    name.blur(function(){
        $(this).css('border', '1px solid #ccc');

        datos.text($(this).val()).show();
    });

    // mousedown and mouseup
    datos.mousedown(()=>{
        $(this).css('border-color', 'gray')
    });

    datos.mouseup(()=>{
        $(this).css('border-color', 'black')
    });

});