
/* That No working due to image rendering by API */

import { getNewsDetailsByID } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

const NewsDetailsPage = async ({ params }) => {
  const { id } =  params;
  console.log(id, "News details id");

  const news = await getNewsDetailsByID(id);
  console.log(news);

  return (
    <div className="container mx-auto my-8 ">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          {/* Author Info */}
          <div className="flex justify-between items-center bg-zinc-300 p-4">
            <div className="flex gap-1 items-center">
              <Image
                src={news.author?.img}
                alt={news.author?.name || "Author"}
                width={40}
                height={40}
                className="rounded-full"
              />

              <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p className="text-xs ">{news.author?.published_date}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl">
                <CiShare2 />
              </span>
              <span className="text-xl">
                <CiBookmark />
              </span>
            </div>
          </div>

          <h2 className="card-title">{news.title}</h2>
          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={300}
              height={300}
              
            />
          </figure>
          <p className="line-clamp-3">{news.details}</p>

          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <IoIosStar className="text-lg text-yellow-400" />
              {news.rating?.number}
              <IoEyeSharp className="text-lg" />
              {news.total_view}
            </div>

            <Link href={`/category/${news.category_id}`}>
              <button className="btn btn-outline text-white bg-pink-700">
                {" "}
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
