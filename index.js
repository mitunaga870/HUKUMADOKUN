var scan =require("./scan");
var openurl = require("./openurl");
var convert = require("./urlcomberter");

main()

function main() {
    readwindws()
        .then(function (data){//窓数処理後１
            console.log("URLを入力してください")
            scan(data)//URL入力
                .then(function (data){
                    convert(data)//URL変換
                        .then(function (data){
                            openurl(data)//開く
                        })
                })
        });

}
function readwindws(){//窓数を聞く
    return new Promise((resolve) => {
        console.log("なん窓しますか？");
        scan()
            .then(function (data){
                resolve(data)
            })
    })
}
