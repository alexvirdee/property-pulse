'use client';
import { useEffect, useState } from "react";
import PropertyCard from '@/components/PropertyCard';
import Spinner from "@/components/Spinner";

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    // const properties = await fetchProperties();

    // // Sort properties by date
    // properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    useEffect(() => {
        // Fetch properties from database
        const fetchProperties = async () => {
            try {
                const res = await fetch('/api/properties');

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await res.json();

                setProperties(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }


        fetchProperties();
    }, [])

  return loading ? (
    <Spinner loading={loading} />
  ) :  (
    <section className="px-4 py-6">
    <div className="container-xl lg:container m-auto px-4 py-6">
      {properties.length === 0 ? (
        <p>No properties found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      )}
    </div>
  </section>
  )
}

export default Properties