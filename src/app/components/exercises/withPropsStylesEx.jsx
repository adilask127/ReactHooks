import React from "react";
import CardWrapper from "../common/Card";
import SmallTitle from "../common/typografy/smallTitle";
import Divider from "../common/divider";
const withPropsStylesEx = (Component) => (props) => {
    const user = { _id: "67rdca3eeb7f6fgeed472312", name: "Sam Brown" };
    const isAuth = JSON.parse(localStorage.getItem("users"))
        .map((m) => m._id)
        .includes(user._id);

    const handleLogin = () => {};
    const handleLogOut = () => {};

    return (
        <CardWrapper>
            <SmallTitle className="card-title">Домашнее задание</SmallTitle>
            <Divider />
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
            />
        </CardWrapper>
    );
};

export default withPropsStylesEx;
