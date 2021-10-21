import React from 'react';
import ReactDOM from 'react-dom';
const root = document.querySelector("#root2")
const App2 = () => {
    return (
        <div className="container">
            <span>Father</span>
            <Son2 message={{number: 100}}/>
        </div>
    )
}

class Son2 extends React.Component {

    render() {
        return (
            <div>
                son2:{this.props.message.number}
                <button >+1</button>
                <hr/>
                <Grandson2 message={{number:200}}/>
            </div>
            //或者()=>{this.add()}调用
        )
    }
}

const Grandson2 = (props) => {
    return (
        <div>
            <span> grandson:{props.message.number}</span>
            <button onClick={() => props.message.number + 1}>+1</button>
        </div>
    )
}
ReactDOM.render(<App2/>, root)
export default App2
