import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignInView from "./views/SignInView/SignInView";
import MainView from "./views/MainView/MainView";
import { useState } from "react";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "username") {
            setUsername(value);
        } else {
            setPassword(value);
        }
    }

    function handleLogin(e) {
        e.preventDefault();
        // Check to make sure someting is filled out to login.  Any username and password will work.
        if (username && password) {
            console.log("Successful login");
            navigate("/main");
        } else {
            console.log("Failed to login");
        }
        // resetSignInForm();
    }

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <SignInView
                            username={username}
                            password={password}
                            handleChange={handleChange}
                            handleLogin={handleLogin}
                        />
                    }
                ></Route>
                <Route
                    path="/main/*"
                    element={<MainView username={username} />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
