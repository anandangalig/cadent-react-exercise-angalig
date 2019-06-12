import React from 'react';

const renderGroceryTable = list => {
  return list.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>{item.deliveryMethod}</td>
      </tr>
    );
  });
};

const ListTable = ({ groceryList }) => {
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
          {renderGroceryTable(groceryList)}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;
