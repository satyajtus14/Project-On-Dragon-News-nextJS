
import { getNewsDetailsByID } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";


 export const generateMetadata = async ({params}) => {
    const {id} = await params;
    const news = await getNewsDetailsByID(id);

    return {
          title: news.title,
          description: news.details,
    }
 }

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsByID(id);

  if (!news) {
    return <h2 className="text-center text-2xl">News not found</h2>;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          {/* Author */}
          <div className="flex justify-between items-center bg-zinc-300 p-4">
            <div className="flex gap-2 items-center">
              {news.author?.img ? (
                <Image
                  src={news.author.img}
                  alt={news.author?.name || "Author"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              )}

              <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p className="text-xs">{news.author?.published_date}</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <span className="text-xl">
                <CiShare2 />
              </span>
              <span className="text-xl">
                <CiBookmark />
              </span>
            </div>
          </div>

          <h2 className="card-title">{news.title}</h2>

          {news.image_url && (
            <figure>
              <Image
                src={news.image_url}
                alt={news.title || "News image"}
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </figure>
          )}

          <p>{news.details}</p>

          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <IoIosStar className="text-lg text-yellow-400" />
                {news.rating?.number}
              </span>

              <span className="flex items-center gap-1">
                <IoEyeSharp className="text-lg" />
                {news.total_view}
              </span>
            </div>

            <Link href={`/category/${news.category_id}`}>
              <button className="btn btn-outline text-white bg-pink-700">
                <FaArrowLeftLong />
                All news in this category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;