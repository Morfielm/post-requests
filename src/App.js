import React, { useState } from "react";
import { Radio } from "antd";

import { JsonPlaceholderTodoList } from "./components/JsonPlaceholderTodoList";
import { JsonServerTodoList } from "./components/JsonServerTodoList";

function App() {
  const [value, setValue] = useState(2);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <Radio.Group onChange={onChange} value={value} className="server-selector">
        <Radio value={1}>JSONPlaceholder</Radio>
        <Radio value={2}>JSONServer</Radio>
      </Radio.Group>
      {value === 1 && <JsonPlaceholderTodoList />}
      {value === 2 && <JsonServerTodoList />}
    </div>
  );
}

export default App;
