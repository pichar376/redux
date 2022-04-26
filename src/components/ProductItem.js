const ProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data;
  return (
    <div style={{ border: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      {/* en esta linea de abajo no use la funcion flecha para addToCart y me pasmo la pantalla del servidor ni siqiuiera me dejo ver los errores dure varias horas en resolverlo */}
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default ProductItem;
