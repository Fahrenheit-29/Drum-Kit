let q = document.querySelectorAll(".mainBtn button");

for (let index = 0; index < q.length; index++) {


    q[index].addEventListener('click', function() {

        let data = this.innerHTML;

        let letter = data.slice(0, 1);
        pressCase(letter);

        buttonAnimation(letter);
    });


}



document.addEventListener("keydown", (event) => {

    let key = event.key;
    console.log(key);

    Case(key);
    buttonAnimation(key);

});





const pressCase = (key) => {


    switch (key.toLowerCase()) {


        case 'q':

            let kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();

            break;
        case 'w':

            let boom = new Audio("sounds/boom.mp3");
            boom.play();
            break;
        case 'e':

            let crash = new Audio("sounds/crash.mp3");

            crash.play();


            break;
        case 'a':

            let audio3 = new Audio("sounds/tom-1.mp3")

            audio3.play();

            break;

        case 's':
            let audio4 = new Audio("sounds/tom-2.mp3");

            audio4.play();

            break;

        case 'd':
            let audio5 = new Audio("sounds/tom-3.mp3");

            audio5.play();


            break;

        case 'z':
            let audio6 = new Audio("sounds/single-clap.mp3");

            audio6.play();


            break;

        case 'x':
            let audio7 = new Audio("sounds/snare.mp3");

            audio7.play();


            break;
        case 'c':
            let audio8 = new Audio("sounds/tom-4.mp3");

            audio8.play();


            break;


    }

}

function Case(key) {

    switch (key.toLowerCase()) {

        case 'q':

            let audio = document.createElement("AUDIO");
            audio.setAttribute("src", "sounds/kick-bass.mp3");
            audio.play();

            document.body.appendChild(audio);
            break;
        case 'w':

            let audio1 = document.createElement("AUDIO");
            audio1.setAttribute("src", "sounds/boom.mp3");
            audio1.play();

            document.body.appendChild(audio1);
            break;
        case 'e':

            let audio2 = document.createElement("AUDIO");
            audio2.setAttribute("src", "sounds/crash.mp3");
            audio2.play();

            document.body.appendChild(audio2);
            break;
        case 'a':

            let audio3 = document.createElement("AUDIO");
            audio3.setAttribute("src", "sounds/tom-1.mp3");
            audio3.play();

            document.body.appendChild(audio3);


        case 's':
            let audio4 = document.createElement("AUDIO");
            audio4.setAttribute("src", "sounds/tom-2.mp3");
            audio4.play();

            document.body.appendChild(audio4);
            break;

        case 'd':
            let audio5 = document.createElement("AUDIO");
            audio5.setAttribute("src", "sounds/tom-3.mp3");
            audio5.play();

            document.body.appendChild(audio5);
            break;

        case 'z':
            let audio6 = document.createElement("AUDIO");
            audio6.setAttribute("src", "sounds/single-clap.mp3");
            audio6.play();

            document.body.appendChild(audio6);
            break;

        case 'x':
            let audio7 = document.createElement("AUDIO");
            audio7.setAttribute("src", "sounds/snare.mp3");
            audio7.play();

            document.body.appendChild(audio7);
            break;
        case 'c':
            let audio8 = document.createElement("AUDIO");
            audio8.setAttribute("src", "sounds/tom-4.mp3");
            audio8.play();

            document.body.appendChild(audio8);
            break;



    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey.toLowerCase());

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}