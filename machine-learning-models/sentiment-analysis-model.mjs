import { pipeline, env } from '@xenova/transformers';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class SentimentAnalysisModel {
  static #task = 'sentiment-analysis';
  static #model = 'Xenova/bert-base-multilingual-uncased-sentiment';
  static #instance = null;

  static async getInstance(progress_callback = null) {
    if(! this.#instance){
      // env.cacheDir = path.join(process.cwd(), 'machine-learning-models/models');
      // env.cacheDir = './machine-learning-models/models';
      this.#instance = await pipeline(this.#task, this.#model);
    }

    return this.#instance;
  }
}

export default SentimentAnalysisModel;