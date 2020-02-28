const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/';

fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json())
    .then(function (data) {
        // Your code for handling the data you get from the API
        let users = data.results; // Get the results
        return users.map(function (user) { // Map through the results and for each run the code below
            let picture = document.getElementById('picture').src = user.picture.large;
            let userName = document.getElementById('userName').innerHTML = user.name.first + " " + user.name.last;

            console.log(picture);
            console.log(user.picture.large);



            // let li = createNode('li'), //  Create the elements we need
            //     img = createNode('img'),
            //     p = createNode('p');

            // img.src = author.picture.large;  // Add the source of the image to be the src of the img element
            // p.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
            // append(li, img); // Append all our elements
            // append(li, p);
            // append(ul, li);
        })
    })
    .catch(function (error) {
        // This is where you run code if the server returns any errors
        console.log(error)
    });



function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}
