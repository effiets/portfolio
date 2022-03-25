let avatar = document.getElementById("profile");
let books = document.getElementById("book");
let dog = document.getElementById("dog");
let game = document.getElementById("game");
let paint = document.getElementById("paint")


//profile pic

avatar.onclick = function(){
    if(avatar.src.match("./resources/mea.png")) {
        avatar.src = "./resources/meb.png";
    } else {
        avatar.src="./resources/mea.png";
    }
    
    avatar.style.cursor="pointer"
}

//books pic
books.onclick = function(){
if(books.src.match("./resources/booka.png")){
    books.src = "./resources/bookb.png"
} else {
    books.src="./resources/booka.png"
}

books.style.cursor="pointer"
}

//dog pic
dog.onclick = function(){
    if(dog.src.match("./resources/doga.png")){
        dog.src = "./resources/dogb.png"
} else {
    dog.src="./resources/doga.png"
}
    dog.style.cursor="pointer"
}

game.onclick = function(){
    if(game.src.match("./resources/gamea.png")){
        game.src = "./resources/gameb.png"
} else {
    game.src="./resources/gamea.png"
}

game.style.cursor="pointer"
}

//draw pic
paint.onclick = function(){
    if(paint.src.match("./resources/drawa.png")){
        paint.src = "./resources/drawb.png"
} else {
    paint.src="./resources/drawa.png"
}

paint.style.cursor="pointer"
}