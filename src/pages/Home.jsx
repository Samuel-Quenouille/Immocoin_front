import {Link} from 'react-router-dom';
import PropertiesList from '../components/PropertiesList';

export default function Home() {

    return (
        <header>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">ImmoCoin</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Bienvenue sur <b>ImmoCoin</b> : votre destination ultime pour toutes vos transactions immobilières en ligne ! Que vous recherchiez la maison de vos rêves ou que vous souhaitiez vendre votre propriété, notre marketplace immobilière vous offre une plateforme exceptionnelle pour répondre à vos besoins.</p>
                </div>
                <Link to="/createpost">Créer une annonce</Link>
            </div>
            <div className="container">
                <PropertiesList />
            </div>
        </header>

    )
}