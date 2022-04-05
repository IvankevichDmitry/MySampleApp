// 1.
import creatHeader from './components/Header/header'
import createMain from './components/Main/main'

// 2. 
let root = document.getElementById('root');

// 3. 
const createDOM = () => {
  const header = creatHeader()
  const main = createMain()

  root.appendChild(header)
  root.appendChild(main)
};

createDOM()


