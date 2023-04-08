import { Background } from '../background/background';
import { Header } from '../header/header';
import appStyles from './app.module.css';

export default function App() {
  return (
    <div className={appStyles.content}>
      <Background />
      <Header />
    </div>
    
  )
}