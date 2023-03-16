const idEntry = document.querySelector("#id-entry");
const articleName = document.querySelector("#name-entry");
const articleBody = document.querySelector("#body-entry");


const postBtn = document.querySelector("#post-btn")
const getBtn = document.querySelector("#get-btn");
const putBtn = document.querySelector("#put-btn");
const deleteBtn = document.querySelector("#delete-btn");

const output = document.querySelector("#response");


postBtn.addEventListener('click', () => 
{
    let xhr = new XMLHttpRequest();
    //every time the state changes, run this function
    xhr.onreadystatechange = function() {
        //if the state indicates state is DONE, use response
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                let response = JSON.parse(this.responseText);
                console.log(response);
                tableAppend(response)
            } else {
                console.log("Error:", this.statusText);
                alert("postBtn error: ", this.statusText);
            }
        }
    };
    xhr.open("POST", "https://httpbin.org/post");

    let formData = new FormData();
    formData.append("id", idEntry.value);
    formData.append("article-name", articleName.value);
    formData.append("article-body", articleBody.value);
    xhr.send(formData);
});




getBtn.addEventListener('click', () => 
{
    let xhr = new XMLHttpRequest();
    //every time the state changes, run this function
    xhr.onreadystatechange = function() {
        //if the state indicates state is DONE, use response
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                let response = JSON.parse(this.responseText);
                console.log(response);
                tableAppend(response)
            } else {
                console.log("Error:", this.statusText);
                alert("getBtn error: ", this.statusText);
            }
        }
    };
    xhr.open("GET", "https://httpbin.org/get");

    let formData = new FormData();
    formData.append("id", idEntry.value);
    //send only id since is unique and GET doesn't need article or name
    xhr.send(formData);
});




putBtn.addEventListener('click', () => 
{
    let xhr = new XMLHttpRequest();
    //every time the state changes, run this function
    xhr.onreadystatechange = function() {
        //if the state indicates state is DONE, use response
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                let response = JSON.parse(this.responseText);
                console.log(response);
                tableAppend(response)
            } else {
                console.log("Error:", this.statusText);
                alert("putBtn error: ", this.statusText);
            }
        }
    };
    xhr.open("PUT", "https://httpbin.org/put");

    let formData = new FormData();
    formData.append("id", idEntry.value);
    formData.append("article-name", articleName.value);
    formData.append("article-body", articleBody.value);
    xhr.send(formData);
});




deleteBtn.addEventListener('click', () => 
{
    let xhr = new XMLHttpRequest();
    //every time the state changes, run this function
    xhr.onreadystatechange = function() {
        //if the state indicates state is DONE, use response
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                let response = JSON.parse(this.responseText);
                console.log(response);
                tableAppend(response)
            } else {
                console.log("Error:", this.statusText);
                alert("deleteBtn error: ", this.statusText);
            }
        }
    };
    xhr.open("DELETE", "https://httpbin.org/delete");

    let formData = new FormData();
    formData.append("id", idEntry.value);
    //send only id since is unique and DELETE doesn't need article or name
    xhr.send(formData);
});










// input response is a single JSON object {"key": "value", "key2": "value"}
function tableAppend (response) {
    let placeholder = document.querySelector("#data-output");
    // HTML output to append to DOM tree
    let out = "";

    //args, files, form, and headers has an array for values, so loop over and print each key, value in a line
    let argsText = "{ <br>";
    for(let arg in response.data) {
        argsText += `${arg}: ${response.data[arg]} <br>`;
    }
    argsText += "}";

    let filesText = "{ <br>";
    for(let arg in response.files) {
        filesText += `${arg}: ${response.files[arg]} <br>`;
    }
    filesText += "}";


    let formText = "{ <br>";
    for(let arg in response.form) {
        formText += `${arg}: ${response.form[arg]} <br>`;
    }
    formText += "}";

    
    let headerText = "{ <br>";
    for (let header in response.headers) {
        headerText += `${header}: ${response.headers[header]} <br>`;
    }
    headerText += "}";

    

    out += `
        <tr>
            <td>${argsText}</td>
            <td>${filesText}</td>
            <td>${formText}</td>
            <td>${headerText}</td>
            <td>${response.origin}</td>
            <td>${response.url}</td>
        </tr>
    `;
    
    placeholder.innerHTML = out;
};


