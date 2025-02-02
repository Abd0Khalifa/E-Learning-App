import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from "sweetalert2";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

const Checkout = ({ courseName = "Name" }) => {
    return (
        <>
            <NavBar />
            <main className="flex-grow pt-32 flex items-center justify-center">
                <section className="py-12 bg-card-dark/30 w-full max-w-3xl">
                    <div className="container mx-auto px-4 sm:px-6 ">
                        <div className="p-8 rounded-lg shadow-lg text-center glass-card sticky  animate-on-scroll">
                            <h2 className="text-xl font-semibold text-white-700 mb-2">
                                You are purchasing:
                            </h2>
                            <h1 className="text-3xl font-bold text-main-color mb-6">
                                {courseName} Course
                            </h1>

                            <PayPalScriptProvider options={{ "client-id": "AZbq0YcBBFTztmJC48GBOF8TP4-kBLII7hEDR_PuqtmaOz91G2qDLQNJkrM21NlfH6_mbZ4or60FfS4g" }}>
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [{ amount: { value: "10.00" } }],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            Swal.fire({
                                                title: "✅ Payment Successful!",
                                                text: `Thank you, ${details.payer.name.given_name}. Your payment was successful.`,
                                                icon: "success",
                                                confirmButtonText: "OK",
                                            });
                                        });
                                    }}
                                    onError={() => {
                                        Swal.fire({
                                            title: "⚠️ Payment Failed!",
                                            text: "There was an issue with your payment. Please try again.",
                                            icon: "error",
                                            confirmButtonText: "Try Again",
                                        });
                                    }}
                                />
                            </PayPalScriptProvider>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Checkout;
