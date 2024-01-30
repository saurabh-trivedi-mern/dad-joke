const joke_url = "https://icanhazdadjoke.com/slack";
const main_container = document.getElementById("main_container");
const heading = document.getElementById("heading");

async function generatejoke(url){
    const response = await fetch(url);
    const data = await response.json();
    let joke = data.attachments[0].text;
    let joke_line = document.getElementById("joke_line");
    joke_line.innerText=joke;
}

generatejoke(joke_url);


let new_dad_joke = document.getElementById("new_dad_joke");
new_dad_joke.addEventListener("click", ()=>{
    generatejoke(joke_url);
})


let tweet_joke = document.getElementById("tweet_joke");

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + joke_line.innerText, "Tweet Window", height="300px", width="300px");
}

tweet_joke.addEventListener("click", ()=>{
    tweet();
})



mode_btn.addEventListener("click", function(e){
    if(main_container.classList.contains("dark")){
        main_container.classList.remove("dark");
        heading.classList.remove("dark");
        mode_btn.innerText = "Dark Mode";
        localStorage.setItem('isDarkMode', false);
    }
    else{
        main_container.classList.add("dark");
        heading.classList.remove("dark");
        mode_btn.innerText = "Light Mode";
        localStorage.setItem('isDarkMode', true);
    }
    }
);


if (localStorage.getItem('isDarkMode') === 'true') {
    main_container.classList.add('dark');
    mode_btn.innerText = "Light Mode";
} else {
    main_container.classList.remove("dark");
    mode_btn.innerText = "Dark Mode";
}


