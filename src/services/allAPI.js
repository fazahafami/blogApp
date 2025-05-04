import commonAPI from "./commonAPI"
import { serverUrl } from "./serverUrl"

//ADDing  blog  api call for add/edit blog
export const addAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverUrl}/blogs`,reqBody)
}

// getting all blogs 
export const getAllBlogsAPI=async(start,end)=>{
    return await commonAPI("GET",`${serverUrl}/blogs?_start=${start}&_end=${end}`)
}

// deleting a blog
export const deleteABlogAPI=async(id)=>{
    return await commonAPI("DELETE",`${serverUrl}/blogs/${id}`,{})
}
// getting singleblog details
export const getABlogAPI=async(id)=>{
    return await commonAPI("GET",`${serverUrl}/blogs/${id}`)
}

// updating singleBlog
export const updateBlogAPI=async(id)=>{
    return await commonAPI("PUT",`${serverUrl}/blogs/${id}`)
} 

// getting related blogs
export const getRelatedBlogsAPI=async(category)=>{
    return await commonAPI("GET",`${serverUrl}/blogs?category=${category}&_start=0&_end=3`)
}

// getting latest blogs
export const getLatestBlogAPI=async()=>{
    const totalBlog= await commonAPI("GET",`${serverUrl}/blogs`)
    return await commonAPI("GET",`${serverUrl}/blogs?_start=${totalBlog.data.length-4}&_end=${totalBlog.data.length}`)
}

// search
export const getSearchblogs=async(searchValue)=>{
    return await commonAPI("GET",`${serverUrl}/blogs?q=${searchValue}`)
}

// getting all category
export const getAllCategoryblogs=async(category)=>{
    return await commonAPI("GET",`${serverUrl}/blogs?category=${category}`)
}