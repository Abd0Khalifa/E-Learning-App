// CheckoutPage.js
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from "sweetalert2";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { db } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";





function Checkout() {
    const navigate = useNavigate();
    const getCourseDetails = async (id) => {
        try {
            const docRef = doc(db, "courses", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                console.log("This course does not exist");
            }
        } catch (error) {
            console.error("Error fetching course details", error);
        }
    };

    const { id } = useParams();
    const [course, setCourse] = useState(null);

    const user = useSelector((state) => state.auth.user); // افترض أن `authSlice` يحفظ الـ user

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCourseDetails(id);
            setCourse(data);
        };

        fetchData();
    }, [id]);

    if (!course) {
        return (
            <div className="flex items-center justify-center w-full h-screen">
                <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
            </div>
        );
    }

    const handlePaymentSuccess = async (details) => {
        Swal.fire({
            title: "✅ Payment Successful!",
            text: `Thank you, ${details.payer.name.given_name}. Your payment was successful.`,
            icon: "success",
            confirmButtonText: "OK",
        }).then(() => {
            navigate("/myCourses"); // إعادة التوجيه بعد الضغط على "OK"
        });

        // إرسال الـ uid و courseId إلى Firebase
        if (user && user.uid) {
            try {
                const paymentRef = doc(db, "enrollments", `${user.uid}_${id}`);
                await setDoc(paymentRef, {
                    uid: user.uid,
                    courseId: id,
                    courseTitle: course.title,
                    price: course.price,
                    paymentDate: new Date(),
                });
                console.log("Enrollment successfully saved in Firebase!");
            } catch (error) {
                console.error("Error saving enrollment data:", error);
            }
        }
    };

    return (
        <>
            <NavBar />
            <main className="flex-grow pt-32">
                <div className="p-8 mb-8 bg-card-dark/30 w-full max-w-3xl mx-auto">
                    <div className="p-8 rounded-lg shadow-lg text-center glass-card sticky animate-on-scroll">
                        <h2 className="text-xl font-semibold text-white-700 mb-2">
                            You are purchasing:
                        </h2>
                        <h1 className="text-3xl font-bold text-main-color mb-6">
                            {course.title} Course
                        </h1>

                        <h3 className="text-xl font-bold mb-4">Price: ${course.price}</h3>

                        <PayPalScriptProvider
                            options={{
                                "client-id":
                                    "AZbq0YcBBFTztmJC48GBOF8TP4-kBLII7hEDR_PuqtmaOz91G2qDLQNJkrM21NlfH6_mbZ4or60FfS4g",
                            }}
                        >
                            <PayPalButtons
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: course.price || "10.00",
                                                },
                                            },
                                        ],
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then(handlePaymentSuccess);
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
            </main>
            <Footer />
        </>
    );
}

export default Checkout;
