import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';

import ProductCardList from 'components/ProductCard/List/List.jsx';

const fetchProdcuts = async () => {
  const url = "http://localhost:3000/api/releases/1424/products.json?limit=80&offset=0";


  const formData = new FormData();
  formData.append("type", "");

  formData.append("divisions[]", "Short Sleeve");
  formData.append("divisions[]", "Dress");
  formData.append("divisions[]", "Long Sleeve");
  formData.append("divisions[]", "Pants");
  formData.append("divisions[]", "Tank");
  formData.append("divisions[]", "Walkshorts");
  formData.append("divisions[]", "Bags");
  formData.append("divisions[]", "Accessories");

  formData.append("collections[]", "Unassigned");

  formData.append("filter_tags[]", "Accessories");
  formData.append("filter_tags[]", "Dress");
  formData.append("filter_tags[]", "Jumpers");
  formData.append("filter_tags[]", "Knits");
  formData.append("filter_tags[]", "Pants/Denim");
  formData.append("filter_tags[]", "Tees Printables");
  formData.append("filter_tags[]", "Walkshorts");
  formData.append("filter_tags[]", "Wovens");

  formData.append("months[]", "2019-12-01");
  formData.append("months[]", "2020-01-01");

  formData.append("sizes[]", "XS");
  formData.append("sizes[]", "S");
  formData.append("sizes[]", "M");
  formData.append("sizes[]", "L");
  formData.append("sizes[]", "24");
  formData.append("sizes[]", "25");
  formData.append("sizes[]", "26");
  formData.append("sizes[]", "27");
  formData.append("sizes[]", "28");
  formData.append("sizes[]", "29");
  formData.append("sizes[]", "30");
  formData.append("sizes[]", "31");
  formData.append("sizes[]", "O/S");

  formData.append("genders[]", "Female");

  formData.append("age_groups[]", "Adult");

  formData.append("min_price", "39");
  formData.append("max_price", "110");

  const baseOptions = {
    credentials: "include",
    "Content-Type": "application/json",
    method: "GET"
  };

  // const optionsForPost = {
  //   ...baseOptions,
  //   method: "POST",
  //   body: formData
  // };

  try {
    let rawResponse = await fetch(url, baseOptions);

    return rawResponse.json();
  } catch(exception) {
    console.error("Exception: ", exception);
  }
}

const App = props => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProdcuts().then(apiResponse => setProducts(apiResponse.pr));
  }, []);

  return(
    <Container fluid className={ props.className }>
      <Row className="justify-content-center">
        <ProductCardList products={ products } />
      </Row>
    </Container>
  );
}

export default App;
