"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "planets",
      [
        {
          name: "Mercury",
          distance: 103256,
          imageUrl:
            "https://solarsystem.nasa.gov/system/stellar_items/image_files/2_feature_1600x900_mercury.jpg",
          description:
            "The planet that is toxic for your skin and sebs favorite! please edit me! I am a poor description :(",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Venus",
          distance: 71708,
          imageUrl:
            "https://cdn.cdnparenting.com/articles/2019/03/13161307/515581927-H.jpg",
          description:
            "known to throw very heavy tempers once a month - advise using chocolate icecream and korean drama series untill tempers are over",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mars",
          distance: 110573,
          imageUrl:
            "https://img1.cgtrader.com/items/673053/44dc505abe/mars-planet-3d-model-low-poly-obj-3ds-fbx-c4d.jpg",
          description:
            "A fierce competitor of the distant planet Twixus-maximus, the two planet empires have been at war since the dawn of mankind - go mars!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jupiter",
          distance: 619256,
          imageUrl:
            "https://www.google.com/search?q=jupiter+planet+images&tbm=isch&ved=2ahUKEwjPz7KZzszqAhUUlKQKHUYiD9sQ2-cCegQIABAA&oq=jupiter+planet+images&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyBggAEAcQHjIGCAAQBRAeMgYIABAFEB46CAgAEAcQBRAeUPzRCVj-2wlgoOAJaABwAHgAgAE-iAHzApIBATeYAQCgAQGqAQtnd3Mtd2l6LWltZw&sclient=img&ei=MJMNX8_3FZSokgXGxLzYDQ&bih=976&biw=1920#imgrc=IL2SzY4zHT4gfM",
          description: "a less impressive version of Saturn",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saturn",
          distance: 1346593,
          imageUrl:
            "https://astrobutterfly.com/wp-content/uploads/2020/03/astrology-march-2020-saturn-aquarius.jpg",
          description:
            "the king among planets! it has a top-notch Spa - amazing sushi and some of the most invigorating spanish paelia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uranus",
          distance: 3004248,
          imageUrl:
            "https://www.zastavki.com/pictures/originals/2017Space_Seventh_blue_planet_Uranus_112963_.jpg",
          description:
            "widely known for its corny yet highly effective jokes - pretty cool planet has around 200 mega-solar magnatic storms a day",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Neptune",
          distance: 4395927,
          description:
            "the waterplanet named after the God, this planet has the biggest waterbody in our solar system. travelers going to this planet are urged to read the 'how to swim for dummys' booklet while traveling to their destination ",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("planets", null, {});
  },
};
