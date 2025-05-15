import { useState } from "react";
import { products } from "../date/product.js";
import ProductCard from "../components/ProductCard";
import { FaStoreAlt } from "react-icons/fa"; // 🎯 Fancy store icon

export default function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filtered = products.filter(
        (p) =>
            (category === "All" || p.category === category) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const styles = {
        container: {
            padding: "30px",
            fontFamily: "'Dancing Script', cursive", // Cursive and elegant font
            backgroundColor: "#f9f9ff",
            minHeight: "100vh",
            color: "#222"
        },
        heading: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3rem", // Bigger font size for impact
            color: "#8a2be2", // Blue-violet color
            gap: "15px",
            marginBottom: "40px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)", // Subtle text shadow
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer"
        },
        filters: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "40px",
            flexWrap: "wrap"
        },
        input: {
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "10px",
            border: "1px solid #ddd",
            minWidth: "240px",
            fontFamily: "'Segoe UI', sans-serif", // Clean font for input
            transition: "all 0.3s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        },
        inputFocus: {
            borderColor: "#8a2be2",
            boxShadow: "0 0 8px rgba(138, 43, 226, 0.5)"
        },
        select: {
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "10px",
            border: "1px solid #ddd",
            minWidth: "220px",
            fontFamily: "'Segoe UI', sans-serif",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        },
        selectFocus: {
            borderColor: "#8a2be2",
            boxShadow: "0 0 8px rgba(138, 43, 226, 0.5)"
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px"
        }
    };

    return (
        <div style={styles.container}>
            <h1
                style={styles.heading}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
                <FaStoreAlt size={35} color="rebeccapurple" />
                Explore My Products
            </h1>
            <div style={styles.filters}>
                <input
                    type="text"
                    placeholder="🔎 Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ ...styles.input, ...(search ? styles.inputFocus : {}) }}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ ...styles.select, ...(category !== "All" ? styles.selectFocus : {}) }}
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <div style={styles.grid}>
                {filtered.map((product) => (
                    <ProductCard key={product.id + product.name} product={product} />
                ))}
            </div>
        </div>
    );
}

