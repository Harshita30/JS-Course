// Check userId from the myObj1 exists in the object myObj2. If exists then add one key as 'availabe' in object 1 with value 'yes' else 'no'

var myObj1 = [
    {group:"ABc",userId:1212,userName:"JohnDoe"},
    {group:"PQR",userId:1213,userName:"JaneDoe"},
    {group:"ABc",userId:1214,userName:"Peter"},
    {group:"PQR",userId:1215,userName:"lorum"},
    {group:"ABc",userId:1216,userName:"Jam"},
    ]
    
    
var myObj2 = [
    {name:"ABc",userId:1212,userName:"JohnDoe "},
    {group:"PQR",userId:1213,userName:"JaneDoe "},
    {group:"ABc",userId:1216,userName:"Peter"}
    ]
    
myObj1.forEach((res)=>{
    if(myObj2.find(res2=> res2.userId===res.userId)){
        res.available='yes'
    } else{
    res.available='no'
    }
})
    
console.log(myObj1)