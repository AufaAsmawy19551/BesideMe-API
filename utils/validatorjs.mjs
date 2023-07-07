import Validator from 'validatorjs';

export default {
	validate: async (data, rules) => {
		const validation = new Validator(data, rules);

		let passes = () => {};
		let fails = () => {};

		const promise = new Promise((resolve) => {
			passes = () => {
				resolve(true);
			};
			fails = () => {
				resolve(false);
			};
		});

		validation.checkAsync(passes, fails);

		const result = await promise;

		return {
			failed: !result,
			errors: validation.errors.all(),
		};
	}
};
