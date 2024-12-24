import React from "react";

const UserCard = ({ name, email, avatar }) => {
  return (
    <div style={styles.card}>
      <img src={avatar} alt="Avatar" style={styles.avatar} />
      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.email}>{email}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    background: "#f1f1f1",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    gap: "15px",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#00f",
  },
  info: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
  },
  email: {
    margin: 0,
    fontSize: "14px",
    color: "#555",
  },
};

export default UserCard;
