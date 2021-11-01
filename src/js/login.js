import '../css/login.css'
import '../css/login.less'
// import '../css/test.css'

function login(){
    let H2o = document.createElement('H2')
    H2o.innerText = 'webpack用例'
    H2o.className = 'title'
    return H2o
}

document.body.appendChild(login())

