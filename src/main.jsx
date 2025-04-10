import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tabs from 'doem/src/tabs.jsx'
import HeaderRow from './doem/src/header.jsx'
import Laptop from './doem/src/laptop.jsx'

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