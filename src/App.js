import { Layout } from './components/layout/Layout';
import './App.css';
import { useState } from 'react';
import { Counter } from './components/counter/Counter';
import {DemoForm} from './components/demo-form/Demo-form';
import { TaskForm } from './components/task-form/Task-form';
function App() {
  return (
    <div className="App">
      <Layout></Layout>
      {/* <Counter /> */}
      {/* <DemoForm/> */}
    </div>

  );
}

export default App;
