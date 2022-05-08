// Add your code here
let bodyData = {
    name: "Steve",
    email: "steve@steve.com",
};

const renderUser = data => {
    const span = document.createElement('span');
    span.innerHTML = data.id;
    document.body.append(span);
}

const configurationObj = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
    },
    body: JSON.stringify(bodyData),
};

function submitData() {
    return fetch('http://localhost:3000/users', configurationObj)
        .then((resp) => resp.json())
        .then((data) => renderUser(data))
        .catch((err) => {
            const span = document.createElement('span');
            span.innerHTML = err.message
            document.body.append(span);
        })
};