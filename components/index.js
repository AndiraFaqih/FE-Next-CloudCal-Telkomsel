"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Index() {
    const [msg, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log(data.msg);
                setMessage(data.msg);
            });
    }, []);

    return (
        <div className="text-center">
            <div className="p-8 rounded shadow-lg" style={{ backgroundColor: "#FDF0F0" }}>
                <h1 className="text-3xl font-bold mb-4" style={{ color: "#144272" }}>
                    Welcome to Triangle Area Calculator
                </h1>
                <p className="text-lg mb-4 text-black " style={{ color: "#205295" }}>Calculate the area of a triangle with ease.</p>
                <Link href="/calculator">
                    <div className="bg-blue-700 text-white p-2 rounded hover:bg-blue-500 text-xl">
                        Go to Calculator
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Index;
