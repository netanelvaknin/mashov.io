import React, {useState} from 'react';
import {Modal, Button, TextField, Skeleton, Select, MenuItem, Alert} from 'ui';
import styled from 'styled-components';

const StyledSelect = styled(Select)`margin-bottom: 3rem;`;

const StyledAlert = styled(Alert)`
  background: cyan;
`;

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [selectVal, setSelectVal] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const menuItems = [" בחר ערך בחר ערך מפ ערך מפבחר ערך מפ ערך מפבחר ערך", 1,2,3,4,5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="App">
        <Button variant="contained" onClick={() => setOpen(true)}>פתח</Button>
        <Button variant="contained" href="https://www.google.co.il">פתח</Button>
        <Modal open={open} onCloseModal={() => setOpen(false)}/>
        <TextField error helperText="הוראות איך למלא" placeholder="מלא כאן.." label="נסיון" value={value} onChange={(e) => setValue(e.target.value)} />
        <TextField helperText="הוראות איך למלא" multiLine placeholder="מלא כאן.." label="נסיון" value={value} onChange={(e) => setValue(e.target.value)} />
        <Skeleton width="100px" height="100px"/>

        <StyledSelect
            value={selectVal}
            label="בחר ערך"
            // error
            helperText="נא למלא"
            onChange={(val) => setSelectVal(val)}
        >
            {menuItems.map((i) => <MenuItem value={i} key={i}>{i}</MenuItem>)}
        </StyledSelect>
        <Button variant="outlined" onClick={() => setAlertOpen(true)}>Open alert</Button>
        <StyledAlert open={alertOpen}>
            lol
        </StyledAlert>
    </div>
  );
}

export default App;
