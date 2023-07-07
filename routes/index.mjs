import express from 'express';
import sentiment_analysis from '../controllers/sentiment-analysis-controller.mjs'; 

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sentiment-analysis', sentiment_analysis.predict);

export default router
