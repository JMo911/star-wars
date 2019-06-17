$(document).ready(function(){
//set initial states
var myCharacter="";
var gameMessages=""
var characters = [
    {
        "data-name": "anakin",
        "data-healthpoints": 100,
        "data-attackpower": 15,
        "data-counterattackpower": 10,
        "data-position": 0
    },
    {
        "data-name": "darthmaul",
        "data-healthpoints": 140,
        "data-attackpower": 10,
        "data-counterattackpower": 25,
        "data-position": 1
    },
    {
        "data-name": "jarjarbinks",
        "data-healthpoints": 90,
        "data-attackpower": 5,
        "data-counterattackpower": 20,
        "data-position": 2
    },
    {
        "data-name": "obiwankenobi",
        "data-healthpoints": 120,
        "data-attackpower": 15,
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
var detachedEnemies;
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
        $(this).addClass("myCharacter");
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
        detachedEnemies = $("#enemyselectionrow > div").detach();
        // console.log(defender);
    }

}
);
//END OF CHARACTER CLICK EVENT

//START OF ATTACK BUTTON CLICK EVENT    
$("#attackbutton").click(function(){
    
    //mycharacter attacks defender (their health decreases by the amount of my attack power)
    if (defender["data-healthpoints"] <= 0){
        $("#enemyselectionrow").append(detachedEnemies);
        $("#defenderrow").empty();
        // $(".character").each(function(){ 
        //     if (characters[$(this).data("position")] != myCharacter && characters[$(this).data("defender")] != "defender"){
        //         $("#enemyselectionrow").append($(this));
                
        //     }
        // });
    }
    else if (myCharacter["data-healthpoints"] <= 0){
        gameMessages = "You lost!";
        // $("#gameMessagesDisplay").hmtl(gameMessages);
    }




    else if(defender["data-healthpoints"] > 0 && myCharacter["data-healthpoints"] > 0) {
        myCharacter["data-attackpower"] = Math.ceil(myCharacter["data-attackpower"]*1.5);
        defender["data-healthpoints"] = -myCharacter["data-attackpower"]+defender["data-healthpoints"];
        $(".defender"["data-healthpoints"]).text(defender["data-healthpoints"]);
        $(".defender > p:eq(0)").text(defender["data-healthpoints"]);
        myCharacter["data-healthpoints"] = -defender["data-counterattackpower"]+myCharacter["data-healthpoints"];
        $(".myCharacer"["data-healthpoints"]).text(myCharacter["data-healthpoints"]);
        $(".myCharacter > p:eq(0)").text(myCharacter["data-healthpoints"]);
    }   


}
);
//END OF ATTACK BUTTON CLICK EVENT



















}
);