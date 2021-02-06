let search = document.querySelector("#SearchInput");

window.addEventListener("load",function(){

    searchBtn.addEventListener("click",async function(){
        const email = search.value;
        let data = await axios.post("http://localhost:3000/doctor/search", {email:email});
        let obj  = data.data.data;
        if(obj.length==0){
            
        }else{
            window.location.href = `/d/patient/${obj[0]._id}`;
        }
        
    })
})