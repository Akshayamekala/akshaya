import './App.css'
import Test from './Test'
import Test1 from './Test1'
function App() {
  
  return (
    <div>  
       <h1 style={{color:"red"}}>This is inline style sheet</h1>    
      <Test/>
      <Test1/>
      <Test2/>
    </div>
  )
}
function Test2(){
  return(
    <h2>This is Test2 functional component</h2>
  )
}

export default App