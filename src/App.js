
import './App.css';
import BannerComponent from './components/banner/banner.component';
import FloatingComponent from './components/floating/floating.component';
import FooterComponent from './components/footer/footer.component';
import HeaderComponent from './components/header/header.component';
import LastComponent from './components/last/last.component';
import MenuComponent from './components/menu/menu.component';
import OthersComponent from './components/Others/others.component';
import SellingComponent from './components/selling/selling.component';
import TypesComponent from './components/types/types.compontent';
import WorkComponent from './components/work/work.component';


function App() {
 

  return (
    <div className='App'>
      <HeaderComponent />
      <MenuComponent />
      <BannerComponent />
      <SellingComponent />
      <TypesComponent />
      <OthersComponent />
      <WorkComponent />
      <FloatingComponent />
      <FooterComponent />
      <LastComponent />
    </div>
  );
}
export default App;
