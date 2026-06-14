import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// StrictMode removed — it double-invokes effects which breaks GSAP ScrollTrigger
createRoot(document.getElementById('root')).render(
    <App />
)
