"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function TriangleView() {
    const [alas, setAlas] = useState("");
    const [tinggi, setTinggi] = useState("");
    const [luas, setLuas] = useState(0);
    const [hasClicked] = useState(false);

    const calculateArea = () => {
        fetchData();
    };

    useEffect(() => {
        if (hasClicked) {
            fetchData();
        }
    }, [hasClicked]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/calculate", {
                method: "POST",
                body: JSON.stringify({ alas_segitiga: alas, tinggi_segitiga: tinggi }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const dataFetch = await response.json();

            if (dataFetch.message === "Success") {
                console.log(dataFetch);
                setLuas(dataFetch.data.luas_segitiga);
            } else {
                console.error("Error:", data.data.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-center"
            style={{ backgroundColor: "#0C134F" }}
        >
            <div
                className="p-8 rounded shadow-lg"
                style={{ backgroundColor: "#FDF0F0" }}
            >
                <h1 className="text-2xl font-bold mb-4" style={{ color:"#144272" }}>
                    Triangle Area Calculator
                </h1>
                <div className="mb-4">
                    <label htmlFor="alas" className="block font-semibold mb-2" style={{ color: "#205295" }}>
                        Base:
                    </label>
                    <input
                        type="number"
                        id="alas"
                        value={alas}
                        onChange={(e) => setAlas(e.target.value)}
                        className="w-full p-2 border rounded shadow text-gray-600"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="tinggi" className="block font-semibold mb-2" style={{ color: "#205295" }}>
                        Height:
                    </label>
                    <input
                        type="number"
                        id="tinggi"
                        value={tinggi}
                        onChange={(e) => setTinggi(e.target.value)}
                        className="w-full p-2 border rounded shadow text-gray-600"
                    />
                </div>
                <div className="mt-4">
                    {luas > 0 && (
                        <p className="text-xl font-semibold" style={{ color: "#205295" }}>
                            Area of the Triangle: {luas}
                        </p>
                    )}
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={calculateArea}
                        className="text-white p-2 rounded"
                        style={{ backgroundColor: "#1D267D" }}
                    >
                        Calculate Area
                    </button>
                    <Link href="/">
                        <div
                            className="bg-blue-700 text-white text-center p-2 rounded hover:bg-blue-500 w-24"
                            style={{ alignSelf: "flex-end" }}
                        >
                            Back
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TriangleView;
