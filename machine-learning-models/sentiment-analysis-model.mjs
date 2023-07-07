import { pipeline, env } from '@xenova/transformers';

class SentimentAnalysisModel {
  static #task = 'sentiment-analysis';
  static #model = 'Xenova/bert-base-multilingual-uncased-sentiment';
  static #instance = null;

  static async getInstance(progress_callback = null) {
    if(! this.#instance){
      env.cacheDir = './machine-learning-models/models';
      this.#instance = await pipeline(this.#task, this.#model);
    }

    return this.#instance;
  }
}

export default SentimentAnalysisModel;