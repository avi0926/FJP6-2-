const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

function cb(error, response, html) {
    if (error)
        console.error('error:', error); // Print the error if one occurred
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let teamname = document.querySelectorAll(".ds-text-tight-l.ds-font-bold");
        console.log(teamname[0].textContent);
        console.log(teamname[1].textContent);
    }
};