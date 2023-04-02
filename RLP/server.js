
function naserveruev(){
    const info= document.getElementById("naserveru");
    const infocast= document.getElementById("info");
    const infotext= document.getElementById("textnaserveru");
    
    info.addEventListener("click", function(){
        infocast.style.height= "100px";
        infocast.style.width= "200px";
        infocast.style.borderRadius= "10px";
        infocast.style.fontWeight= "600";
        infocast.style.fontFamily= "Kanit,sans-serif";
        infocast.textContent= "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    });
    console.log(info);
    console.log(infocast);
    console.log(infotext);

}
naserveruev();