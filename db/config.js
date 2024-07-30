const mongoose=require('mongoose');
// mongoose.connect("mongodb+srv://ankitrajgupta007:042jWdK0Dd9T01nA@cluster0.kto9ur1.mongodb.net/");

// 042jWdK0Dd9T01nA

// mongoose
//     .connect("mongodb+srv://ankitrajgupta007:042jWdK0Dd9T01nA@cluster0.kto9ur1.mongodb.net/")
//     .catch (error => console.log(error));

    const connectDB = async () => {
        try {
          await mongoose.connect("mongodb+srv://ankitrajgupta007:042jWdK0Dd9T01nA@cluster0.kto9ur1.mongodb.net/");
          console.log("MongoDB connected");
        } catch (error) {
          console.error("MongoDB connection error:", error);
        }
      };

      connectDB()