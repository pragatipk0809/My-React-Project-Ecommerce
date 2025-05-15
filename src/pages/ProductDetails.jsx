import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "50px auto",
            padding: "30px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            backgroundColor: "#1a1a1a", // Dark black background
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            color: "#fff", // Default text color to white for contrast
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "20px",
            border: "3px solid #9b4d96", // Violet border for image
        },
        name: {
            fontSize: "2.5rem", // Increased font size for product name
            marginBottom: "10px",
            color: "#9b4d96", // Neon violet color for product name
            textShadow: "0 0 10px #9b4d96", // Glow effect for the product name
        },
        description: {
            fontSize: "1.2rem", // Slightly larger description text
            marginBottom: "15px",
            color: "#ccc", // Light grey description for contrast
            lineHeight: "1.6", // Better line spacing for readability
        },
        price: {
            fontSize: "1.5rem", // Larger font size for price
            fontWeight: "bold",
            color: "#ff00ff", // Bright pink/violet for price
            marginBottom: "20px",
            textShadow: "0 0 8px #ff00ff", // Glow effect on price
        },
        button: {
            padding: "12px 25px",
            fontSize: "1.2rem", // Increased font size for button
            backgroundColor: "#9b4d96", // Neon violet color for button
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.2s ease",
            textTransform: "uppercase", // Uppercase button text for impact
        },
        buttonHover: {
            backgroundColor: "#6a2e8e", // Darker violet for hover effect
            transform: "scale(1.05)", // Slight scale effect on hover
        },
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
        e.target.style.transform = styles.buttonHover.transform;
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = styles.button.backgroundColor;
        e.target.style.transform = "scale(1)"; // Reset scale on mouse leave
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}

