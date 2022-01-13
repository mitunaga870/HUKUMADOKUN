exports.readstreamdata = main
var scan =require("./scan");
function main(amount){
    scan(amount)
        .then(function (data){
            return data;
        })
}