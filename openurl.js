module.exports = function openurl(url){
    const open = require('open');
    for (let i = 0; i < url.length; i++) {
        open(url[i],{app:{name:open.apps.chrome,arguments:['--app='+url[i]]}});
    }
}