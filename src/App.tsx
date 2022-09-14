import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Action, Crouch, Eat, Jump } from './app/actions';

function App() {
  const [actions, setActions] = useState<Action[]>([]);

  const addAction = (action: Action) => {
    setActions(prev => {
      return [...prev, action];
    })
  }

  const clearActions = () => {
    setActions([])
  }

  const execute = () => {
    actions.reduce(async (chain, currentAction) => {
      return chain.then(await currentAction.event)
    }, Promise.resolve()).finally(clearActions)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='Chain'>
          {actions.map((action, index) => {
            return <div key={index}>{action.name}</div>
          })}
        </div>
        <div className='Activities'>
          <div className='Action' onClick={() => addAction(Eat)}>Eat</div>
          <div className='Action' onClick={() => addAction(Jump)}>Jump</div>
          <div className='Action' onClick={() => addAction(Crouch)}>Crouch</div>
        </div>
        <div id='Execute' onClick={execute}>Execute</div>
      </header>
    </div>
  );
}

export default App;
