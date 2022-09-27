if (navigator.serviceWorker) {
    console.log("Es compatible sin escrúpulos");
 
    navigator.serviceWorker.register("./sw.js");
}