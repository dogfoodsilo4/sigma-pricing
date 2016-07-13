/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../typings/mocha/mocha.d.ts" />

import chai = require('chai');

import Calculate = require('../Calculate');
import MarkupType = require('../MarkupType');
import MarginType = require('../MarginType');

/**
* These tests cover the basics
*/
describe("Calculate", () =>
{
    describe("GetPrice()", () =>
    {
        let cost = 80.50;
        let markup = 19.75;

        it("should get the price from the cost using amount markup type", (done) =>
        {
            let markupType = MarkupType.Amount;
            chai.expect(Calculate.GetPrice(cost, markup, markupType)).to.equal(100.25);
            done();
        });

        it("should get the price from the cost using percent markup type", (done) =>
        {
            let markupType = MarkupType.Percent;
            chai.expect(Calculate.GetPrice(cost, markup, markupType)).to.equal(96.39875);
            done();
        });
    });

    describe("GetCost()", () =>
    {
        let price = 120.30;
        let margin = 11.25;

        it("should get the cost from the price using amount margin type", (done) =>
        {
            let marginType = MarginType.Amount;
            chai.expect(Calculate.GetCost(price, margin, marginType)).to.equal(109.05);
            done();
        });

        it("should get the cost from the price using percent margin type", (done) =>
        {
            let marginType = MarginType.Percent;
            chai.expect(Calculate.GetCost(price, margin, marginType)).to.equal(106.76625);
            done();
        });
    });

    describe("GetMarkup()", () =>
    {
        let price = 120;
        let cost = 75.50;

        it("should get the markup from the price and cost for amount markup", (done) =>
        {
            let result = Calculate.GetMarkup(price, cost, MarkupType.Amount);

            chai.expect(result).to.equal(44.50);
            done();
        });

        it("should get the markup from the price and cost for percent markup", (done) =>
        {
            let result = Calculate.GetMarkup(price, cost, MarkupType.Percent);

            chai.expect(result).to.equal(37.083333333333336);
            done();
        });
    });

    describe("ConvertCurrency()", () =>
    {
        it("should correctly convert a positive value using a specified exchange rate", (done) =>
        {
            let value = 55.96;
            let rate = 1.4335;
            var result = Calculate.ConvertCurrency(value, rate);

            chai.expect(result).to.equal(80.21866);
            done();
        });

        it("should correctly convert a negative value using a specified exchange rate", (done) =>
        {
            let value = -235.60;
            let rate = 0.75;
            var result = Calculate.ConvertCurrency(value, rate);

            chai.expect(result).to.equal(-176.7);
            done();
        });
    });

    describe("Round()", () =>
    {
        let value = 1.34562;

        it("should round to a whole number if decimal places is set to zero", (done) =>
        {
            let decimalPlaces = 0;

            var result = Calculate.Round(value, decimalPlaces);

            chai.expect(result).to.equal(1);
            done();
        });

        it("should correctly round down a value given a specified number of decimal places", (done) =>
        {
            let decimalPlaces = 4;

            var result = Calculate.Round(value, decimalPlaces);

            chai.expect(result).to.equal(1.3456);
            done();
        });

        it("should correctly round up a value given a specified number of decimal places", (done) =>
        {
            let decimalPlaces = 3;
            var result = Calculate.Round(value, decimalPlaces);

            chai.expect(result).to.equal(1.346);
            done();
        });

        it("should return the full value if the specified number of decimal places is greater than the number of decimals in the value", (done) =>
        {
            let decimalPlaces = 8;

            var result = Calculate.Round(value, decimalPlaces);

            chai.expect(result.toString()).to.equal("1.34562");
            done();
        });
    });

});
