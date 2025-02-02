import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from "sweetalert2";

const Checkout = () => {
    return (
        <PayPalScriptProvider options={{ "client-id": "AZbq0YcBBFTztmJC48GBOF8TP4-kBLII7hEDR_PuqtmaOz91G2qDLQNJkrM21NlfH6_mbZ4or60FfS4g " }}>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Checkout by PayPal 💳</h1>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: "10.00",
                                        },
                                    },
                                ],
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
                        onError={(err) => {
                            Swal.fire({
                                title: "⚠️ Payment Failed!",
                                text: "There was an issue with your payment. Please try again.",
                                icon: "error",
                                confirmButtonText: "Try Again",
                            })
                        }}
                    />
                </div>
            </div>
        </PayPalScriptProvider>
    );
};

export default Checkout;
