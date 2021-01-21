import React from 'react'

class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            price: 0,
            info: "",
            image: ""
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('A form was submitted: ' + this.state);
        console.log("STATE: ", this.state)

        fetch('http://localhost:3000/postGoods', {
            method: 'post',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(this.state)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>add new product</h3>
                <div className="row form-group">
                    <label className="col-sm-2  col-sm-form-label">name:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="name"
                            value={this.state.value}
                            className="form-control"
                            placeholder="What is the product?"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <label className="col-sm-2  col-sm-form-label">price:</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            name="price"
                            value={Number(this.state.value)}
                            className="form-control"
                            placeholder="e.g.) 100"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <label className="col-sm-2  col-sm-form-label">info:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="info"
                            value={this.state.value}
                            className="form-control"
                            placeholder="Tells us about the product"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <label className="col-sm-2  col-sm-form-label">image link:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="image"
                            value={this.state.value}
                            className="form-control"
                            placeholder="Please add image URL"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <div className="offset-2 col-10">
                        <button className="btn btn-outline-primary">create product</button>
                    </div>
                </div>

                <hr />
            </form>
        );
    }
}

export default ProductForm