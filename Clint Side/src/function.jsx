
const formHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const gender = form.gender.value;

    const userData = {
        photo,
        name,
        email,
        phone,
        location,
        gender,
    }
    fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(userData)
    }).then((res) => {
        res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
    form.reset();
}

//user card handle 

function deleteUser (name) {
    fetch("h")
}
export { formHandle, deleteUser }