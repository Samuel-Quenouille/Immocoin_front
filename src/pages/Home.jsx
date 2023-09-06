import {Link} from 'react-router-dom';
import Header from "../components/Header"
import Bottomheader from "../components/Bottomheader"
import PropertiesList from '../components/PropertiesList';

export default function Home() {

    return (
        <header>
            <Header />
            <Bottomheader/>
            <div className="container">
                <PropertiesList />
            </div>
        </header>

    )
}