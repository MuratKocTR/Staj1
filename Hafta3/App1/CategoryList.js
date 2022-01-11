import React, { Component } from "react"
import { ListGroup, ListGroupItem } from 'reactstrap'
export default class CategoryList extends Component {
    //props bir component ten başka bir componente data taşıma yöntemidir
    //state ise bir componentin datasıdır
    // constructor a ihtiyacımız yok...
    state = {
        categories: []
    };

    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(data => this.setState({ categories: data }));;
    }


    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h3>{this.state.counter}</h3>
                <ListGroup>
                    {
                    this.state.categories.map(category => (
                            <ListGroupItem active={category.categoryName === this.props.currentCategory ? true : false} 
                            onClick={() => this.props.changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>
                        ))
                    }
                </ListGroup>
                {/* <h4>{this.props.currentCategory}</h4> */}
            </div>
        );
    }
}