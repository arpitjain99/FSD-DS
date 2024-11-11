function Fetch_Data(){
    return new Promise((resolve)=>{
        let Students= [
         {name: "Alice" , score: 50},
        {name: "Bob" , score: 65},
        {name: "Charlie" , score: 80},
        {name: "David" , score: 45},
        ];
        setTimeout(()=>{
            console.log("Data Fetched");
            resolve(Students);
        },2000);
    });
}
Fetch_Data().then((data)=>{
    let sum=data.reduce((sum,student)=>sum+student.score,0);
    console.log(sum);
    console.log("Data Received Successfully");
}).catch((message)=>{
    console.log(message);
});