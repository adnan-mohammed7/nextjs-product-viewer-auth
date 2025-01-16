import styles from "@/styles/Organization.module.css";

export default function Organization(){
    return(
        <>
        <div className={styles.main}>
        <img className={styles.logo} src="/logo.png"></img>
        <h1>FakeStoreAPI</h1>
        </div>
        </>
    );
}