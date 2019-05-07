import _ from 'lodash'
import './style.less'
import Img from './dlam.jpg'
import printMe from './print'

function component() {
    let element = document.createElement('div');

    let btn = document.createElement('button')
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    //Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')
    
    btn.innerHTML = 'Click me'
    btn.onclick = printMe

    element.appendChild(btn)

    let myImg = new Image()
    myImg.src = Img
    myImg.classList.add('img')
    element.appendChild(myImg)

    return element;
  }
  
  document.body.appendChild(component());

  console.log("hello world")

  let array1 = [1,2,3]
  let array2 = array1.map((n) => n+1)
  console.log(array2)