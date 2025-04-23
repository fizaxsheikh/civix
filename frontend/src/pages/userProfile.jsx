import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams(); // grabs user ID from URL
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:5001/civix-4f64a/us-central1/api/user/${id}`);
        if (!res.ok) throw new Error("User not found");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUser();
  }, [id]);

  if (error) return <p> {error}</p>;
  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Zip Code: {user.zipCode}</p>
      <p>Civic Impact Score: {user.civicImpactScore}</p>
      <p>Badges: {user.badges?.join(", ") || "None"}</p>
      <p>Reminders: {user.calendarPreferences?.reminderTime}</p>
    </div>
  );
}