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

});
