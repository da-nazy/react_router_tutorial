import { useParams,useLocation } from "react-router"

function Post() {
    // how to fetch id from the url 
    console.log(useParams);
  console.log(useLocation());
 const query= new  URLSearchParams(useLocation().search);
    const {id}=useParams();
    
    return (
        <>
       <h2> id is ={id}</h2>
       <h2>{query.get("first")}</h2>
       <h2>{query.get("last")}</h2>
        </>
    )
}

export default Post
