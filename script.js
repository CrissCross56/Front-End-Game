window.onload = init;

const testStr = 'racecar';
//first nested array contains letters that are in the answer
//second nested array contains letters that are not in the answer
const inputArr = [[],[]];


function init(){

    let input = document.querySelector('#input');
    input.addEventListener('keydown',checkLetter);
    input.addEventListener('keyup', clearInput);

    //have a test string
    



    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');





    function checkLetter(e){

        if(testStr.contains(e.key)){
            console.log(`${e.key} is a part of the word`)

        }

        console.log(inputArr);
    }

    function clearInput(){
        input.value = ' ';
    }

    

};




function drawGallows(ctx){
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.restore();
}

function hangMan(ctx,partIdx){

}
