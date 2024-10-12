function updateText() {
    var text = document.querySelector(".text-container p");
    var date = new Date();
    var hour = date.getHours();
    var greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    var message = `Welcome to V Web! ${greeting}`;
    var intro = "This is a place where you can find coding ideas that you can use in your own projects.";
    var learn = "With V Web, you can learn about coding and how to use it in the future.";
    var fun = "It's a place where you can look for coding ideas and see how others have used coding to make their own websites and programs.";
    var future = "In the future, you can use coding to make your own website or program and V Web will be there to help you along the way.";
    var callToAction = "So, let's get coding!!!";

    text.textContent = `${message} ${intro} ${learn} ${fun} ${future} ${callToAction}`;
}

updateText();

