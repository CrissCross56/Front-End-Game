window.onload = init;



function init(){

    let chances = 6;
    const testStr = 'racecar';
    const hiddenString = [];
    const errArr = [];
    const corrArr = [];
    

    let reset = document.querySelector('#reset');
    let input = document.querySelector('#input');
    input.addEventListener('keydown',checkLetter);
    input.addEventListener('keyup', clearInput);
    reset.addEventListener('click', resetGame);
   
    //se we can setup and display the hangman and his noose later
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    //initialize the hiddenString and other game variables
    setupBoard(testStr);

    //once we checked a letter make sure we arent duplicating
    function checkDuplicates(event, arr){
        return arr.includes(event.key);
    }

    //to be called each time a key is pressed inside the input form
    function checkLetter(e){
        //if our input is inside the answer string
        if(testStr.includes(e.key)){
            if(checkDuplicates(e,corrArr)){
                console.log(`you already correctly guessed the letter ${e.key}`);
            }
            //if we havent alread guessed the lette, push to the corrArr
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
                removeChance();
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

    //player chose wrong, and they lose a chance
    function removeChance(){
        chances--;
        if(chances <= 0){
            console.log(`You lose! The word was ${testStr}`)
        }
        else{
            hangMan(ctx,chances);
            console.log(`You have ${chances} left`)
        }
    }
    //set up the board for whatever size of string we are using for the answer
    function setupBoard(testStr){
        //initialize everything else in here
        
        chances = 6;
        hiddenString.length = 0;
        errArr.length = 0;
        corrArr.length = 0;


        for(let i = 0; i < testStr.length; i ++){
            hiddenString.push('_');
        }
        console.log(hiddenString)


        // "wipe" the canvas clean
        ctx.restore();

        //and then draw again

        //the gallows
        drawGallows(ctx);

    }

    //reset the game once you lose or if the player gives up
    function resetGame(){
        setupBoard(testStr);
    }

};




function drawGallows(ctx){
    ctx.save();
    ctx.strokeStyle = "black";

    //first vertical line
    ctx.beginPath();
            //x1,y1
    ctx.moveTo(300,50);
            //x2,y2
    ctx.lineTo(300,400);
    //
    ctx.closePath();
    ctx.stroke();

    //second line
    ctx.beginPath();
    ctx.moveTo(300, 50)
    ctx.lineTo(450,50);
    ctx.closePath();
    ctx.stroke();

    //third line
    ctx.beginPath();
    ctx.moveTo(450,50);
    ctx.lineTo(450,100);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
}

function hangMan(ctx,partIdx){
    ctx.save();
    ctx.strokeStyle = 'black';
        //check to see what case we're in
        switch (partIdx) {
            case 5:
                //draw the head
                ctx.beginPath();
                //    x,y,radius,startAngle,endAngle, counterClockwise?
                ctx.arc(450,125,25,0, 2 * Math.PI);
                ctx.closePath();
                ctx.stroke();
                break;
            case 4:
                //draw the body
                ctx.beginPath();
                ctx.moveTo(450,150);
                ctx.lineTo(450,225);
                ctx.closePath();
                ctx.stroke();
                break;
            case 3:
                //draw the right arm
                ctx.beginPath();
                ctx.moveTo(450,160);
                ctx.lineTo(500,170);
                ctx.closePath();
                ctx.stroke();
                break;
            case 2:
                //draw the left arm
                ctx.beginPath();
                ctx.moveTo(450,160);
                ctx.lineTo(400,170);
                ctx.closePath();
                ctx.stroke();
                break;
            case 1:
                //draw the right leg
                ctx.beginPath();
                ctx.moveTo(450);
                ctx.lineTo();
                ctx.closePath();
                ctx.stroke();
                break;
            case 0:
                //draw the left leg
                break;
            default:
                console.log('something is going horribly wrong here')
                break;
        }


    ctx.restore();
}
