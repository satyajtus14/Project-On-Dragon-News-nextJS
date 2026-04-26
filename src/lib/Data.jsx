
export async function getCategories (){
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const dataCategories = await res.json()
  return dataCategories.data;
}


export async function getNewsByCategoryID (category_id)
{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const dataNewCategories = await res.json()
  return dataNewCategories.data;
}

export async function getNewsDetailsByID (news_id)
{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
  const dataNewsDetails = await res.json()
  return dataNewsDetails.data[0];
}
