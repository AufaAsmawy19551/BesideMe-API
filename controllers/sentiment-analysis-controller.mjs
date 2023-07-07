import Validatior from '../utils/validatorjs.mjs'
import SentimentAnalysisModel from '../machine-learning-models/sentiment-analysis-model.mjs'

export default {
  predict: async (req, res, next) => {
    try {
      const validation = await Validatior.validate(req.body, {
        text: 'required|string',
      })

      if (validation.failed) {
        return res.status(200).json({
          errors: validation.errors,
        })
      }

      const classifier = await SentimentAnalysisModel.getInstance()
      const result = await classifier(req.body.text)

      return res.status(200).json({
        data: result,
      })
    } catch (error) {
      next(error)
    }
  },
}
