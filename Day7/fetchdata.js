function fetchdata(){
    return new Promise((resolve,reject)=>{
        let data={id:1,name:"Arpit",city:"DELHI"};
        setTimeout(()=>{
            resolve(data);
        },3000);
    });
}
fetchdata ()
    .then((data)=> {
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });
    