import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/products/product-1.html">Product</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        );
    }
}