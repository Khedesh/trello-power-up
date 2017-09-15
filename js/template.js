/* global TrelloPowerUp */

var GRAY_ICON = './images/icon-gray.svg';

var cardButtonCallback = function (t) {
    console.log("Hello!");
};

TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        return [{
            // usually you will provide a callback function to be run on button click
            // we recommend that you use a popup on click generally
            icon: GRAY_ICON, // don't use a colored icon here
            text: 'Open Popup',
            callback: cardButtonCallback
        }, {
            // but of course, you could also just kick off to a url if that's your thing
            icon: GRAY_ICON,
            text: 'Just a URL',
            url: 'https://developers.trello.com',
            target: 'Trello Developer Site' // optional target for above url
        }];
    },
    'show-settings': function (t, options) {
        return t.popup({
            title: 'Settings',
            url: './settings.html',
            height: 184
        });
    }
});
