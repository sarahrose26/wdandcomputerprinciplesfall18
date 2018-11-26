//create the document ready function
//this ensures that the html document has fully loaded before jquery functions begin

$(document).ready(function(){
    console.log('the document is ready')
    
    //grab btn1
    $("#btn1").click(function(){
       $(".show-hide").fadeOut(2000) //fade out paragraph with show-hide class
    });
    //grab btn2
    $("#btn2").click(function(){
       $(".show-hide").fadeIn(2000) //fade in paragraph with show-hide class
    });
    
    
    //build two more buttons
    // attach them to new html elements on your page
    //when the user clicks the button, the element will slide up or down
    $("#btn3").click(function(){
        $("h1").slideUp()    
    });
    $("#btn4").click(function(){
        $("h1").slideDown()    
    });
    
    $("p").click(function(){
        $(this).hide();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
});