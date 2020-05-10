;

'use strict';

const SHOW_CLASS = 'show';

function get(selector) {
    return document.querySelector(selector);
}

function getAll(selector) {
    return document.querySelectorAll(selector);
}

window.onload = () => {
    /**
     * Closes curtains.
     */
    getAll('.curtain').forEach(curtain => curtain.classList.add('curtain--closed'));

    /**
     * Show STEAK image.
     */
    get('.header__image').classList.add(SHOW_CLASS);

    /**
     * Show STEAK leaf image.
     */
    get('.header__leaf').classList.add(SHOW_CLASS);

    /**
     * Show header text.
     */
    get('.header__text').classList.add(SHOW_CLASS);

    /**
     * Show header button border.
     */
    get('.header__button').classList.add(SHOW_CLASS);

    /**
     * Show PEPPER image.
     */
    get('.pepper').classList.add(SHOW_CLASS);

    /**
     * Show FOOD image.
     */
    get('.food').classList.add(SHOW_CLASS);
};