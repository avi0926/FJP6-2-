const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document =  dom.window.document;
        // let mostWicket = 0;
        // let nameOfHighestWicketTacker = "";
        let batmansTable = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table tbody ");
        let HighScore = 0;
        let NameofPlayer = "";
        for(let i=0;i<batmansTable.length;i++){
            let rows = batmansTable[i].querySelectorAll("tbody tr");
            // console.log(rows.length);
            for(let j=0;j<rows.length-5;j++){
                let tds = rows[j].querySelectorAll("td");
                if(tds.length>1){
                    let name = tds[0].textContent;
                    let run = Number(tds[2].textContent);
                    console.log("Name of Batter ---> ",name,"     Runs ---> ",run);

                    if(run>HighScore){
                        console.log(run);
                        console.log(name);
                        HighScore = run;
                        NameofPlayer = name;
                    }
                }
            }
        }
        console.log("Name of Highest Run Scorer : ",NameofPlayer);
        console.log("Number of runs      : ",HighScore);
    }
}

