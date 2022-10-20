const title = document.querySelector('.title-name');

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    var tab = tabs[0];
    title.innerText = tab.title;
});