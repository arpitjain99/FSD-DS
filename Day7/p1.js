const mypromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() =>{
        console.log("Data Fetched");

    })
    if (success) {
        resolve("Data send Successfully");
    }
    else{
        reject("Data failed to send")
    }
});

mypromise.then((mesaage) => {
    console.log("Data Recievde " + mesaage);
})
.catch((err) => {
    console.log("Failed to fetch data: " + err);
});