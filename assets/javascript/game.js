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
        "data-healthpoints": 180,
        "data-attackpower": 10,
        "data-counterattackpower": 15,
        "data-position": 1
    },
    {
        "data-name": "jarjarbinks",
        "data-healthpoints": 90,
        "data-attackpower": 10,
        "data-counterattackpower": 15,
        "data-position": 2
    },
    {
        "data-name": "obiwankenobi",
        "data-healthpoints": 120,
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
    characterDiv=$("<div>").html('<p>' + characters[i]["data-healthpoints"] + '</p>');
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
//START OF CHARACTER CLICK EVENT
$(".character").click(function(){

    if(!myCharacter) {
        myCharacter = characters[$(this).data("position")];
        //  console.log(myCharacter);

        //mark my enemies and empty them from character selection pane
        $(".character").each(function(){ 
            if (characters[$(this).data("position")] != myCharacter){
                $(this).attr("data-enemy", "enemy");
                $(this).detach();
                $("#enemyselectionrow").append($(this));
            }
        });
    } else if (myCharacter) {
        defender = characters[$(this).data("position")];
        $(this).attr("data-defender", "defender");
        $(this).addClass("defender");
        $("#defenderrow").append($(this));
        $("#enemyselectionrow").detach();
        // console.log(defender);
    }

}
);
//END OF CHARACTER CLICK EVENT

//START OF ATTACK BUTTON CLICK EVENT    
$("#attackbutton").click(function(){
    // console.log(myCharacter);
    // console.log(defender);
    //mycharacter attacks defender (their health decreases by the amount of my attack power)
    
    
    defender["data-healthpoints"] = defender["data-healthpoints"]-myCharacter["data-attackpower"];
    $(".defender"["data-healthpoints"]).text(defender["data-healthpoints"]);

    renderCharacters("#defenderrow", defender);
$(".defender > p:eq(0)").text(defender["data-healthpoints"]);

}
);
//END OF ATTACK BUTTON CLICK EVENT



















}
);