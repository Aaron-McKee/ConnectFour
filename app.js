$(document).ready(function() {
    let player = 1;
    let winner = 0;
    let colors = {};
    colors[-1] = "Yellow";
    colors[1] = "Red";
    let count = 0;


    $(".cell").each(function(){
        $(this).attr("id", count);
        $(this).attr("data-player", 0);
        count++;
    

        $(this).click(function(){
           if(isValid($(this).attr("id"))){
            $(this).css("background-color", colors[player] );
            $(this).attr("data-player", player);
                if(checkWin(player)){
                    alert(colors[player] +  ' WINS!');
                    winner = player;
                }
            player *= -1;
           
           }
        });
    });


    function isValid(n){
        let id = parseInt(n);
        if(winner !== 0) {
            return false;
        }
         if($("#" + id).attr("data-player") === "0") {
            if(id >= 35) {
                return true;
            }
            if($("#" + (id + 7)).attr("data-player") !== "0") {
                return true;
            }
        }
        return false;
    }
 
       $("#restart").click(function() {
        clearBoard();
       });

       function clearBoard() {
        $(".cell").each(function(){
            $(this).attr("data-player", 0);
            $(this).css("background-color", "white");

            winner = 0;
        });
       }


    function checkWin(p) {            //Checking rows
        let chain = 0;
        for(let i = 0; i < 42; i += 7) {
            for(let j = 0; j < 7; j++) {
                let cell = $("#" + (i + j));
                if(cell.attr("data-player") == p) {
                    chain++;
                }  
                   else {
                    chain = 0;
                 }
               if(chain >= 4) {
                return true;
               }
            }
            chain = 0;
        }

        chain = 0;                                   //Checking columns
        for(let i = 0; i < 7; i++) {
            for(let j = 0; j < 42; j += 7) {
                let cell = $('#' + (i + j));
             if(cell.attr("data-player") == p) {
                chain++;
             }
             else {
                chain = 0;
             }
        if(chain >= 4) {
            return true;
          }
        }
              chain = 0;
       }     
        
       let topLeft = 0;                             //checking diagonals 
        let topRight = topLeft + 3;

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 4; j++) {
                if($("#" + topLeft).attr("data-player") == p
                && $("#" + (topLeft + 8)).attr("data-player") == p
                && $("#" + (topLeft + 16)).attr("data-player") == p
                && $("#" + (topLeft + 24)).attr("data-player") == p) {
                    return true;
            }
                if($("#" + topRight).attr("data-player") == p
                && $("#" + (topRight + 6)).attr("data-player") == p
                && $("#" + (topRight+ 12)).attr("data-player") == p
                && $("#" + (topRight + 18)).attr("data-player") == p) {
                    return true;
            }

            topLeft++;
            topRight = topLeft + 3;
         }
         
         topLeft = i * 7 + 7;
         topRight = topLeft + 3;
        }
        return false;
    }
});

     
     
