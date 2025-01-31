import React, { useState } from "react";
import "./MNavbar.css";
import { useGlobalStore } from "../../store/GlobalStore";

export default function MNavbar() {

    return (
        <div className="mnav">
            <div className="nav-heading">
                <div className="nav-brand">
                    <img src="images/logo.png" alt="LOGO" />
                </div>
                <button onClick={() => dispatch({
                    type: "SET_HAM_CLICKED", payload: true
                })}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    )
}