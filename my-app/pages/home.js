import styles from "@/styles/Home.module.css"
import Organization from "@/components/Organization"

export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products/');
    const data = await res.json();
  
    return { props: { staticPost: data } };
}

export default function Home(props){

    let result = []
    if(props.staticPost){
        props.staticPost.forEach(element => {
            result.push(<img className={styles.images} key={element.id} src={element.image} alt={element.title} />)
        });
    }
    return(
        <>
        <Organization/>
        <p className={styles.desc}>This is a fake store API which shows you details of some products</p>
        <div className={styles.mainImages}>
        {result}
        </div>
        </>
    );
}