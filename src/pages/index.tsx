import { Product } from '../components/Product';

export default function Home(): JSX.Element {
  const imgProduct = 'https://dummyimage.com/200x200/000/fff';
  const data: any = [
    {
      id: 1,
      namePrice: 'พารา',
      thumbnailSrc: imgProduct,
      price: 100,
      detail: 'momomomomom',
      sp: true,
    },
    {
      id: 2,
      namePrice: 'ยางลบ',
      thumbnailSrc: imgProduct,
      price: 200,
      sp: false,
    },
  ];

  const total = data[0].price + data[1].price;

  return (
    <div className='debug-screens'>
      <main className='container min-h-screen px-6 py-8 mx-auto'>
        {data.map((product: any) => (
          <Product
            key={product.id}
            namePrice={product.namePrice}
            thumbnailSrc={product.imgProduct}
            price={product.price}
            detail='แบกของหนักได้'
            sp={product.sp}
          />
        ))}
        <div>{total}</div>
      </main>
    </div>
  );
}
