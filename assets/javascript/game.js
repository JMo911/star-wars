$(document).ready(function(){
//set initial states
var myCharacter="";
var characters = [
    {
        "data-name": "anakin",
        "data-healthpoints": 100,
        "data-attackpower": 10,
        "data-counterattackpower": 15,
        "data-position": 0
    },
    {
        "data-name": "darthmaul",
        "data-healthpoints": 100,
        "data-attackpower": 10,
        "data-counterattackpower": 15,
        "data-position": 1
    },
    {
        "data-name": "jarjarbinks",
        "data-healthpoints": 100,
        "data-attackpower": 10,
        "data-counterattackpower": 15,
        "data-position": 2
    },
    {
        "data-name": "obiwankenobi",
        "data-healthpoints": 100,
        "data-attackpower": 10,
        "data-counterattackpower": 15,
        "data-position": 3
    }
]

var imagesources=[
    "assets/images/AnakinSkywalker.jpg",
    "assets/images/DarthMaul.png",
    "assets/images/JarJarBinks.jpg",
    "assets/images/ObiWanKenobi.jpg"
]

var defender="";
var characterDiv;
var characterimg;
//Make sure all of my images have the associated character data

function renderCharacters(divLocation, characters){ 
for (i=0; i<characters.length; i++){
    characterDiv=$("<div>");
    characterDiv.attr(characters[i]);
    characterDiv.addClass("character");
    characterimg=$("<img>");
    characterimg.attr("src",imagesources[i]); 
    characterDiv.append(characterimg);
    $(divLocation).append(characterDiv);
    characterDiv.css({
        "height": "150px",
        "width": "150px"
    });
    characterimg.css({
        
        "width": "100px"
    });
    
    // $(".character").attr(characters[i]);
    // console.log(characters[i]);
}
}; renderCharacters(".character-selection", characters);

// $("#JarJar Binks").attr() = characters









//CHOOSE A CHARACTER BY CLICKING IMAGE

$(".character").click(function(){

    if(!myCharacter) {
        myCharacter = $(this).data("name");
        console.log(myCharacter);

        //mark my enemies and empty them from character selection pane
        $(".character").each(function(){ 
            if ($(this).data("name") != myCharacter){
                $(this).attr("data-enemy", "enemy");
                $(this).detach();
                $("#enemyselectionrow").append($(this));
            }
        });
    } else if (myCharacter) {
        defender = $(this).data("name");
        $(this).attr("data-defender", "defender");
        $("#defenderrow").append($(this));
        $("#enemyselectionrow").detach();
        console.log(defender);

        //mark my enemies and empty them from character selection pane
        // $(".character").each(function(){ 
        //     if ($(this).data("name") != myCharacter || $(this).data("name") != defender){
        //         $(this).detach();
        //     }
        // });
    }








}
















);





















}
);