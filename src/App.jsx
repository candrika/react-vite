// App.jsx
import { useState, useEffect } from 'react';

import CkeditorWithFooter from './components/CkeditorWithFooter';

function App() {
    const [openNav, setOnenNav] = useState(false);

    useEffect(()=>{
        window.addEventListener(
            "resize",
            ()=>window.innerWidth >=960 && setOnenNav(false)
        )
    },[])



    return (
        <div className="App">
            <CkeditorWithFooter value={null}/>
        </div>
    );
}

export default App;
