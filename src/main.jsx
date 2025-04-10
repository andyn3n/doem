import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './doem/index.css'
import Tabs from './tabs.jsx'
import HeaderRow from './header.jsx'
import Laptop from './laptop.jsx'

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