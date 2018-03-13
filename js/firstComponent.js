import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ],

         data2:'Username'
      }
      this.updateState = this.updateState.bind(this);
      this.showAlert = this.showAlert.bind(this);
   };

   updateState(e){
      this.setState({data2:e.target.value})      
   }	
	
   showAlert(){
      ReactDOM.findDOMNode(this.refs.myInput).focus();  
      alert("hello for the click");   
   }  
      

   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>	
            <Middle value={this.state.data2} change={this.updateState} updateStateProp={this.showAlert}/>
            <Content/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

class Middle extends React.Component{
   render(){
      return(
         <div>
            <input type="text" value={this.props.value} onChange={this.props.change} />
            <button onClick={this.props.updateStateProp}> Submit </button>
            <h4>{this.props.value}</h4>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text 2!!!</p>
         </div>
      );
   }
}
export default App;