import React, {useEffect, useState} from "react";
import "./App.css";

function App() {
    const [gitHubName, setGitHubName] = useState("");
    const [gitHubUrl, setGitHubURL] = useState("#");

    useEffect(() => {
        fetch("https://api.github.com/users/prashantkumar1113")
            .then((res) => res.json())
            .then((data) => {
                setGitHubName(data.name);
                setGitHubURL(data.html_url);
            });
    }, []);

    return (
        <div className="App">
            <h1>Github Profile Info:</h1>
            <h2>{gitHubName}</h2>
            <a href={gitHubUrl} className="btn btn-primary">
                Link to Github Profile
            </a>
        </div>
    );
}

export default App;
