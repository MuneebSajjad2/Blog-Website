import mongoose from 'mongoose';

const URL = "mongodb+srv://Muneeb:YaAlmuqadim0786@blogweb.kwx7q.mongodb.net/BLOG?retryWrites=true&w=majority";

const connection = async() => {
    try {
           await mongoose.connect(URL, {useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true} );
            console.log("MongoDB connection successful");
        
    } catch (error) {
        console.log("MongoDB connection failed " + error);
    }
}

export default connection;