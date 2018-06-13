// The sendMessage and getEvents functions were modified by me starting with the code from 
// here https://stackapps.com/questions/6527/chatexchange-it-is-an-api-for-chat
// which is under the Apache 2.0 license.

//The excuses came from here https://gist.github.com/fortytw2/78f5f9ef915cb43a3be4

var excuses = ["It's a browser issue",
    "I wasn't told how to do that so I had to guess which way they wanted it",
    "The accounting department made me put that there",
    "The sales department made me do it that way",
    "The accounting department made me do it that way",
    "The sales department made me put that there",
    "The accounting department asked it to be that way",
    "The sales department asked for it to be that way",
    "That must be an accounting department error",
    "That must be a sales department error",
    "I had too many projects so I had to rush that feature",
    "I'm still working on that",
    "Why do they want it that way?",
    "The fail-overs must have failed",
    "That's a character encoding issue",
    "I thought that was signed off?",
    "I've never seen that happen before",
    "It works in my dev environment",
    "You mustn't have got my email about that, check your spam",
    "That's just temporary, we're still working on it",
    "I did a quick fix for that already, it must have been reverted",
    "It must be a virus on your system",
    "There must have been a miscommunication on the requirements",
    "We weren't given enough time to write unittests",
    "It's always worked that way",
    "That's a hardware issue",
    "That's an architecture issue",
    "That's a data issue",
    "That's a user issue",
    "That's a support issue",
    "There must be an error with your data",
    "This is the first time anyone has mentioned it",
    "The WYSIWYG editor must have added that",
    "You must be running the wrong version",
    "The tests didn't cover that edge case",
    "I haven't pushed the fix up yet",
    "The error means it has processed correctly",
    "I couldn't recreate that error",
    "It worked before",
    "It has always worked before",
    "Nothing has changed in the code",
    "That is just a placeholder",
    "It has never done that before",
    "The 3rd party API must be down",
    "Our code quality is up to industry standards",
    "It must be a bug with the programming language",
    "That is a known bug with the programming language",
    "That is a known bug with the framework",
    "That feature is part of phase two",
    "That feature is set to low priority",
    "That feature is on our roadmap",
    "That feature is a nice to have",
    "It is an intermittent error, just press refresh",
    "Have you cleared your cache?",
    "It must be a browser cache error",
    "That is a problem with our host",
    "That is an issue with a legacy system",
    "That has always worked that way",
    "That was like that before I started here",
    "That is a training issue",
    "There isn't the budget to address that at the moment",
    "I've not been able to recreate the issue",
    "That's been fixed, but the code still has to be released",
    "That's been fixed on another branch",
    "The developer who coded that doesn't work here anymore",
    "That is part of the old system",
    "I didn't write that part of the system",
    "The fix for that is in progress",
    "Have you updated your browser?",
    "Have you updated your OS?",
    "It is unlikely to happen again",
    "That is a vendor issue",
    "The documentation for that feature is wrong",
    "It's not a bug, it's a feature",
    "That is how we were asked to build it",
    "The program was never meant to work that way",
    "We were never asked to make it do that",
    "It must be a Y2K issue",
    "It must be a timezone issue",
    "It must be a unicode issue",
    "Your internet connection mustn't be working",
    "You're doing it wrong",
    "Someone must have changed my code",
    "There must be a problem with the virtual machine",
    "We have to do it that way for security reasons",
    "I just need one more day to work on that",
    "Have you tried refreshing your browser?",
    "That's a problem with a third party application",
    "That code was written by the last guy",
    "Is that not supposed to happen?",
    "It was such a simple change I didn't think it needed testing",
    "What did you do wrong to make it crash?",
    "The specification contained conflicting requirements",
    "The specification was ambiguous",
    "It must be a race condition",
    "The file must have corrupted",
    "There is nothing in my error logs",
    "You must be looking at the wrong version",
    "Your browser must be caching the old version",
    "My code is compiling",
    "I was sure that had been fixed",
    "The design makes it difficult to build this correctly",
    "It works perfectly on my machine",
    "I never received a ticket for that",
    "It must be missing some dependencies",
    "We outsourced that part",
    "Well, I've never seen that before",
    "It follows industry standards",
    "That's an industry best practice",
    "We've not received any error notifications",
    "That's a feature",
    "It must be an issue with the firewall",
    "It's just a warning, not an error",
    "That output is only wrong half the time",
    "We broke that deliberately to test it",
    "I couldn't find any library that can do that",
    "We've not been able to reproduce the problem",
    "We must have been stress testing the server",
    "It can't be broken, all the unittests pass",
    "It must just be a coincidence",
    "Our users need more training",
    "It works, but it's not been tested",
    "We didn't have the budget to build it properly",
    "It must be a problem with your internet connection",
    "The behaviour is in the original specification",
    "It was only a small change, I didn't think it needed tests",
    "The last guy wrote that part",
    "That feature isn't due in this phase",
    "That feature is outside of the project scope",
    "That's not in my job description",
    "That's the fault of the designer",
    "That's the fault of the UX designer",
    "That's the fault of the UI designer",
    "There's only a one in a million chance of that error occurring",
    "I don't remember that in the original specification",
    "The client requested that change",
    "That's an issue with our legacy software",
    "There must have been a problem with the request",
    "The browser must have dropped some packets",
    "That code wasn't meant to be in production",
    "Someone must have left some test code in",
    "We didn't have time to send that to QA",
    "That software should have been updated ages ago",
    "I'm sure that was written by a freelancer",
    "We contracted that work out months ago",
    "Are you sure you want it to work that way?",
    "That code is still in progress",
    "That is just a placeholder",
    "That works at least 80% of the time",
    "I'm pretty sure that works most of the time",
    "That's still a work in progress",
    "I'm pretty sure that's the way it is meant to work",
    "Your email regarding that issue must have hit my spam filter",
    "That issue was filed under a different release version",
    "I was busy fixing more important issues",
    "This wasn't filed in the issue tracker",
    "The issue tracker was updated, and some issues were lost",
    "The dev that worked here for a week? Yeah, he wrote that",
    "It's not like I can't write that fix in like 5 minutes",
    "The client requested an XML response, but JSON is clearly better",
    "It's most likely a forwarding proxy server that is caching the response",
    "That's unlikely to be enterprise scalable",
    "But we are in a startup, what would you expect?"];
