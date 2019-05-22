describe("fizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should return fizz if divisible by 3", function() {
    expect(fizzBuzz.check(3)).toEqual("fizz");
  });

  it("should return buzz if divisible by 5", function() {
    expect(fizzBuzz.check(5)).toEqual("buzz");
  });

  it("should return the number if not divisible by 3 or 5", function() {
    expect(fizzBuzz.check(4)).toEqual(4);
  });

  it("should return fizzbuzz if divisible by 3 and 5", function() {
    expect(fizzBuzz.check(15)).toEqual("fizzbuzz");
  });
});
