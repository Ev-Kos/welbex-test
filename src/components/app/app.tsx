import { Background } from '../background/background';
import { Header } from '../header/header';
import { Info } from '../info/info';
import appStyles from './app.module.scss';

export default function App() {
  return (
    <section className={appStyles.content}>
      <Background />
      <Header />
      <Info />
    </section>
    
  )
}