document.addEventListener("change",(event)=>{
    if(event.target.id == "img1"){
        const img_obj = event.target.files[0];
        document.querySelector("#prev1").src = URL.createObjectURL(img_obj);
    }
    else if(event.target.id == "img2"){
        const img_obj = event.target.files[0];
        document.querySelector("#prev2").src = URL.createObjectURL(img_obj);
    }
    else if(event.target.id == "img3"){
        const img_obj = event.target.files[0];
        document.querySelector("#prev3").src = URL.createObjectURL(img_obj);
    }
})