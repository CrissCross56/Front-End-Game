window.onload = init;

const testStr = 'racecar';
//first nested array contains letters that are in the answer
//second nested array contains letters that are not in the answer
const inputArr = [[],[]];
const errArr = [];
const corrArr = [];

function init(){

    let input = document.querySelector('#input');
    input.addEventListener('keydown',checkLetter);
    input.addEventListener('keyup', clearInput);

    //have a test string
    
    


    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');




    //once we checked a letter make sure we arent duplicating
    function checkDuplicates(indChar, arr){
        let contains = false;
        console.log(indChar)
        //loop thru all
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === indChar){
                contains = true;
            }
            else{
                contains = false;
            }
        }
        return contains;
    }

    function checkLetter(e){
        //push the key being pressed into an array so we can make sure 
        //that we are only allowed to press one key at a time
        const ans = [];
        ans.push(e.key);
        //make sure that theres only one thing inside ans
        if(ans.length > 1){
            ans.pop();
        }

        if(testStr.includes(ans[0])){
            //use the corrArr
            if(!(checkDuplicates(ans[0],corrArr))){
                console.log(`${e.key} is a part of the word`);
                corrArr.push(ans.pop());
            }
            else{
                
                console.log(`you already correctly guessed the letter ${e.key}`);
            }
        }
        else{
            if(checkDuplicates(ans[0],errArr)){
                console.log(`you already incorrectly guessed the letter ${e.key}`);
            }
            else{
                console.log(`you guessed wrong`);
                errArr.push(ans.pop());
            }
        }

        console.log(corrArr, errArr);
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
