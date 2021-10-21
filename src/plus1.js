import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector("#root")
const App = () => {
    return (
        <div className="container">
            <span>Father</span>
            <Son/>
        </div>
    )
}

class Son extends React.Component {
    constructor(props) {
        super(props)
        this.state = {number: 1}

    }

    add = () => {                                   //放在原型上，就可以使用{this.add直接调用}，箭头函数继承原来的this
        const data = this.state                   //这样可以消除直接修改state的警告
        this.setState(() => {
            return {number: data.number += 1}
        })
    }

    render() {
        return (
            <div>
                son:{this.state.number}
                <button onClick={this.add}>+1</button>
                <hr/>
                <Grandson/>
            </div>
            //或者()=>{this.add()}调用
        )
    }
}

const Grandson = (props) => {
    const [n, setState] = React.useState(3)
    return (
        <div>
            <span> grandson:{n}</span>
            <button onClick={() => setState(n + 1)}>+1</button>
        </div>
    )
}
ReactDOM.render(<App/>, root)
export default App
