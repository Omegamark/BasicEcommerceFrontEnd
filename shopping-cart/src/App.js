import React from 'react'
import Product from './components/product'
import ProductForm from './components/productForm'
import Total from './components/productTotal'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: ""
    };

    this.fetchProductsWithFetchAPI = this.fetchProductsWithFetchAPI.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this);
    this.showProduct = this.showProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProductsWithFetchAPI()
  }

  fetchProductsWithFetchAPI = () => {
    this.setState({ ...this.state, isFetching: true });
    fetch("http://localhost:3000/getGoods")
      .then(response => response.json())
      .then(result => {
        this.setState({ productList: result, isFetching: false })
      })
      .then(console.log(this.state))
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  };

  calculateTotal(price) {
    console.log("PRICE: ", price)
    this.setState({
      total: this.state.total + Number(price)
    });
    console.log(this.state.total);
  }

  showProduct(info) {
    console.log(info);
    alert(info);
  }

  render() {
    if (!this.state.productList) return <p>loading...!!!!</p>;

    var component = this;
    var products = this.state.productList.map(function (product) {
      return (
        <Product
          name={product.name}
          image={product.image}
          price={product.price}
          info={product.info}
          handleShow={component.showProduct}
          handleTotal={component.calculateTotal}
        />
      );
    });

    return (
      <div>
        <ProductForm />
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}

export default App;
