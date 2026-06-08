const Quote = ["A rose by any other name would smell as sweet. -William Shakespeare   ",
"All that glitters is not gold. -	William Shakespeare",
"All the world’s a stage, and all the men and women merely players.	-William Shakespeare",  
"Ask not what your country can do for you; ask what you can do for your country. -John Kennedy",
"Ask, and it shall be given you; seek, and you shall find.	the Bible","Eighty percent of success is showing up. -Woody Allen",
"He travels the fastest who travels alone.	-Rudyard Kipling","I have always depended on the kindness of strangers.	-Blanche Dubois (character)	",
"If you want something done right, do it yourself.	-Charles-Guillaume Étienne", "Keep your friends close, but your enemies closer.	-Michael Corleone (character)", 
"Life is like a box of chocolates. You never know what you’re gonna get. -Forrest Gump (character)", "ife is like riding a bicycle. To keep your balance, you must keep moving.	-Albert Einstein", "o err is human; to forgive, divine.	-Alexander Pope",
"Service to others is the rent you pay for your room here on earth”. – Mohammed Ali",
"No one is useless in this world who lightens the burdens of another. – Charles Dickens", "If you light a lamp for somebody, it will also brighten your path. – Buddha",
"“If it is right, it happens—the main thing is not to hurry. Nothing good gets away. -John Steinbeck", "In love there are two things—bodies and words. -Joyce Carol Oates",
"I have learned not to worry about love; but to honor its coming with all my heart. -Alice Walker","Love is like the wind, you can’t see it but you can feel it. -Nicholas Sparks, A Walk to Remember",
"To get the full value of a joy you must have somebody to divide it with. -Mark Twain", "'Pain is inevitable. Suffering is optional.' – Haruki Murakami"];

const button = document.querySelector('button');
 const quote = document.querySelector('h1');
button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*22);

    quote.textContent = Quote[index]; 
})

 