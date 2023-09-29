import mongoose from 'mongoose';
import config from "../src/config/enviroment.config.js"
import logger from '../src/utils/logger.utils.js';

const mongoUrl = config.MONGO_URL;

const environment = async () => {
	try {
		await mongoose.connect(mongoUrl, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		logger.info('Mongo connected');
	} catch (err) {
		logger.error(`Mongo error: ${err}`);
	}
};

export default environment;