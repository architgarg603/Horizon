let search = document.querySelector("#SearchInput");

window.addEventListener("load", function () {

    searchBtn.addEventListener("click", searchHandler);
    search.addEventListener("keypress", searchEnterHandler);
})

searchHandler = async () => {
    const email = search.value;
    let data = await axios.post("http://localhost:3000/patient/search", { email: email });
    let obj = data.data.data;
    if (obj.length == 0) {

    } else {
        window.location.href = `/p/doc/${obj[0]._id}`;
    }
}

searchEnterHandler = async (e) => {
    if (e.key == "Enter") {

        const email = search.value;
        let data = await axios.post("http://localhost:3000/patient/search", { email: email });
        let obj = data.data.data;
        if (obj.length == 0) {

        } else {
            window.location.href = `/p/doc/${obj[0]._id}`;
        }
    }
}