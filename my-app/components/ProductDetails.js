import { useState } from "react";
import styles from "@/styles/ProductDetails.module.css"
import useSWR from "swr";
import { useAtom } from "jotai";
import { cartListAtom } from "@/store";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetails() {
    const [cartList, setCartList] = useAtom(cartListAtom)
    const { data, error } = useSWR('https://fakestoreapi.com/products/', fetcher);

    const [modalContent, setModalContent] = useState(null);
    function clicked(element) {
        setCartList(prevList =>[...prevList, element])
        setModalContent(element)
    }

    let result = []
    if (data) {
        data.forEach(element => {
            result.push(<tr onClick={() => { clicked(element) }} key={element.id} data-id={element.id}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.price}</td>
                <td>{element.description}</td>
                <td><img className={styles.images} src={element.image} alt={element.title}></img> </td>
                <td>{element.category}</td>
                <td>Rate: {element.rating.rate}, Count: {element.rating.count}</td>
            </tr>)
        });
    }
    return (
        <>
            {modalContent && (
                <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" style={{color: 'black'}}>Details</h5>
                                <button type="button" className="btn-close" onClick={() => setModalContent(null)} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <img className={styles.images} src={modalContent.image} style={{display: 'block', margin: '0px 162px'}}></img><br></br>
                                        {modalContent.description}<br /><br />
                                        <strong>Name:</strong> {modalContent.title}<br />
                                        <strong>Price$: </strong> {modalContent.price}<br />
                                    </li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setModalContent(null)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
                    {result}
                </tbody>
            </table>
        </>
    );
}