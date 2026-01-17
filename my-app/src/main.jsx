import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './Common.css'
import App from './App.jsx'
// import Hello from './Hello.jsx'

// import FruitList, {ObjectName, ObjectArray} from './FruitList.jsx'

// import ConditionRendering from './ConditionalRendering.jsx'

import Prop from './Prop.jsx'


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* <App /> */}
    {/* <Hello /> */}

    {/* <FruitList /> */}
    {/* <ObjectName /> */}
    {/* <ObjectArray /> */}

    {/* <ConditionRendering /> */}

    <Prop name="dhruv"/>
    <Prop name="rahul" age={20}/>
    
  </StrictMode>,
)
