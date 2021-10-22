import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector("#root5")

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {number: 1},
            width: null,
            visible:true
        }
        this.divRef = React.createRef()
    }

    add = () => {
        const data = this.state
        this.setState(() => {
            return {number: data.user.number += 1}
        })
    }
    change=()=>{
        const data=this.state
        this.setState(()=>{return{visible:data.visible=true}})
    }
    change2=()=>{
        const data=this.state
        this.setState(()=>{return{visible:data.visible=false}})
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.user.number <= 5
    }

    componentDidMount() {
        // const demo=document.querySelector("#xxx")
        const demo = this.divRef.current
        const {width} = demo.getBoundingClientRect()
        this.setState({width})
    }

    componentDidUpdate() {
        console.log("更新了")
    }

    render() {
        return (
            <div>
                <div id="xxx" ref={this.divRef}>{this.state.user.number} </div>
                <button onClick={this.add}>+1</button>
                <div>{this.state.width}</div>
                <hr/>
                <div>
                   <button onClick={this.change}>
                       展示
                   </button>
                    <button onClick={this.change2}>
                        不展示
                    </button >

                    <Son message={this.state.visible} />
                </div>
            </div>
        )
    }
}
class Son extends React.Component{
    componentWillUnmount() {
        console.log("执行了")
        console.log("毁灭吧")
    }
    render(){
        return this.props.message?(<div>我是Son组件</div>):null
    }
}
ReactDOM.render(<App/>, root)
export default App