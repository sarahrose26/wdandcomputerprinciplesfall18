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
    
//    $("#animate").click(function(){
//        $("div").animate({left: '25px'}, 2500)
//    });
    
    $("#animate").click(function(){
        $("div").animate({
            left: '250px',
            height: '200px',
            width: '200px', 
            opacity: '0.5'
        }, 2000)
    });
    
    //addClass
    //removeClass
    //toggleClass
    
//    $("#red").click(function(){
//        $("div").addClass("turn-red")  
//    });
//    
//    $("#blue").click(function(){
//        $("div").removeClass("turn-red")  
//    });
    
    $("#red").click(function(){
        $("div").toggleClass("turn-red")
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});