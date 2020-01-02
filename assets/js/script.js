// Check specific items off when click
$('ul').on("click","li",function() {
   $(this).toggleClass("completed")
});

// Click on X to delete Task
$("ul").on("click","span",function(){
    $(this).parent().fadeOut(1000,function(){
      $(this).remove()  
    });
    event.stopPropagation()
});

$("input[type='text']").on("keypress", function(e){
    if(e.which === 13){
        // get new task from user input
        var toDoTask = $(this).val();
        $(this).val("")
        //create a new li and add to parent ul
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + toDoTask + "</li>")
    }
});

$("#toggle").click(function(){
    $("input[type='text']").fadeToggle()
})