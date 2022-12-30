fetch('https://randomuser.me/api').then(result =>{
    return result.json();
})
.then(r => {
    // let json = JSON.parse(r);
    console.log(r.results[0].name)
})