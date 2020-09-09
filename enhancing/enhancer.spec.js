const en = require('./enhancer.js');
// test away!

describe('🧪 Enhancer unit test', () => {
	it('Runs Function Repairs', () => {
		const rustyItem = {
			name: 'bronze sword',
			enhancement: 10, // 0-20
			durability: 50, //0-100
		};

		expect(en.repair(rustyItem)).toEqual({
			name: 'bronze sword',
			enhancement: 10, // 0-20
			durability: 100, //0-100
		});
	});

	it('Runs Function Success', () => {
		const rustyItem = {
			name: 'bronze sword',
			enhancement: 20, // 0-20
			durability: 50, //0-100
		};

		expect(en.success(rustyItem)).toEqual({
			name: 'bronze sword',
			enhancement: 20, // 0-20
			durability: 50, //0-100
		});
	});

	it('Runs Function Fail', () => {
		const RI1 = {
			name: 'bronze sword',
			enhancement: 5, // 0-20
			durability: 50, //0-100
		};
		const RI2 = {
			name: 'bronze sword',
			enhancement: 15, // 0-20
			durability: 10, //0-100
		};
		const RI3 = {
			name: 'bronze sword',
			enhancement: 17, // 0-20
			durability: 50, //0-100
		};

		expect(en.fail(RI1)).toEqual({
			name: 'bronze sword',
			enhancement: 5, // 0-20
			durability: 45, //0-100
		});
		expect(en.fail(RI2)).toEqual({
			name: 'bronze sword',
			enhancement: 15, // 0-20
			durability: 0, //0-100
		});
		expect(en.fail(RI3)).toEqual({
			name: 'bronze sword',
			enhancement: 16, // 0-20
			durability: 40, //0-100
		});
	});
});
