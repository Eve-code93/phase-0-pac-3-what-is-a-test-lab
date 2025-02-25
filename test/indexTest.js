// test/indexTest.js

require('./root.js');

const { name, height, message } = require("../index.js");
const expect = require('expect'); // Ensure expect is required

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Susan");
    });
  });

  describe("Height", () => {
    it("is less than 40 and greater than 0", () => {
      expect(height).toBeGreaterThan(0); // Use toBeGreaterThan instead of toBeMoreThan
      expect(height).toBeLessThan(40);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toContain(name); // Use toContain instead of toInclude
      expect(message).toContain(height.toString());
    });
  });
});

