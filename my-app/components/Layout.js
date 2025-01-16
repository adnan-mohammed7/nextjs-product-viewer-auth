import Link from 'next/link';
import { useAtom } from 'jotai';
import { cartListAtom } from '@/store';
import { readToken, removeToken } from '@/lib/authenticate';
import { useRouter } from 'next/router';

export default function Layout(props) {
  let token = readToken();
  const router = useRouter();

  function logout() {
    removeToken();
    router.push('/');
  }
  const [cartList, setCartList] = useAtom(cartListAtom)
  return (
    <>
      <h1>Navigation</h1>
      <Link href="/">Main</Link> | <Link href="/about">About</Link> | <Link href="/home">Home</Link> | <Link href="/products">All Products</Link> | <Link href="/cart">Shopping Cart ({cartList.length})</Link> | {!token && <Link href={"/login"}>Login</Link>} {token && <Link href={"/login"} onClick={logout}>Logout</Link>}
      <hr />
      <br />
      {props.children}
      <br />
    </>
  );
}