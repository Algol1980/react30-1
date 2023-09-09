import React from "react";
const fruits = ['apple', 'banana', 'cherry']
export default function MyComponent () {
    return (
        <>
            <h1>{getGreeting('Alex')}</h1>
            <p>My First React Component</p>
            {getFruits()}
        </>
    );
}

function getGreeting (name) {
    return `Hello ${name}!`
}

function getFruits () {
    return <ul>{fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
    ))}</ul>


} 