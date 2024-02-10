import Card from 'react-bootstrap/Card';

export default function PageHeader({text}) {
    return (
        <>
            <Card className="bg-light">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    {text}
                </Card.Body>
            </Card>
            <br />
        </>
    );
}