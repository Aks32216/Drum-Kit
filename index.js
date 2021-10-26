let no_of_buttons=document.querySelectorAll(".drum");

for(let i=0;i<no_of_buttons.length;++i)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",()=>{
        let button=document.querySelectorAll("button")[i].innerText;
        sound(button);
        buttonAnimation(button);
    })
}

document.addEventListener("keydown",(event)=>{
    sound(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(key)
{
    let buttonAnimate=document.querySelector("."+key);
    buttonAnimate.classList.add("pressed");
    setTimeout(()=>{
        buttonAnimate.classList.remove("pressed");
    },100);
}


function sound(key)
{
    console.log(key);
    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            
            break;
        case "a":
            let kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
                
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
                    
            break;
        case "d":
            let tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
                    
            break;
        case "j":
            let tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
                    
            break;
        case "k":
            let tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
                    
            break;
        case "l":
            let tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
                
            break;
            
        default:
            break;
    }
}
