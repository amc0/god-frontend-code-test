import { useRouter } from "next/router";

const Shop = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Shop: {pid}</p>;
};

export default Shop;
