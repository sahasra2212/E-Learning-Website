function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (name === "" || email === "" || password === "" || confirm === "") {
        alert("All fields are required!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email!");
        return false;
    }

    if (password !== confirm) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration Successful!");
    return true;
}

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Enter email and password!");
    } else {
        alert("Login Successful!");
    }
}
function showDetails(course) {
    let details = document.getElementById("courseDetails");

    if (course === "ml") {
        details.innerHTML = `
        <h2>Machine Learning</h2>
        <p><b>Description:</b> Learn algorithms and models</p>
        <p><b>Instructor:</b> Dr. Rao</p>
        <p><b>Curriculum:</b> Regression, Classification, Clustering</p>
        <p><b>Duration:</b> 6 weeks</p>
        <button>Enroll</button>
        `;
    }

    else if (course === "dl") {
        details.innerHTML = `
        <h2>Deep Learning</h2>
        <p><b>Description:</b> Neural networks and AI models</p>
        <p><b>Instructor:</b> Dr. Kumar</p>
        <p><b>Curriculum:</b> CNN, RNN, NLP</p>
        <p><b>Duration:</b> 8 weeks</p>
        <button>Enroll</button>
        `;
    }

    else if (course === "ds") {
        details.innerHTML = `
        <h2>Data Science</h2>
        <p><b>Description:</b> Data analysis and visualization</p>
        <p><b>Instructor:</b> Ms. Sneha</p>
        <p><b>Curriculum:</b> Python, Pandas, Visualization</p>
        <p><b>Duration:</b> 5 weeks</p>
        <button>Enroll</button>
        `;
    }

    else if (course === "ai") {
        details.innerHTML = `
        <h2>AI Basics</h2>
        <p><b>Description:</b> Introduction to Artificial Intelligence</p>
        <p><b>Instructor:</b> Mr. Reddy</p>
        <p><b>Curriculum:</b> AI concepts, applications</p>
        <p><b>Duration:</b> 4 weeks</p>
        <button>Enroll</button>
        `;
    }
}