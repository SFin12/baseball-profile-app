import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";

export default function SignInView({
    username,
    password,
    handleChange,
    handleLogin,
}) {
    return (
        <div className="d-flex align-items-center h-100">
            <div className="container">
                <Card>
                    <h1>Baseball Profile</h1>
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
        </div>
    );
}
