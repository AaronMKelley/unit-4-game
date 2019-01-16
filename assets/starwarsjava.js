//Starting variables

var darthHealthPoints = 150;
var wampaHealthPoints = 200;
var lukeHealthPoints = 180;
var probeHealthPoints= 120;

$('#darth').append(darthHealthPoints);
$('#wampa').append(wampaHealthPoints);
$('#luke').append(lukeHealthPoints);
$('#probe').append(probeHealthPoints);

var darthAttackPower = 35;
var wamapaAttackPower= 10;
var lukeAttackPower= 25;
var proAttackPowers= 30;

var darthCounterAttackPower = 35;
var wampaCounterAttackPower = 15;
var lukeCounterAttackPower = 20;
var probeCounterAttackPower= 5;

// var button = $('button')

function pickFighter(){
$('#darth').on('click',function(){
    $('#yourCharacter').append(this);
    $('#wampa').appendTo('#enemies');
    $('#luke').appendTo('#enemies');
    $('#probe').appendTo('#enemies');
})
$('#wampa').on('click',function(){
        $('#yourCharacter').append(this);
        $('#darth').appendTo('#enemies');
        $('#luke').appendTo('#enemies');
        $('#probe').appendTo('#enemies');
       });
$('#luke').on('click',function(){
        $('#yourCharacter').append(this);
        $('#darth').appendTo('#enemies');
        $('#wampa').appendTo('#enemies');
        $('#probe').appendTo('#enemies');
});
$('#probe').on('click',function(){
        $('#yourCharacter').append(this);
        $('#darth').appendTo('#enemies');
        $('#luke').appendTo('#enemies');
        $('#wampa').appendTo('#enemies');
});
};
pickFighter();

// $('#darth').on('click',function(){
//     if ("yourCharacter"!='#darth')
//     $('#fightSection').append(this);
// })

    // if ('#yourCharacter'!= button){
    //     $('.character').on('click',function(){
    //     $('#fightSection').append(this); 
    //     })
    // }
    // else()


// function pickEnemy (){
//    if ('#yourCharacter'!="") 
//     $('.character').on('click',fucntion(){

//     })
// }