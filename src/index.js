import React from 'react';
import ReactDOM from 'react-dom';
const root=document.querySelector("#root")
const App=()=>{
    return (
        <div className="container">
           <Son />
        </div>
    )
}
class Son extends React.Component{
    constructor(props){
        super(props)
        this.state={number:1}
    }
    add(){
        const data=()=>{return{n:this.state.number+1}}
        this.setState(data())
    }
    render(){
        return (
            <div>
                {this.state.number}
                <button onClick={()=>this.add()}>+1</button>
            </div>
        )
    }
}






ReactDOM.render(<App/>,root)