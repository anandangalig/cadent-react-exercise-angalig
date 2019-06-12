import React from 'react';
import { connect } from 'react-redux';

const ListSelection = ({ selectedItem }) => {
  const { id, name, deliveryMethod, category } = selectedItem;
  if (id !== 0) {
    return (
      <div className="listSelection">
        <p>
          <strong>Item ID: </strong>
          {id}
        </p>
        <p>
          <strong>Name: </strong>
          {name}
        </p>
        <p>
          <strong>Category: </strong>
          {category}
        </p>
        <p>
          <strong>Delivery Method: </strong>
          {deliveryMethod}
        </p>
      </div>
    );
  }

  return <div className="listSelection">Please select an item from the list ------></div>;
};

const mapStateToProps = ({ groceries }) => {
  return { selectedItem: groceries.selectedItem };
};
export default connect(
  mapStateToProps,
  {},
)(ListSelection);
