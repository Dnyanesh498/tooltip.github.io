import './App.css';

import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
     <Tooltip position="left" content="I am in left">
        <button>left</button>
      </Tooltip>
      <Tooltip position="top" content="I am  at the top">
        <button>top</button>
      </Tooltip>
      <Tooltip position="right" content="I am in right">
        <button>right</button>
      </Tooltip>
      <Tooltip position="bottom" content="I am at the bottom">
        <button>bottom</button>
      </Tooltip>
      
     
     
    </div>
  );
}

export default App;
