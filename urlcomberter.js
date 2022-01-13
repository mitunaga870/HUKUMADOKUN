module.exports=function combert(url){
    return new Promise((resolve)=> {
        for (let i = 0; i < url.length; i++) {
            let id = url[i].split("v=")[1];
            url[i] = "https://www.youtube.com/embed/" + id;
        }
        resolve(url);
    });
}