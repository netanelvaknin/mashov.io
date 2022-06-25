import React, {useState} from 'react';
import {Modal, Button, TextField} from './ui';

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="App">
        <Button variant="contained" onClick={() => setOpen(true)}>פתח</Button>
        <Button variant="contained" href="https://www.google.co.il">פתח</Button>
        <Modal open={open} onCloseModal={() => setOpen(false)}/>
        <TextField helperText="הוראות איך למלא" placeholder="מלא כאן.." label="נסיון" value={value} onChange={(e) => setValue(e.target.value)} />
        <TextField helperText="הוראות איך למלא" multiLine placeholder="מלא כאן.." label="נסיון" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default App;
