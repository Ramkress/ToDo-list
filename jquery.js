fetch('https://www.balldontlie.io/api/v1/players', {
    method: "GET"
})
    .then(response => response.json())
    .then(result => {
        // console.log(result.data[0]);
        let table="";
        result.data.map((val)=>{
            table +=` <tr>
            <th >${val.id}</th>
            <td>${val.first_name}</td>
            <td>${val.team.division}</td>
            <td>${val.team.name}</td>
          </tr>`;
            // console.log(table);
            document.getElementById("tab").innerHTML=table
        })
       
    })