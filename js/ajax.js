$(document).ready(function(){
    // var datos = $('#datos');
    // Load
    // datos.load('https://reqres.in/');

    // Get 
    // $.get('https://reqres.in/api/users', {page:1}, function(res){
    //     res.data.forEach((element, index) => {
    //         $('#datos').append('<p>'+element.first_name+'</p>');
    //     });
    // });

    // Post
    $('#form').submit(function(e){
        e.preventDefault();

        var user = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val(),
        }
        // console.log(user);

        // $.post($(this).attr('action'), user, function(res){
        //     console.log(res);
        // }).done(function(){
        //     alert('User add');
        // });

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: user,
            beforeSend: function(){
                console.log('Sending user');
            },
            success: function(res){
                console.log(res);
            },
            error: function(){
                console.log('A ocurrido un error');
            },
            timeout: 2000
        });

        return false;
    });

 
});