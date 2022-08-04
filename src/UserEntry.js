import React from 'react';

class MyComponent extends React.Component {
  getInitialState() {
    return {
      items: [],
    };
  }

  addItem() {
    const { items } = this.state;
    this.setState({
      // use concat to make sure items is a new array
      items: items.concat('something'),
    });
  }

  render() {
    return (
      <div>
        {this.state.items.map((item, i) => <p key={i}>{item}</p>)}
        <button onClick={this.addItem}>Add Item</button>
      </div>
     );
   }
 }

 export default MyComponent;