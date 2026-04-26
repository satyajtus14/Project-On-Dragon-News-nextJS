import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryID } from "@/lib/Data";



const NewsCategoryPage = async({params}) => {
    const {id} = await params;
    console.log(id,"Params Response");

      const categories = await getCategories();
  console.log(categories.news_category,"data fetching for Categories to Homepage");


  const newsByCategory= await getNewsByCategoryID(id);
  console.log(newsByCategory,'News by id');

  return (
   <div className="grid grid-cols-12 gap-4 container mx-auto my-15">
   
   <div className=" col-span-3">
    <LeftSideBar categories={categories} activeId={id} />
   </div>
   <div className="font-bold col-span-6">
    <h2 className="font-bold text-lg"> News By Category</h2>
    
       <div className="space-y-4">
        { newsByCategory.length > 0 ?
      newsByCategory.map((n) => {
        return <NewsCard key={n._id} news={n} ></NewsCard>
      }) : <h2 className='font-bold text-4xl text-center my-7 '>No News Found</h2>
    }
    </div>
    
   </div>
   <div className=" col-span-3">
   <RightSidebar /> 
   </div>
     
   </div>

  );
};

export default NewsCategoryPage;

