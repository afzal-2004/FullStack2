import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connectionInstace = await mongoose.connect(
      `${process.env.MONGODB_URI}/mern`
    );
    console.log(
      `\n Mongo Db Connected !! DB HOST :${connectionInstace.connection.host} `
    );
  } catch (error) {
    console.log(`Mongo Db connection Error `, error);
    process.exit(1);
  }
};
export default ConnectDB;
