import { useRouter } from "next/router";
import useSWR from "swr";
import ListingDetails from "@/components/ListingDetails";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";

export default function Listing() {
    const router = useRouter();
    const { id } = router.query;
    const { data: listing, error, isLoading } = useSWR(`https://long-pear-millipede-kilt.cyclic.app/api/listings/${id}`);

    if (isLoading) {
        return null;
    } else {
        if (error || !listing) {
            return <Error statusCode={404} />
        } else {
            return (
                <>
                    <PageHeader text={listing.name} />
                    <ListingDetails listing={listing} />
                </>
            );
        }
    }
}