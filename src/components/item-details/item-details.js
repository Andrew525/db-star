import React, { Component } from 'react';
import './item-details.css';
import Spinner from "../../spinner/spinner";
import ErrorButton from "../error-button";

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        image: null
    };

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId ||
            prevProps.getData !== this.props.getData ||
            prevProps.getImageUrl !== this.props.getImageUrl) {
            this.setState({ loading: true });
            this.updateItem();
        }
    }

    updateItem = () => {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId).then((item) => {
            this.setState({
                item,
                loading: false,
                image: getImageUrl(item)
            });
        });
    };

    render() {
        const { item, loading, image } = this.state;
        if (!item) {
            return <span>Select a item from a list</span>
        }

        const content = loading ?
            <Spinner/> :
            <>
                <img className="item-image"
                     src={ image }/>
                <div className="card-body">
                    <h4>{ item.name }</h4>
                    <ul className="list-group list-group-flush">
                        { React.Children.map(
                            this.props.children,
                            (i) => React.cloneElement(i, { item }))
                        }
                    </ul>
                    <ErrorButton/>
                </div>
            </>;

        return (
            <div className="item-details card">
                { content }
            </div>
        );
    }
}

export const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{ label }</span>
            <span>{ item[field] }</span>
        </li>
    );
};