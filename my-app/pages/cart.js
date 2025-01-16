import styles from "@/styles/ProductDetails.module.css"
import { useAtom } from "jotai";
import { cartListAtom } from "@/store";

export default function Cart(){
    const [cartList, setCartList] = useAtom(cartListAtom)
    let total = 0
    let output = []
    cartList.forEach(element => {
        output.push(<tr key={element.id} data-id={element.id}>
            <td>{element.id}</td>
            <td>{element.title}</td>
            <td>{element.price}</td>
            <td>{element.description}</td>
            <td><img className={styles.images} src={element.image} alt={element.title}></img> </td>
            <td>{element.category}</td>
            <td>Rate: {element.rating.rate}, Count: {element.rating.count}</td>
        </tr>)
        total += element.price
    });
    return(
        <>
        <h1>Cart Page</h1>
        <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>BodyAttributes</th>
                    </tr>
                </thead>
                <tbody>
                    {output}
                </tbody>
            </table>
            <h3>Total: {total}</h3>
        </>
    );
}