

// ! The array  of object that holds the quotes and the outhors
var quates = [

    {
        quote : "“Be yourself; everyone else is already taken.”",
        quote_author : "― Oscar Wilde",
    },

    {

        quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        quote_author : "― Marilyn Monroe",

    },

    {
        quote : "“So many books, so little time.”",
        quote_author : "― Frank Zappa",
    } , 

    {
        quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        quote_author : "― Albert Einstein",
    },

    {
        quote : "“A room without books is like a body without a soul.”",
        quote_author : "― Marcus Tullius Cicero",
    },


    {
        quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        quote_author : "― Bernard M. Baruch",
    },

    {
        quote : `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”`,
        quote_author : "― William W. Purkey",
    },

    {
        quote : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        quote_author : "― Dr. Seuss",
    },

    {
        quote : "“You only live once, but if you do it right, once is enough.”",
        quote_author : "― Mae West"
    },

    {
        quote : `“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”`,
        quote_author : "― Albert Camus",
    },

    {
        quote : "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        quote_author : "― J.K. Rowling, Harry Potter and the Goblet of Fire",
    },

    {
        quote : "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”",
        quote_author : "― H. Jackson Brown Jr., P.S. I Love You"
    },

    {
        quote : "“It is better to be hated for what you are than to be loved for what you are not.”",
        quote_author : "― Andre Gide, Autumn Leaves",
    },


    {
        quote : "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        quote_author : "― Ralph Waldo Emerson"
    },

    {
        quote : "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        quote_author : "― Mahatma Gandhi",
    }
]





// ! creat a array of bool visited to use it to check if all the quotes in the array are visited or not 
var size = quates.length;
var visted = new Array(size).fill(false);


// ! the allvisited function used to check if all the quotes in the array has been displayed or not 
var allvisted = function(){

    return visted.every(val => val == true);

}

// * the generate quotes function 
function generateQuotes(){

    var the_quote = "";
    var the_author = "";
    // the random var is used to save the random number created by the math.rendom methode
    var random = Math.floor(Math.random() * size);


    // ! check if all the quotes in the array is visited 
    var check = allvisted();

    if( check == true){
        // * if all the quotes is visited the it creat another array with all it's value set to false to start agian
        visted = new Array(size).fill(false);
    }


    var flag = true ;
    // ! the loop used to display a quote the has not been visited yet on the screen 
    while(flag){

        if(visted[random] == false){

            the_quote += quates[random].quote;
            the_author += quates[random].quote_author;
        
            document.getElementById("quote").innerHTML = the_quote ;
            document.getElementById("quote-auther").innerHTML  = the_author ;
        
            visted[random] = true;
            flag = false;
    
        }else{
            random = Math.floor(Math.random() * size);
        }
    }
}



