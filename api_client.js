const baseUrl = "http://localhost:3000/";


//GET
let getItems = async() =>{
    await fetch(baseUrl, {
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then (response => response.json())
    .then(data =>{
        renderItems(data);
    })
    .catch( (error) => {
        console.error("Error:", error)
    });
};

//POST 

let postItem = async(data)=>{
    await fetch (baseUrl, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error("Error:", error);
    });
};

//DELETE

let deleteItem = async(id)=>{
    await fetch(baseUrl + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
          },
        body: null
    })
    .catch((error) => {
        console.error("Error:", error);
    });
};


//PUT

let changeItem = async(id, data) =>{
    await fetch(baseUrl + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        console.log("Success:", json);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
};












