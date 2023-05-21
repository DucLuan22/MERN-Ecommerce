import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import { Spinner } from "flowbite-react";
import CarouselStore from "../../components/Store/CarouselStore";
import Footer from "../../components/Footer";
import TopProductGallery from "../../components/Store/TopProductGallery";

const Home = () => {
  const { isLoading, products } = useSelector((state) => state.product);
  return (
    <main className="w-screen">
      {/* Slider */}
      <section className="text-center">
        <div className="h-[400px] md:h-[500px] overflow-y-hidden xl:h-[600px] rounded-none">
          <CarouselStore />
        </div>
      </section>
      {/* Product */}
      <section className="bg-gray-300 py-5">
        <div className="text-center mb-5">
          <h1 className="font-bold text-4xl text-blue-900">Top Products</h1>
        </div>
        <TopProductGallery />
      </section>
      <section className=" bg-gray-300">
        <div className="text-center bg-slate-50">
          <h1 className="font-bold text-4xl text-blue-900">Catalogs</h1>
          {isLoading ? (
            <Spinner color="info" aria-label="Info spinner example" />
          ) : (
            <Pagination data={products} />
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
