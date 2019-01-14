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


  
var num1 =[];
for (var i=1;i<=12;i++){
if(i>=1 && i<=12){
    num1.push(i);
}
 };
var randomNum1=Math.floor(Math.random()*num1.length)
var randomNum2=Math.floor(Math.random()*num1.length)
var randomNum3=Math.floor(Math.random()*num1.length)
var randomNum4=Math.floor(Math.random()*num1.length)

// var crystalNum1 = num[randomNum1];





function restartGame(){
    randomNum=Math.floor(Math.random()*num.length)
    startNum= num[randomNum];
    $("#randomNumber").html(startNum)
    
    randomNum1=Math.ceil(Math.random()*num1.length)
    randomNum2=Math.ceil(Math.random()*num1.length)
    randomNum3=Math.ceil(Math.random()*num1.length)
    randomNum4=Math.ceil(Math.random()*num1.length)
    
    console.log(randomNum1)
    console.log(randomNum2)
    console.log(randomNum3)
    console.log(randomNum4)
  
    $("#yourNumber").empty()
    yourNum= 0;

}


// assign crystals value and add to total when clicked. 

$('#blue').on("click",function(){
   yourNum += randomNum1
  
   $("#yourNumber").text(yourNum);
   winorlose();
   
});
 $('#green').on("click",function(){
    yourNum += randomNum2
    console.log(yourNum);
    $("#yourNumber").text(yourNum);
    winorlose();
 });

 $('#red').on("click",function(){
    yourNum += randomNum3
    console.log(yourNum);
    $("#yourNumber").text(yourNum);    
    winorlose();
    
});

$('#yellow').on("click",function(){
    yourNum += randomNum4
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

