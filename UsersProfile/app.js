fetch('https://randomuser.me/api').then((response)=>{
    return response.json()
}).then(data=>{
    `
    <div class="card">
    <img src="${data.results[0].picture.large}" alt="Avatar" style="width:100%">
    <div class="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>`
    console.log(data.results[0].picture.large)
})
