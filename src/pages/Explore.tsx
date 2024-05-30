import Navbar from "@/components/Navbar";
import BlogCard from "@/components/ui/BlogCard";

const Explore = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-28">
        <h1 className="text-5xl font-bold">Explore</h1>
        <h2 className="text-lg text-gray-500 mt-2 max-w-xl">
          Explore blogs on a wide range of topics, from technology and science
          to culture and lifestyle.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {Array.from({ length: 6 }, (_, i) => (
            <BlogCard
              key={i}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s"
              title="React"
              description="React is a JavaScript library for building user interfaces"
              hot={i === 0}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Explore;
