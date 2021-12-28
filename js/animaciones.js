$(document).ready(function(){
    // --------------Animaciones con texto------------
    // reloadlinks();
    // $('#add_button')
    // .removeAttr('disabled') //Borrar atributos
    // .click(function(){
    //     let addlink = $('#add_link');
        
    //     $('#menu').append('<li><a href="'+addlink.val()+'"></a></li>');
    //     addlink.val('');
    //     reloadlinks();
    // });

    // function reloadlinks(){
    //     $('a').each(function(){
    //         let that = $(this);
    //         let link = that.attr('href');
    
    //         that.attr('target','_blank')
    //         that.text(link);
    //     });
    // }

    // Efectos
    var caja = $('#caja');
    $('#show').hide();
    $('#show').click(function(){
        $(this).hide();
        caja.slideDown('slow');
        $('#hide').show();
    });

    $('#hide').click(function(){
        $(this).hide();
        caja.show('slow');
        $('#show').show();
    });

    $('allinone').click(function(){
        caja.slideToggle('fast');
    });

    $('#animaciones').click(function(){
        caja.animate({marginLeft:'500px'}, 'slow');
    });

});


