import _ from 'lodash'
import './style.less'
import Img from './dlam.jpg'

function component() {
    let element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    //Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')
    
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