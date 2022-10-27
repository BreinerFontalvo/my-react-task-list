import Header from './components/Header'
import './App.css'
import TaskList from './components/TaskList'
import Task from './components/Task'

function App() {
  return (
    <div class="container">
      <Header/>
      <TaskList/>
      <Task/>
    </div>
  )
}

export default App
