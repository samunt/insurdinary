import Link from "next/link";
const Navbar = () => {
    const style = {
        display: "flex",
        background: "grey",
        justifyContent: "space-between",
        padding: "1rem"
    }
    return (
    <div style={style}>
        <Link href="/about">
            <a>About page</a>
        </Link>
        <Link href="/contact">
            <a>contact page</a>
        </Link>
    </div>
    )
};

export default Navbar

