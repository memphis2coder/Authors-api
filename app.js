const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json())
    .then(function (data) {
        // Your code for handling the data you get from the API
        let authors = data.results; // Get the results
        return authors.map(function (author) { // Map through the results and for each run the code below
            let li = createNode('li'), //  Create the elements we need
                img = createNode('img'),
                p = createNode('p');

            img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
            p.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
            append(li, img); // Append all our elements
            append(li, p);
            append(ul, li);
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
