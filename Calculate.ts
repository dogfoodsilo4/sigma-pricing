import MarkupType = require("./MarkupType");
import MarginType = require("./MarginType");

class Calculate
{
    /**
    * Calculate the price from the cost and markup
    */
    public static GetPrice(cost: number, markup: number, markupType: MarkupType): number
    {
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
    public static GetMarkup(price: number, cost: number, markupType: MarkupType)
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
    public static ConvertCurrency(value: number, rate: number)
    {
        return value * rate;
    }

    // TODO: Multiple Markup Types

    // TODO: Rounding

}
export = Calculate;
