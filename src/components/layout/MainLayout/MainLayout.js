import Header from '../Header/Header';
import Container from '../Container/Container';
import MainPlayer from '../MainPlayer/MainPlayer';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => (
  <main>
    <Header />
    <Container>{children}</Container>
    <MainPlayer />
    <Footer />
  </main>
);

export default MainLayout;
