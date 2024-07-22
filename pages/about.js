import Link from "next/link";
import {Card} from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export function getStaticProps() {
    return new Promise((resolve,reject)=>{
      fetch("https://listing-api-dh93.onrender.com/api/listings/10267144").then(res=>res.json()).then(data=>{
        resolve({ props: { listing: data } })
      })
    })
}

export default function About(props) {
    return (
        <>
            <PageHeader text="About the Developer: Hyerang Cho"/>
                <Card>
                    <Card.Body>
                        <p>My name is Hyerang Cho and I am from South Korea. I came to Canada in 2018 to explore new adventures. 
                        I graduated from George Brown College with a degree in early childhood education and 
                        worked at the childcare for two years before entering Seneca college for a new challenge. 
                        I'm currently in the fourth semester of Computer Programming at Seneca College.</p> 
                        <p>Most of my cousins work in the IT field and they all work from home. Since I was too 
                        exhausted from taking ttc every day and taking care of children, I decided to change my 
                        major that I can work from home. Working with comupter and programming seemed fun to me 
                        so I chose this major. Learning new languages is definitely challenging, but I've been enjoying it 
                        so far. I want to be a Web developer and my goal is to make a website like Google that 
                        provides useful information and anyone can use comfortably. Or I would like to make a 
                        website for kids which includes educational contents.</p><p>My hobby is watching movies and 
                        I enjoy watching romance comedy, teen, Disney, and Marvel movies. When I was in Korea, 
                        I didn't like sitting still and watching movies, but since I came to Canada, I started 
                        watching movies to improve my English skills and became interested. My life goal is to 
                        travel around the world.</p>
                        <p>
                            One of the places that I would like to visit is the:
                            <Link href="/listing/10267144"> "IPANEMA LUXURY PENTHOUSE with MAID"</Link>
                        </p>
                    </Card.Body>
                    <ListingDetails listing={props.listing} />  
                </Card>
        </>
    );
}


