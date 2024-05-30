import { cn } from "@/lib/utils";
import { ChevronsRight, Flame } from "lucide-react";

interface BlogCardProps {
  img: string;
  title: string;
  description: string;
  hot?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  img,
  title,
  description,
  hot = false,
}) => {
  return (
    <div className="border border-gray-300 shadow-sm rounded-xl p-4 space-y-2">
      <img
        className="shadow-sm object-cover rounded-xl w-full h-60"
        src={img}
        alt={title}
      />
      <div className="flex-between">
        <h3 className="text-2xl font-medium">{title}</h3>
        {hot && (
          <p className="text-sm bg-red-300 text-white font-medium px-3 py-1 rounded-full flex-center shadow-sm animate-pulse">
            <Flame className="w-4 h-4" />
            HOT!
          </p>
        )}
      </div>
      <p className="text-gray-500">{description}</p>
      <a
        href="#"
        className="text-sm font-medium text-blue-500 bg-blue-100 bg-opacity-30 hover:bg-opacity-100 transition py-1 px-2 rounded-lg flex-center gap-1 group"
      >
        Read more
        <ChevronsRight className="w-4 h-4 group-hover:translate-x-1 transition" />
      </a>
    </div>
  );
};

export default BlogCard;
