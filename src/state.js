import React from 'react';
import ReactDOM from 'react-dom';

const root3 = document.querySelector("#root3")

const App3 = () => {
    return (
        <div className="container">
            <span>Father3</span>
            <Son3/>
        </div>
    )
}

class Son3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                number: 1,
                gender: "male",
                age: 18
            },
            phone: "110",
            xxx: {
                yyy: {zz: "aa"}
            }
        }
    }

    add = () => {
        // const data = this.state                 //复制地址，这里后续操作并没有对地址中的内容进行修改所以这样直接复制对象地址也没问题
        // const data={...this.state}                 // ...操作符复制
       const data =Object.assign({},this.state)     //3种方法都一样
       //让setState 通知更新同时传一个新对象给他
        this.setState(() => {
            return {
                // user:{                                      //这么写就必须把之前的值复制过来不然会丢失
                //     ...this.state.user,
                //     number:this.state.user.number+=1}
                number: data.user.number += 1,                 //没必要写成上面那样哪里变了就写哪里就行了其他值不会丢失

            }
        })
    }
    // add=()=>{
    //     this.setState((state)=>{
    //         return {...state,
    //             number:this.state.user.number+=1}
    //     })
    // }


    render() {
        return (
            <div>
                <div>gender:{this.state.user.gender}</div>
                <div>age:{this.state.user.age}</div>
                <div>son3:{this.state.user.number}</div>
                <div>son3:{this.state.phone}</div>
                <div>son3:{this.state.xxx.yyy.zz}</div>
                <button onClick={this.add}>+1</button>
                <hr/>
                <Grandson3/>
            </div>
            //或者()=>{this.add()}调用
        )
    }
}

const Grandson3 = () => {
    const [n, setState] = React.useState(3)
    return (
        <div>
            <span> grandson3:{n}</span>
            <button onClick={() => setState(n + 1)}>+1</button>
        </div>
    )
}
ReactDOM.render(<App3/>, root3)
export default App3
