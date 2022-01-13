var scan =require("./scan");
var openurl = require("./openurl");
var convert = require("./urlcomberter");

let amount = 0;
main()

function main() {
    var swich = true;
    console.log("ウィンドウサイズを変更しない場合はNを入力")
    scan()
        .then(function (data){
            if (data=="N"){swich=false;}
            makewindow()
                .then(function (){

                });
        })//ウィンドウ変更するか確認

}
function makewindow(){
    return new Promise((resolve)=>{
        readwindws()
            .then(function (data){//窓数処理後１
                console.log("URLを入力してください")
                amount=data;
                scan(data)//URL入力
                    .then(function (data){
                        convert(data)//URL変換
                            .then(function (data){
                                openurl(data);//開く
                            })
                    })
            });
    })
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
