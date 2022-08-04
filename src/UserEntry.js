import React from 'react';


class UserEntryList extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      userURLS: ["one","two","three"]
    }
  }

  addInputField() {      
    this.setState({
      // use concat to make sure items is a new array
      userURLS: [...this.state.userURLS, ""]
    });
  }

  removeInputField() {   
    const tempArray = this.state.userURLS;
    tempArray.pop();
    this.setState({
      // use concat to make sure items is a new array
      userURLS: tempArray
    });    
  }

  updateItem(index,event) {
    this.setState({
      // use concat to make sure items is a new array
      userURLS: this.state.userURLS.map((item,i) => {
        if (i === index){
          return event.target.value;
        }
        return item;})
    });
    console.log(this.state.userURLS)
  }

  render() {
    return (
      <div className='user-entry-list'>
        {/* {console.log(this.state.userURLS)} */}
        {this.state.userURLS.map((item, index) => <input className='user-entry-field' key={index} onChange = {(event) => this.updateItem(index, event)}/>)}
        <div>
          <button class = "add-user-button" onClick={() => this.addInputField()}>add</button>
          <button class = "remove-user-button" onClick={() => this.removeInputField()}>remove</button>
        </div>
      </div>
     );
   }
 }

 export default UserEntryList;