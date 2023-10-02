import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { inject } from '@vercel/analytics';

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
inject();