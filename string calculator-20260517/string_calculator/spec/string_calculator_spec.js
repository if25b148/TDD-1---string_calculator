describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return number itself for a single number', function() {
	expect(calculator.add('1')).toEqual(1);
	});

	it('should return sum of two numbers separated by comma', function() {
	expect(calculator.add('1,2')).toEqual(3);
});
});
