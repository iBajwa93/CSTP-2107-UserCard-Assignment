import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import data from "../data/assignmentData.json";

const AssignmentPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data[0].data);
  }, []);

  return (
    <div style={styles.container}>
      <h1>Users</h1>
      <div style={styles.grid}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={`${user.first_name} ${user.last_name}`}
            email={user.email}
            avatar={user.avatar}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  // 3 USERS per row HORIZONTALLY
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
};

export default AssignmentPage;
