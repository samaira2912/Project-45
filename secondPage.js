var input, email,bookName;
var checkBox;
var username;
var mail;
var title;
var database;
var index = 0;

function setup(){
    createCanvas(windowWidth,windowHeight);

    database = firebase.database();
    input =  createInput();
    input.position(windowWidth/2-400,windowHeight/2);
    username = input.value();
    email = createInput();
    email.position(windowWidth/2-400,windowHeight/2+70);
    mail = email.value();
    bookName = createInput();
    bookName.position(windowWidth/2-400,windowHeight/2+140)
    title = bookName.value();
    
    checkBox =  createA('#','Confirm');

    checkBox.position(windowWidth/2-400,windowHeight/2+240);

    checkBox.mousePressed(()=>{
        clear();
        index = index+1;
        var userIndex = "users/user" + index;
        database.ref(userIndex).set({
            name : username,
            email: mail,
            title: title
        })
    });
}

