// ==UserScript==
// @name        terrorist-substitutions
// @namespace   twitter.com/Vanderdecken
// @description Substitutions that make reading about terrorists more accurate
// @include     http://www.bbc.co.uk/*
// @include     http://www.bbc.com/*
// @include     http://www.cbc.ca/*
// @include     http://www.theguardian.com/*
// @include     http://www.telegraph.co.uk/*
// @include     http://www.theonion.com/*
// @include     http://www.foxnews.com/*
// @include     https://www.reddit.com/*
// @include     https://www.washingtonpost.com/*
// @version     1
// @grant       none
// ==/UserScript==
(function() {
    var substitutions,
        textNodes,
        regexps = {};

    substitutions = {
        "terrorists": "these silly cunts",
        "terrorist": "silly cunt",
        "terrorism": "cuntery",
        "the attackers": "the silly cunts",
        "the attacker": "the silly cunt",
        "attackers": "silly cunts",
        "suspected attacker": "possible cunt",
        "terror attacks": "outbreaks of silly cuntery",
        "terror attack": "outbreak of silly cuntery",
        "counter-terrorist": "counter-cuntery",
        "counter-terrorism": "anti-cuntbucket",
        "terror level": "fear of cunts",
        "ISIS": "Goat Fuckers International",
        "ISIL": "Goat Fuckers International",
        "Islamic State": "Goat Fuckers International",
    }

    for (var key in substitutions) {
        regexps[key] = new RegExp(key, 'gi');
    }

    textNodes = document.evaluate("//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < textNodes.snapshotLength; i++) {
        var node = textNodes.snapshotItem(i);
        node.data = substituteTextIn(node.data);
    }

    function substituteTextIn(text) {
        for (var key in substitutions) {
            text = text.replace(regexps[key], substitutions[key]);
        }
        return text;
    }

})();
