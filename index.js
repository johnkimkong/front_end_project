 
    // var buttons = document.querySelectorAll("button"); //selects all buttons. 

    // for(var i = 0; i < buttons.length; i ++) //for loop to add event listener to add buttons. 
    // {
    //     buttons[i].addEventListener("click", function()
    //     {
    //         alert("I got clicked");
    //     });   
    // }

    var numberOfDrumButtons = document.querySelectorAll(".drum").length; 

    for (var i = 0; i<numberOfDrumButtons; i++) 
    {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() 
        {
            {   
                var audio = new Audio('sounds/tom-1.mp3'); 
                audio.play();
            }
        });
    }

    
