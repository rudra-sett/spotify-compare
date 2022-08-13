import React from 'react';


class UserEntryList extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      userURLS: props.value,
      update: props.callback,      
    }    
    this.updateItem = this.updateItem.bind(this);
  }

  addInputField() {      
    this.setState({
      // use concat to make sure items is a new array
      userURLS: [...this.state.userURLS, ""]
    });
  }

  removeInputField() {   
    this.state.userURLS.pop()
    this.setState({
      // use concat to make sure items is a new array
      userURLS: this.state.userURLS
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
    }, () => {this.state.update(this.state.userURLS)});
  }


  render() {
    return (
      <div className='user-entry-list'>        
        {this.state.userURLS.map((item, index) => <input className='user-entry-field' key={index} onChange = {(event) => this.updateItem(index, event)}/>)}
        <div>
          <button className = "add-user-button" onClick={() => this.addInputField()}>add</button>
          <button className = "remove-user-button" onClick={() => this.removeInputField()}>remove</button>
        </div>
      </div>
     );
   }
 }

 export default UserEntryList;