import { useEffect, useState } from "react";
import { getArticles, getUser } from "../api";
import { useParams } from "react-router-dom";
import UserProfile from "./UserProfile"
import ArticleList from "./ArticleList";

const UserPage = () =>{
    const [user, setUser] = useState({})
    const [err, setErr] = useState(null)
    const {username}=useParams()

    useEffect(()=>{
        getUser(username)
        .then(({user})=>{
            setErr(null)
            setUser(user)
            // return user
        })
        .catch((err)=>{
            setErr(err)
        })
    }, [username])

    if (err) {
        return (
          <section>
            <h2>{err.request.status}</h2>
            <p>{err.message}</p>
          </section>
        );
      }
    
      if(user){
        return (
          <div>
            <UserProfile user = {user}/>
            <h2 className="sectionHeading">{user.name}'s Articles</h2>
            {/* <SortBy/> */}
            <ArticleList author = {user.username}/>
          </div>
        
      )}
}

export default UserPage