import { useEffect, useState } from "react";
import { getUsers } from "../api";
import UserCard from "./UserCard";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then(({users}) => {
        console.log(users)
        setErr(null);
        setIsLoading(false);
        setUsers(users);
        return users;
      })
      .catch((err) => {
        setErr(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading!!!</h2>;
  }

  if (err) {
    return (
      <section>
        <h2>{err.request.status}</h2>
        <p>{err.message}</p>
      </section>
    );
  }

  if (users) {
    return (
      <ol className="articleList">
        {users.map((user, index) => {
          return <UserCard key={user.username} user={user} />;
        })}
      </ol>
    );
  }
}
export default UsersList;
