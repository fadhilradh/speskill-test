import styled from "styled-components";
import currencyFormatter from "currency-formatter";

const Content = ({ products, addItem, decreaseItem }) => {
  const priceArray = products.map(
    (product) => product.quantity * product.product.price
  );

  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <HeadRow>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </HeadRow>
        </thead>

        <tbody>
          {products.map((item) => (
            <Row key={item.product.code}>
              <ProductCell>
                <Image src={item.product.media_url} alt={item.product.name} />
                <Details>
                  <p style={{ color: "lightblue" }}>{item.product.code}</p>
                  <h4>{item.product.name}</h4>
                  <p>
                    {currencyFormatter.format(item.product.price, {
                      code: "IDR",
                    })}
                  </p>
                  <p style={{ color: "red" }}>{item.product.stock} in stock</p>
                </Details>
              </ProductCell>
              <QuantityCell>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ textAlign: "center", fontSize: "20px" }}>
                    {item.quantity}
                  </p>
                  <div style={{ margin: " 0 auto" }}>
                    <Button onClick={() => addItem(item)}> +</Button>
                    <Button onClick={() => decreaseItem(item)}> -</Button>
                  </div>
                </div>
              </QuantityCell>
              <PriceCell>
                {currencyFormatter.format(item.quantity * item.product.price, {
                  code: "IDR",
                })}
              </PriceCell>
            </Row>
          ))}
          <Total>
            <td
              colSpan="2"
              style={{ textAlign: "right", paddingRight: "30px" }}
            >
              TOTAL
            </td>
            <td>
              {currencyFormatter.format(
                priceArray.reduce((acc, curr) => acc + curr, 0),
                {
                  code: "IDR",
                }
              )}
            </td>
          </Total>
        </tbody>
      </table>
    </div>
  );
};

export default Content;

const HeadRow = styled.tr`
  background: black;
  width: 100%;
  color: white;
  font-size: 18px;
`;
const Row = styled.tr`
  width: 100%;
`;

const ProductCell = styled.td`
  display: flex;
  width: 70%;
`;

const QuantityCell = styled.td`
  width: 15%;
  margin: 0 auto;
`;

const PriceCell = styled.td`
  width: 15%;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
`;

const Details = styled.div`
  text-align: left;
  margin-left: 16px;
`;

const Total = styled.tr`
  background: black;
  color: white;
  font-size: 24px;
  width: 100%;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  font-size: 18px;
  margin: 0 auto;
`;
