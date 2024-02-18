import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function NoMatch() {
    return (
        <div>
            <Helmet>
                <title>Error 404 (Not Found)!!! | KPG Travel</title>
                <meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
            </Helmet>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
