import express from 'express';
import router from './src/routes/routes';

class App {
    app: express.Application;
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.set('port', 3000);
    }

    routes() {
        this.app.use('/api', router);
    }

}
export default new App().app;