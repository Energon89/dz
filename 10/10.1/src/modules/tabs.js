const htmlElements = {
    buttons: document.querySelectorAll('.container .buttons button'),
    links: document.querySelectorAll('.container .links a'),
    tabs: document.querySelectorAll('.container .tabs > div')
};

function Tabs() {};

Tabs.prototype.init = function() {
    htmlElements.links.forEach(function(link) {
        link.addEventListener('click', linkClicked);
    });
    enableTab('clock');
};

function linkClicked() {
    enableTab(this.dataset.mode);
}

function enableTab(mode) {
    enableLink(mode);
    enableContent(mode);
}

function enableLink(mode) {
    removeClass('selected', htmlElements.links);
    htmlElements.links.forEach(function(link) {
        if (link.dataset.mode === mode) {
            addClass('selected', [link]);
        }
    });
}

function enableContent(mode) {
    addClass('hidden', htmlElements.tabs);
    htmlElements.tabs.forEach(function(tab) {
        if (tab.dataset.mode === mode) {
            removeClass('hidden', [tab]);
        }
    });
}

function addClass(className, elements) {
    for (let i=0; i < elements.length; i++) {
        elements[i].classList.add(className);
    }
}

function removeClass(className, elements) {
    elements.forEach(function(element) {
        element.classList.remove(className);
    });
}

export { Tabs };
