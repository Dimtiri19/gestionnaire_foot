import Selection from "../models/selectionModel.js";

const fetchSelection = async () => {
    try {
      const users = await Selection.find({}, { name: 1, formation: 1, team: 1 });
  
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
  
      throw error;
    }
  };

  export { fetchSelection};

