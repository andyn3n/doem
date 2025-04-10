import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './doem/index.css'
import Tabs from './doem/tabs.jsx'
import HeaderRow from './doem/header.jsx'
import Laptop from './doem/laptop.jsx'

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