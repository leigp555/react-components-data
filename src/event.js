import React from 'react';
import ReactDOM from 'react-dom';

const app4 = document.querySelector("#root4")
const App4 = () => {
    return (<div>
        event事件绑定测试
        <Component/>
    </div>)
}


class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {n: 1}
        this.add2 = () => {                          //方法绑定在构造函数构造的新对象上
            const data = {...this.state}
            this.setState(() => {
                return {n: data.n += 1}
            })
        }
    }

    add3 = () => {                          //函数绑定在构造函数构造的新对象上之语法糖写法是add2的语法糖 这样写的好处就是不用在事件调用时担心this指向window了
        const data = {...this.state}
        this.setState(() => {
            return {n: data.n += 1}
        })
        this.setState(() => {         //写成函数的形式就可以进行两次setState了（这里就是变成了加2   ）
            return {n: data.n += 1}
        })
    }

    add() {                                  //写法一绑定在构造函数原型上
        const data = {...this.state}
        this.setState(() => {
            return {n: data.n += 1}
        })
    }

    render() {
        return (
            <div>
                {this.state.n}
                <button onClick={this.add3}>+1</button>
            </div>
            //如果add方法不是箭头函数写法那么必须用箭头函数方法调用eg: onClick=()=>add()
        )
    }
}

const demo = new Component()
console.dir(demo)
ReactDOM.render(<App4/>, app4)
export default App4