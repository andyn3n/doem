import { createRoot } from 'react-dom/client'
import './index.css'
import Tabs from 'https://andyn3n.github.io/doem/src/tabs.jsx' 
import HeaderRow from 'https://andyn3n.github.io/doem/header.jsx'
import Laptop from 'https://andyn3n.github.io/doem/laptop.jsx'

createRoot(document.getElementById('tabs')).render(
    <Tabs />
);

createRoot(document.getElementById('headerRow')).render(
    <HeaderRow />
);

createRoot(document.getElementById('footerRow')).render(
    <HeaderRow />
);

createRoot(document.getElementById('laptop')).render(
    <Laptop />
);