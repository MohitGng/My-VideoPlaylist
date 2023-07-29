let videoList = Array.from(document.getElementsByClassName("video"));
let videoSrc = document.querySelectorAll(".vidList .video");
let mainVideo = document.querySelectorAll(".container .video");
let title = document.querySelector(".container .subheading");

let returningID = () =>{
    mohitanna.forEach((e)=>{ let mohitman = e.children[0].getAttribute("id") })
    return mohitman
}

let makeMeBlank = ()=>{
    Array.from(videoList).forEach((element)=>{
        element.classList.remove("active");
        title.classList.remove("active");
    })
}
// makeMeBlank();
videoSrc.forEach((element,i)=>{
    element.onclick = (e)=>{
        makeMeBlank()
        if(e.target.classList.contains("active")){
            makeMeBlank();
        }
        let src = videoSrc[i].children[0].src;
        mainVideo[0].children[0].src = src;
        e.target.classList.add("active");
    }
})