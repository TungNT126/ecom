const API_URL = "https://api.escuelajs.co/api/v1/products";

type Product = {
  id: number;
  title: string;
  rating: number;
  price: number;
  image_url: string;
};

async function FetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}`);
  const data = await res.json();

  return data;
}

export default FetchProducts;
