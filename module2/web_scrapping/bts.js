const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    } else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmen = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table tbody");
        console.log(batsmen.length);
        for(let i=0;i<batsmen.length;i++){
            let rows = batsmen[i].querySelectorAll("tbody tr");
            console.log(rows.length);
            for(let j=0;j<rows.length-4;j++){
                let tds = rows[j].querySelectorAll("td");
                if(tds.length>1){
                    let name = tds[0].textContent;
                    let run = tds[2].textContent;
                    console.log(name);
                    console.log(run);
                }
            }
        }
    }
}