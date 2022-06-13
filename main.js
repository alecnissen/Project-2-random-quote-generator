let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = [

    '“there is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself.”― Miyamoto Musashi',


    '“Think lightly of yourself and deeply of the world” ― Miyamoto Musashi',

    '“Do nothing that is of no use” ― Musashi Miyamoto',

    '“If you wish to control others you must first control yourself” ― Miyamoto Musashi',

    '“Perceive that which cannot be seen with the eye.”― Miyamoto Musashi',

    '“It is difficult to understand the universe if you only study one planet”― Miyamoto Musashi',

    '“Do not sleep under a roof. Carry no money or food. Go alone to places frightening to the common brand of men. Become a criminal of purpose. Be put in jail, and extricate yourself by your own wisdom.”― Miyamoto Musashi',

    '“Perception is strong and sight weak. In strategy it is important to see distant things as if they were close and to take a distanced view of close things.”― Miyamoto Musashi',

    '“If you know the way broadly you will see it in everything.”― Miyamoto Musashi',

    // '"Craig you need to keep training, you are not close to blue belt - Alec Nissen AKA Baseball Bat choke legend',



    '“Whatever the Way, the master of strategy does not appear fast….Of course, slowness is bad. Really skillful people never get out of time, and are always deliberate, and never appear busy.”― Miyamoto Musashi, A Book of Five Rings: the Classic Guide to Strategy',


];

btn.addEventListener('click',function(){
    let randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})
