import { pipeline, env } from '@xenova/transformers';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { mkdirp } from 'mkdirp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class SentimentAnalysisModel {
  static #task = 'sentiment-analysis';
  static #model = 'Xenova/bert-base-multilingual-uncased-sentiment';
  static #instance = null;

  static async getInstance(progress_callback = null) {
    if (!this.#instance) {
      mkdirp('/tmp/huggingface/models', '0777', function (err) {

        // path exists unless there was an error
        console.log('path exists unless there was an error');

      });
      // env.cacheDir = path.join(process.cwd(), 'models');
      env.cacheDir = '/tmp/huggingface/models';
      this.#instance = await pipeline(this.#task, this.#model);
    }

    return this.#instance;
  }
}

export default SentimentAnalysisModel;