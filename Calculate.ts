import MarkupType = require("./MarkupType");
import MarginType = require("./MarginType");

class Calculate
{
    /**
    * Calculate the price from the cost and markup
    */
    public static GetPrice(cost: number, markup: number, markupType: MarkupType): number
    {
        // TODO: Multiple Markup Types

        switch (markupType)
        {
            case MarkupType.Amount:
                return cost + markup;
            case MarkupType.Percent:
                return cost + ((cost/100) * markup);
            default:
                throw "Invalid Markup Type";
        }
    }

    /**
    * Calculate the cost from the Price and margin
    */
    public static GetCost(price: number, margin: number, mginType: MarginType): number
    {
        switch (mginType)
        {
            case MarginType.Amount:
                return price - margin;
            case MarginType.Percent:
                return price - ((price/100) * margin);
            default:
                throw "Invalid Margin Type";
        }
    }

    /**
    * Calculate the markup from the price and cost
    */
    public static GetMarkup(price: number, cost: number, markupType: MarkupType): number
    {
        switch (markupType)
        {
            case MarkupType.Amount:
                return price - cost;
            case MarkupType.Percent:
                return 100 - ((cost / price) * 100);
            default:
                throw "Invalid Markup Type";
        }
    }

    /**
    * Calculate a currency value using a specified rate
    */
    public static ConvertCurrency(value: number, rate: number): number
    {
        return value * rate;
    }

    /**
    * Round a value to a specified number of decimal places
    */
    public static Round(value: number, decimalPlaces: number): number
    {
        if (decimalPlaces === 0)
        {
            return Math.round(value);
        }

        return Number(value.toFixed(decimalPlaces));
    }
}
export = Calculate;
