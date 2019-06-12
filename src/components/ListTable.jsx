import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeItem, selectItem, deselectItem } from '../ducks/groceries';

const renderGroceryTable = ({ currentState, removeItem, selectItem, deselectItem }) => {
  return currentState.list.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>{item.deliveryMethod}</td>
        <td>
          <button
            onClick={() => {
              removeItem(item.id);
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
              selectItem(item.id);
            }}
          >
            select
          </button>
          <button
            onClick={() => {
              deselectItem(item.id);
            }}
          >
            deselect
          </button>
        </td>
      </tr>
    );
  });
};

const ListTable = props => {
  return (
    <div className="listTable">
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Delivery Method</th>
          </tr>
          {renderGroceryTable(props)}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ groceries }) => {
  return { currentState: groceries };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeItem,
      selectItem,
      deselectItem,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListTable);
