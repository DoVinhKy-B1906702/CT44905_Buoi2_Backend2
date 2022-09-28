const app = require('./app');
const config = require('./app/config');
const MongoDB = require('./app/utils/mongodb.util')

// start server
async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log('Connected success');
        
        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is starting now on port ${PORT}`);
        })
    } catch (error) {
        console.log('Connected failure !', error);
        process.exit();
    }
}

startServer();