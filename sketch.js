var greeting;
var findBooksButton;
var depositBooksButton;
var database;




function setup(){
    createCanvas(windowWidth,windowHeight);
    database = firebase.database();
  
greeting = createElement ("h1")
greeting.position(windowWidth/2-100, 0);
greeting.html("Hello Visitor!");
fill("white")
text("This is a Library App for exchanging books.",windowWidth/3,150);

findBooksButton = createA('firstPage.html','Find Books');
findBooksButton.position(windowWidth/2,windowHeight-80);

depositBooksButton = createA('secondPage.html','Deposit Books');
depositBooksButton.position(windowWidth/2-200    ,windowHeight-80);


  }
  
 
