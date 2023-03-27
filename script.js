window.onload = init;



function init(){

    let chances = 6;
    const testStr = 'racecar';
    const hiddenString = [];
    const errArr = [];
    const corrArr = [];
    const ansIdxs = [];


    let input = document.querySelector('#input');
    input.addEventListener('keydown',checkLetter);
    input.addEventListener('keyup', clearInput);

    //initialize the hiddenString
    setupBoard(testStr);
   
    //se we can setup and display the hangman and his noose later
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    //once we checked a letter make sure we arent duplicating
    function checkDuplicates(event, arr){
        return arr.includes(event.key);
    }

    //to be called each time a key is pressed inside the input form
    function checkLetter(e){
        //push the key being pressed into an array so we can make sure 
        //that we are only allowed to press one key at a time
        

        if(testStr.includes(e.key)){
            //use the corrArr
            if(checkDuplicates(e,corrArr)){
                console.log(`you already correctly guessed the letter ${e.key}`);
            }
            else{
                console.log(`${e.key} is a part of the word`);
                corrArr.push(e.key);
                //call code for updating the hiddenString in here
                fillLetters(e.key);
            }
        }
        else{
            if(checkDuplicates(e,errArr)){
                console.log(`you already incorrectly guessed the letter ${e.key}`);
            }
            else{
                console.log(`you guessed wrong`);
                errArr.push(e.key);
            
            }
        }

        console.log(corrArr, errArr);
    }

    //we wanna clear the input field
    function clearInput(){
        input.value = ' ';
    }

    
    //we wanna fill out the array that has _ chars
    function fillLetters(letter){
        for(let i = 0; i < testStr.length; i ++){
            if(testStr[i] === letter){
                hiddenString[i] = letter;
            }
        }
        //if no more _'s then the player has at this point guessed all the letters
        //check to see if there are no more 'empty' spaces in the hiddenStr
        if(!(hiddenString.includes('_'))){
            alert("You win!")
        }
        console.log(hiddenString);
    }

    
    function setupBoard(testStr){
        for(let i = 0; i < testStr.length; i ++){
            hiddenString.push('_');
        }
        console.log(hiddenString)
    }

};




function drawGallows(ctx){
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.restore();
}

function hangMan(ctx,partIdx){
    ctx.save();
    ctx.restore();
}
