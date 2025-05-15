import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#0b3d91", // royal blue
        color: "#ffffff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000
    };

    const logoStyle = {
        fontSize: "26px",
        textDecoration: "none",
        color: "#ffffff",
        fontWeight: "700",
        letterSpacing: "1px",
        transition: "color 0.3s"
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        position: "relative",
        transition: "color 0.3s"
    };

    const cartCountStyle = {
        backgroundColor: "#ffffff",
        color: "#0b3d91", // royal blue contrast
        borderRadius: "12px",
        padding: "2px 8px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 0 0 2px #0b3d91"
    };

    const hoverStyle = {
        textDecoration: "underline",
        color: "#d1d1d1"
    };

    return (
        <header style={headerStyle}>
            <Link to="/" style={logoStyle} onMouseOver={(e) => e.target.style.color = "#d1d1d1"} onMouseOut={(e) => e.target.style.color = "#ffffff"}>
                MyShopping
            </Link>
            <Link to="/cart" style={cartLinkStyle} onMouseOver={(e) => e.target.style.color = "#d1d1d1"} onMouseOut={(e) => e.target.style.color = "#ffffff"}>
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}
