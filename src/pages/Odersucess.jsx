import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#121212", // Dark background for contrast
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif"
        },
        title: {
            fontSize: "3rem",
            color: "#9b4d96", // Neon Violet color
            marginBottom: "20px",
            textShadow: "0 0 15px #9b4d96, 0 0 25px #9b4d96, 0 0 35px #9b4d96"
        },
        message: {
            fontSize: "1.5rem",
            color: "#ffffff", // White for better readability
            marginBottom: "30px",
            textShadow: "0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.7)"
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#ff5c8d", // Soft pinkish neon color
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background 0.3s ease",
            textDecoration: "none",
            boxShadow: "0 0 10px #ff5c8d, 0 0 20px #ff5c8d",
            fontWeight: "bold"
        },
        buttonHover: {
            backgroundColor: "#ff33b3", // Lighter pink for hover
            boxShadow: "0 0 15px #ff33b3, 0 0 30px #ff33b3"
        }
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
        e.target.style.boxShadow = styles.buttonHover.boxShadow;
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = styles.button.backgroundColor;
        e.target.style.boxShadow = styles.button.boxShadow;
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a 
                href="/" 
                style={styles.button} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                Go to Home
            </a>
        </div>
    );
}

