const puppeteer = require("puppeteer");

let page;
const codeObject  = require("./hackerrank.js")

const browserOpenpromise = puppeteer.launch({headless : false , defaultViewport : null});

browserOpenpromise.then(function(browser){
    let pageArr = browser.pages();
    return pageArr;
}).then(function(pageArr){
    page = pageArr[0];
    let googleOpened = page.goto("https://www.google.com/");
    return googleOpened;
}).then(function(){
    let inputPageFound = page.waitForSelector(".RNNXgb input",{visible:true});
    return inputPageFound;
}).then(function(){
    let ObjectTyped = page.type(".RNNXgb input","hackerrank");
    return ObjectTyped;
}).then(function(){
    let Enterpressed = page.keyboard.press("Enter");
    return Enterpressed;
}).then(function(){
    let waitforload = page.waitForSelector(".yuRUbf a",{visible:true});
    return waitforload;
}).then(function(){
    let siteopened = page.click(".yuRUbf a");
    return siteopened;
}).then(function(){
    let waitforload = page.waitForSelector(".menu-item-2887 a",{visible:true});
    return waitforload;
}).then(function(){
    let clickOnLogin = page.click(".menu-item-2887 a");
    return clickOnLogin;
}).then(function(){
    let waitforload = page.waitForSelector(".fl-button-wrap.fl-button-width-auto.fl-button-left a",{visible:true});
    return waitforload;
}).then(function(){
    let loginpageopened = page.click(".fl-button-wrap.fl-button-width-auto.fl-button-left a");
    return loginpageopened;
}).then(function(){
    let waitforload = page.waitForSelector(".custom-input.theme-m.size-large #input-1",{visible:true});
    return waitforload;
}).then(function(){
    let EmailWritten = page.type(".custom-input.theme-m.size-large #input-1","kalash.raj.0987@gmail.com");
    return EmailWritten;
}).then(function(){
    let PassWritten = page.type(".input-wrap.align-icon-left.has-icon #input-2","#my_life09");
    return PassWritten;
}).then(function(){
    let waitforload = page.waitForSelector("button[type='submit']",{visible:true});
    return waitforload;
}).then(function(){
    let loginbuttonclicked = page.click("button[type='submit']");
    return loginbuttonclicked;
}).then(function(){
    let waitforload =page.waitForSelector(".card-content #base-card-2-link div span",{visible:true});
    return waitforload;
}).then(function(){
    let ProblemPageOpened = page.click(".card-content #base-card-2-link div span");
    return ProblemPageOpened;
}).then(function(){
    let waitforload = page.waitForSelector("a[href='/challenges/insert-a-node-at-the-tail-of-a-linked-list?isFullScreen=true'] .cta-container",{visible:true});
    console.log("item found");
    return waitforload;
}).then(function(){
    console.log("work in progress");
    let challengeOpen = page.click("a[href='/challenges/insert-a-node-at-the-tail-of-a-linked-list?isFullScreen=true'] .cta-container");
    return challengeOpen;
}).then(function(){
    let waitforload = page.waitForSelector("#content > div > div > div > div > div.community-content > div > section > div > div > div > div.contents-wrapper > div > div.fs-right-pane > div > section > div:nth-child(1) > div > div.hr-monaco-editor-wrapper > div > div.pmR.pmL.pmB.hr-monaco-custom-input-wrapper.flex > div.checkBoxWrapper > div > label > div.checkbox-wrap > input",{visible:true});
    return waitforload;
}).then(function(){
    let checkBoxClicked = page.click("#content > div > div > div > div > div.community-content > div > section > div > div > div > div.contents-wrapper > div > div.fs-right-pane > div > section > div:nth-child(1) > div > div.hr-monaco-editor-wrapper > div > div.pmR.pmL.pmB.hr-monaco-custom-input-wrapper.flex > div.checkBoxWrapper > div > label > div.checkbox-wrap > input");
    return checkBoxClicked;
}).then(function(){
    let codetypePadOPENED = page.waitForSelector("textarea.custominput",{visible:true});
    return codetypePadOPENED;
}).then(function(){
    let codetypePadOPENED = page.waitAndcCick("textarea.custominput");
    return codetypePadOPENED;
}).then(function(){
    let codetyped = page.type("textarea.custominput",codeObject.codes[0] , {delay:10});
    return codetyped;
})
// .then(function(){
//     let codetyped = page.type(".input.text-area.custominput.auto-width",codes.codes);
//     return codetyped;
// })







.catch(function(err){
    console.log(err);
})