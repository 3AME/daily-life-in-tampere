import imgLidl from "../../assets/images/SupurMarket/Lidl.png";
import imgSale from "../../assets/images/SupurMarket/Sale.jpg";
import imgPrisma from "../../assets/images/SupurMarket/Prisma.jpg";
import imgKCity from "../../assets/images/SupurMarket/KCity.jpg";
import imgKSuper from "../../assets/images/SupurMarket/KSuper.jpg";
import imgTokmanni from "../../assets/images/SupurMarket/Tokmanni.png";
/**
 *  SuperMarketData.js
 *  Data of supermarket in Tampere.
 */
const SuperMarketData = [
    {
        id:"s1",
        Title: "Lidl",
        Img: imgLidl,
        location: "https://www.google.com/maps/search/lidl/@61.4902072,23.8300228,14z/data=!3m1!4b1",
        Features: "Household goods, food at affordable prices.",
        Discount: "Check bonus information in an app called 'Lidl plus'.",
    },
    {
        id:"s2",
        Title: "Sale",
        Img: imgSale,
        location: "https://www.google.com/maps/search/sale/@61.4901882,23.7774931,12z/data=!3m1!4b1",
        Features: "Expensive than elsewhere, but you can get 60% off products that are 30% off after 9pm, especially salads and bread",
        Discount: "Checkout after 9pm and take products with the '-30%' label.",
    },
    {
        id:"s3",
        Title: "Prisma",
        Img: imgPrisma,
        location: "https://www.google.com/maps/search/lidl/@61.4902072,23.8300228,14z/data=!3m1!4b1",
        Features: "Department store, electrical appliances, food, decoration, home.",
        Discount: "You can get points on your S Bank card, 100 points for 1 Euro.",
    },
    {
        id:"s4",
        Title: "K-citymarket",
        Img: imgKCity,
        location: "https://www.google.com/maps/search/k-citymarket/@61.4901523,23.777493,12z/data=!3m1!4b1",
        Features: "Household goods, food, Cosmetics, clothes.",
        Discount: "You can get points on your K membership card, 70 euros for 2.45.(Just for student membership card)",
    },
    {
        id:"s5",
        Title: "K-Supermarket",
        Img: imgKSuper,
        location: "https://www.google.com/maps/search/K-Supermarket/@61.4901163,23.7774929,12z/data=!3m1!4b1",
        Features: "Household goods, food, Lego",
        Discount: "You can get points on your K membership card, 70 euros for 2.45.(Just for student membership card)",
    },
    {
        id:"s6",
        Title: "Tokmanni",
        Img: imgTokmanni,
        location: "https://www.google.com/maps/search/tokmanni/@61.4900804,23.7774928,12z/data=!3m1!4b1",
        Features: "Household goods, food, clothes, Cosmetics.",
        Discount: "Keep an eye on the website for discounts, they are always on sale, some discounts require membership.",
    },
]

export default SuperMarketData;