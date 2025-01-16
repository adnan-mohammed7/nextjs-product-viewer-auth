import styles from "@/styles/About.module.css"

export default function about() {
    return (
        <>
            <img className={styles.image} src="/logo.png"></img>
            <div className={styles.organization}>
                <h1>FakeStoreAPI</h1>
                <p>This is a fake store API created to show some random products with images and description</p>
            </div>
            <div className={styles.products}>
                <h3>Products</h3>
                <p>It have many products like clothes, accessories, electronics and much more..</p>
            </div>
        </>
    );
}