var site = 'chat.stackexchange.com';
var  BASECAMP_ROOM = 2291;
var fkey_mine = fkey().fkey;
var last_message = '';
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function sendMessage(chatSite, room_id, message, fkey) {
    setTimeout(function () {}, 500);
    $.ajax({
        type: 'POST',
        url: 'https://' + chatSite + '/chats/' + room_id + '/messages/new',
        data: {
            text: message,
            fkey: fkey
        }
    });
}
;

function getEvents(chatSite, room_id, fkey, messageCount, since_utc) {
    var url = 'https://' + chatSite + '/chats/' + room_id + '/events';
    var a = null;
    console.log(since_utc);
    a = $.ajax({
        type: 'POST',
        url: url,
        data: {
            fkey: fkey,
            mode: 'Messages',
            since: since_utc,
            msgCount: messageCount
        },
        async: false,
        cache: false
    });
    var result = JSON.parse(a.responseText);
    //console.log(result);
    return result;
}

function getLastBaseCampEvent() {
    var user = document.querySelectorAll(".username")[document.querySelectorAll(".username").length - 1].outerText.trim();
    var text = document.querySelectorAll(".message")[document.querySelectorAll(".message").length - 1].outerText.trim();
    return {user_name: user, content: text};
}
function sendBaseCampMessage(message) {
    sendMessage(site, BASECAMP_ROOM, message, fkey_mine);
}
function chat() {
    var last_event = getLastBaseCampEvent();
    var content = last_event.content;
    if (last_message === content)
    {
        return;
    }
    last_message = content;
    var user_name = last_event.user_name;
    if (content === '!!needExcuse') {
        excuse(user_name);
    } 
    else if (content === '!!pingable') {
        pingable();
    }
    else if (content === '!!alive') {
        sendBaseCampMessage("Hello World");
    }
    else {
        //console.log("nope");
    }

}
function getLastWeekUTC() {
    var d = new Date();
    utc_result=  d.setDate(d.getDate() - 7);
    return utc_result.toString().slice(0,-3);
}

function excuse(user_name) {
    var message = '@' + user_name + " " + excuses[getRandomInt(excuses.length - 1)];
    sendBaseCampMessage(message);
}
function pingable(){
    var events=  getEvents(site, BASECAMP_ROOM, fkey_mine, 500, getLastWeekUTC()).events;
    var last_week = getLastWeekUTC();
    var length = events.length;
    var names = [];
    for (var x =0;x<length;x++){
        if(events[x].time_stamp > last_week){
            names.push(events[x].user_name);
        }
    }
    var unique_names = Array.from(new Set(names))
    var result=unique_names.join();
    sendBaseCampMessage(result);
}
function yourFunction() {
    // do whatever you like here
    chat();
    setTimeout(yourFunction, 500);
}
yourFunction();

