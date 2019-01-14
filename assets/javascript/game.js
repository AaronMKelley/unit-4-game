// Variables 
var yourNum= 0;
var wins= 0;
var losses=0;

//generate  starting random number at the beginning
// generate random crystal number and assign randomly.
var num = [];
for (var i=1;i<=120;i++){
if (i>=19){
    num.push(i);
}
};
var randomNum=Math.floor(Math.random()*num.length)
var startNum= num[randomNum];
   $('#randomNumber').html(startNum)
    console.log(startNum)
    console.log(num)
    console.log(randomNum)
 


var num1 =[];
for (var i=1;i<=12;i++){
    num1.push(i)
   
}
restartGame();

function restartGame(){
    randomNum=Math.floor(Math.random()*num.length)
    startNum= num[randomNum];
    randomNum1=Math.floor(Math.random()*num1.length)
    randomNum2=Math.floor(Math.random()*num1.length)
    randomNum3=Math.floor(Math.random()*num1.length)
    randomNum4=Math.floor(Math.random()*num1.length)
    crystalNum1 = num[randomNum1];
    crystalNum2= num[randomNum2];
    crystalNum3 = num[randomNum3];
    crystalNum4 = num[randomNum4];
    $("#randomNumber").html(startNum)
    $("#yourNumber").empty()
    yourNum= 0;

}



// assign crystals value and add to total when clicked. 

$('#blue').on("click",function(){
   yourNum += crystalNum1
   console.log(yourNum);
   $("#yourNumber").text(yourNum);
   winorlose();
   
});
 $('#green').on("click",function(){
    yourNum += crystalNum2
    console.log(yourNum);
    $("#yourNumber").text(yourNum);
    winorlose();
 });

 $('#red').on("click",function(){
    yourNum += crystalNum3
    console.log(yourNum);
    $("#yourNumber").text(yourNum);    
    winorlose();
    
});

$('#yellow').on("click",function(){
    yourNum += crystalNum4
    console.log(yourNum);
    $("#yourNumber").text(yourNum); 
    winorlose()
 
});  
  function winorlose(){
if(yourNum=== startNum){
        $("#yourNumber").append("Winner Winner Chicken Dinner");
        wins ++
        $("#winstext").text("Wins:" + wins)
}else if( yourNum > startNum) {
       $("#yourNumber").html("LOSER")
        losses ++
        $('#lossestext').text("Losses:" + losses)
        
}};

$('#restart').on('click',function(){
    restartGame();
})

