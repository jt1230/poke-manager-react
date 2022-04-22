import HOMELOGO from '../images/home-logo.png'
import './Home.css'

const Home = () => {
	return(
		<section className='home'>
			<img src={HOMELOGO} alt='' />
			<div className='shadow'></div>
		</section>
	)
}
export default Home