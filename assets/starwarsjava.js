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


//Starting variables

// var characters={
//         'darth':{ 
//               name: 'darth',
//               heatlh:150,
//               attack: 35,
//               counterattack:35,
//               imageurl:"assets/images/darth.png",
//         },
//         'wampa':{
//                 name:'wampa',
//                 health:200,
//                 attack:10,
//                 counterattack:15,
//                 imageurl:"assets/images/Wampa.jpg"
//         },
//         'luke':{
//                 name: 'luke',
//                 health:180,
//                 attack:25,
//                 counterattack:30;
//                 imgageurl:"assets/images/luke.jpg"
//         },
        
//         'probe':{
//                 name: 'probe',
//                 health:120,
//                 attack:30,
//                 counterattack:5,
//                 imgageurl:'assets/images/probe.jpg'
//         },
//         };
        




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