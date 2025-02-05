import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from "sweetalert2";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Checkout() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const docRef = doc(db, "courses", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCourse(docSnap.data());
        } else {
          console.log("This course does not exist.");
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
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
      navigate("/myCourses"); // Redirect after the user clicks "OK"
    });

    if (!user || !user.uid) {
      console.error("❌ User is not logged in or UID is missing!");
      Swal.fire({
        title: "⚠️ Error",
        text: "Your payment was successful, but we could not enroll you in the course. Please log in again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const enrollmentRef = doc(db, "enrollments", `${user.uid}_${id}`);
      await setDoc(
        enrollmentRef,
        {
          uid: user.uid,
          courseId: id,
          courseTitle: course.title || "Untitled",
          price: course.price || 0,
          paymentDate: new Date().toISOString(),
        },
        { merge: true }
      );

      console.log("✅ Enrollment successfully saved in Firebase!");
    } catch (error) {
      console.error("❌ Error saving enrollment data:", error);
      Swal.fire({
        title: "⚠️ Error Saving Enrollment",
        text: "Payment was successful, but we couldn't enroll you in the course. Please contact support.",
        icon: "error",
        confirmButtonText: "OK",
      });
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
