$("#Start-Button").click(function(){
    


    var computerNumber;
    var yourTotal = 0;
    var Arnold1;
    var Arnold2;
    var Arnold3;
    var Arnold4;
    var wins = 0;
    var losses = 0;
 
    

    var getNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    
    
    
    function ArnoldPress() {
    
    $("#computerNumber").html(function(){
        computerNumber = getNumber(19, 120);
        console.log(computerNumber)
        return(computerNumber);
    });
    
    
    Arnold1 = getNumber(1, 12);
    Arnold2 = getNumber(1, 12);
    Arnold3 = getNumber(1, 12);
    Arnold4 = getNumber(1, 12);
    console.log(Arnold1,Arnold2,Arnold3,Arnold4)
    
    
    
   
    yourTotal = 0;
    $("yourTotal").html(yourTotal);
    // wins = 0;
    // $("#wins").html(wins);
    // losses = 0;
    // $("#losses").html(losses);
    
    };
    
    
    
    ArnoldPress();
    
    
    
    
    $("#Arnold-1").click(function(){
        yourTotal = Arnold1 + yourTotal;
        console.log(yourTotal);
        
        if (yourTotal < computerNumber) {
            $("#yourTotal").html(yourTotal);
            return(yourTotal);
        }
        else if (yourTotal > computerNumber) {
            $("#yourTotal").html(yourTotal);
            alert("TOO MUCH ARNOLD!");
            losses++;
            $("#losses").html("LOSSES:"+ losses);    
            ArnoldPress();
        }
        else {
            $("#yourTotal").html(yourTotal);
            wins++;
            $('#wins').html("WINS:"+ wins);
            alert("AAGGGHHHHH!");
            ArnoldPress();
        }
    });
    
    
    $("#Arnold-2").click(function(){
       yourTotal = Arnold2 + yourTotal;
        //console.log(total);
        
        if (yourTotal < computerNumber) {
            $("#yourTotal").html(yourTotal);
            return(yourTotal);
        }
        else if (yourTotal > computerNumber) {
            $("#yourTotal").html(yourTotal);
            alert("TOO MUCH ARNOLD!");
            losses++;
            $("#losses").html("LOSSES:"+ losses);
            ArnoldPress();
        }
        else {
            $("#yourTotal").html(yourTotal);
            wins++;
            $('#wins').html("WINS:"+ wins);
            alert("You won!");
            ArnoldPress();
        }
    
    });
   
    $("#Arnold-3").click(function(){
        yourTotal = Arnold3 + yourTotal;
        //console.log(total);
        
        if (yourTotal < computerNumber) {
            $("#yourTotal").html(yourTotal);
            return(yourTotal);
        }
        else if (yourTotal > computerNumber) {
            $("#yourTotal").html(yourTotal);
            alert("TOO MUCH ARNOLD!!!");
            losses++;
            $("#losses").html("LOSSES:"+ losses);
            ArnoldPress();
        }
        else {
            $("#yourTotal").html(yourTotal);
            wins++;
            $('#wins').html("WINS:"+ wins);
            alert("You won!");
            ArnoldPress();
        }
    
    });
   
    $("#Arnold-4").click(function(){
        yourTotal = Arnold4 + yourTotal;
        //console.log(total);
        
        if (yourTotal< computerNumber) {
            $("#yourTotal").html(yourTotal);
            return(yourTotal);
        }
        else if (yourTotal > computerNumber) {
            $("#yourTotal").html(yourTotal);
            alert("Too Much Arnold!!");
            losses++;
            $("#losses").html("LOSSES:"+ losses);
            
            ArnoldPress();
        }
        else {
            $("#yourTotal").html(yourTotal);
            wins++;
            $('#wins').html("WINS:"+ wins);
            alert("You won!");
            ArnoldPress();
        }
    });

    
    

});