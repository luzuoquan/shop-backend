import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import sequelize from './db';
import router from './routes';

const env = process.env.NODE_ENV;

const app = new Koa();

app.use(bodyParser());

app.use(router.routes());

app.listen(3001, () => {
	sequelize
	  .authenticate()
	  .then(() => {
	    console.log('Connection has been established successfully.');
	  })
	  .catch(err => {
	    console.error('Unable to connect to the database:', err);
	  });
})