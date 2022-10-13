import Card from './Card';

  function Home({products, addToCart, cartItems}){
  return (
    <>
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
            </div>
          </div>
        </header>
      <Card products={products} addToCart={addToCart} cartItems={cartItems}/>

    </>
  );
  }

  export default Home