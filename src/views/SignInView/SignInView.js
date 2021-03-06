import React from "react";
import { Button, FormControl } from "react-bootstrap";
import Card from "../../components/Card/Card";
import "./SignInView.css";

export default function SignInView({
    username,
    password,
    handleChange,
    handleLogin,
}) {
    return (
        <div className="sign-in-container">
            {/* Custom card component not bootstrap component */}
            <Card>
                <h2 className="text-dark mx-5">Baseball Profile Login</h2>
                <form className="d-flex flex-column" onSubmit={handleLogin}>
                    <label>Username</label>
                    <FormControl
                        className="mb-2"
                        type="text"
                        value={username}
                        name="username"
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    <FormControl
                        className="mb-2"
                        type="password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                    />
                    <Button className="my-3" type="submit">
                        Sign In
                    </Button>
                </form>
            </Card>
        </div>
    );
}
