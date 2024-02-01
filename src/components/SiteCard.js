import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SiteCard(props) {
    return ( 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.text}
            </Card.Text>
        </Card.Body>
        <div className='d-flex align-self-baseline m-2 column-gap-2'>
            <Button 
                variant="primary" className="align-self-baseline" 
                href={props.siteLink}
                    >Visit Site</Button>
            <Button 
                variant="primary" 
                className="align-self-baseline"
                href={props.gitLink} 
                    >Github Repo</Button>
        </div>
        </Card>
     );
}

export default SiteCard;