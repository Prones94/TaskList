// Check specific items off when click
$('li').click(function() {
   $(this).toggleClass("completed")
})

// Click on X to delete Task
$("span").click(function(){
    $(this).parent().fadeOut(1000,function(){
      $(this).remove()  
    });
    event.stopPropagation()
})