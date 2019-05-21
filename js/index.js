$(function(){

    //监听
    $('body').delegate('.textarea',"propertychange input",function(){
        console.log($(this).val().length);
    });

    $('.tweetSend').click(function () { 
        alert('SEND');
    });

});