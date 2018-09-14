import React from 'react';

export default class LocalStorage {
    constructor() {}
    
    getOptions() {
        return JSON.parse(localStorage.getItem('options'));
    }
    save(options) {
        options = JSON.stringify(options);
        localStorage.setItem('options', options);
    }
}