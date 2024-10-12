export async function fetchMessage() {
    try {
      const response = await fetch("http://localhost:5000/api/message", {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;  // Return the parsed JSON data
    } catch (error) {
      console.error("Error fetching message:", error);
      throw error;  // Re-throw for further handling if needed
    }
  }
  