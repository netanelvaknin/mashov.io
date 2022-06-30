import React, {useState} from 'react';
import {Modal, Button, TextField, Skeleton, Select, MenuItem} from 'ui';

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [selectVal, setSelectVal] = useState('');
  const menuItems = [" בחר ערך בחר ערך מפ ערך מפבחר ערך מפ ערך מפבחר ערך מפ ערך מפבחר ערך מפ ערך מפבחר ערך מפ ערך מפ ערך מפ", 1,2,3,4,5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="App">
        <Button variant="contained" onClick={() => setOpen(true)}>פתח</Button>
        <Button variant="contained" href="https://www.google.co.il">פתח</Button>
        <Modal open={open} onCloseModal={() => setOpen(false)}/>
        <TextField error helperText="הוראות איך למלא" placeholder="מלא כאן.." label="נסיון" value={value} onChange={(e) => setValue(e.target.value)} />
        <TextField helperText="הוראות איך למלא" multiLine placeholder="מלא כאן.." label="נסיון" value={value} onChange={(e) => setValue(e.target.value)} />
        <Skeleton width="100px" height="100px"/>

        <Select
            value={selectVal}
            label="בחר ערך"
            // error
            helperText="נא למלא"
            onChange={(val) => setSelectVal(val)}
        >
            {menuItems.map((i) => <MenuItem value={i} key={i}>{i}</MenuItem>)}
        </Select>
    </div>
  );
}

export default App;
