import MetaComponent from '../components/common/MetaComponent';
import Wrapper from '../components/layout/Wrapper';
import HomeMain from './homes/home-1';


const metadata = {
  title: 'Home-1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

export default function Home() {
  return (
    <Wrapper>
      <MetaComponent meta={metadata} />
      <HomeMain/>
    </Wrapper>
    
  )
}