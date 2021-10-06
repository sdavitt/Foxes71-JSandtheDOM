/*
JavaScript and APIs (Axios)
*/

/*
How this project will function:

1. User submits form
2. Form data is brought in and saved
3. If name has previously submitted form, display welcome back message
4. Query API for a CatFact
5. Ignore whether or not the user wants the CatFact
6. Display the CatFact for the user in the HTML
*/

let form = document.getElementById('ignore-this-form');

let users = {};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = event.path[0][0].value;
    let wishes = event.path[0][1].value;
    
    // save user name data
    if (users[name]){
        // display welcome back message in html
    } else {
        // display welcome new user message
        // add user to users object
        users[name] = [];
    }

    // make the API call happen
    loadData(wishes, name);
    // display the new facts - oh wait this is handled by loadData above
    console.log(users);
});


// making the APIcall happen: Axios
let getData = async (input) => {
    console.log(input);
    let thing = 'fact';
    let response = await axios.get(`https://catfact.ninja/${thing}`);
    return response.data.fact
}

// make an html element from our new CatFact
let loadData = async (input, user) => {
    let catFact = await getData(input);
    // once we have the data from getData - write an html string to be inserted
    //users[user].push(catFact);
    let html = `<h3 id="#newfact">${catFact}</h3>`;
    document.querySelector('#ignore-this-form').insertAdjacentHTML('afterend', html);
}