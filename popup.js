const btn = document.querySelector('.btn');
const title = document.querySelector('.title-name');

btn.addEventListener('click', ()=> {
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var tab = tabs[0];
        title.innerText = "Current Tab's Title >>> " + tab.title;
    });

});
