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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Venus",
          distance: 71708,
          imageUrl:
            "https://cdn.cdnparenting.com/articles/2019/03/13161307/515581927-H.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mars",
          distance: 110573,
          imageUrl:
            "https://img1.cgtrader.com/items/673053/44dc505abe/mars-planet-3d-model-low-poly-obj-3ds-fbx-c4d.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jupiter",
          distance: 619256,
          imageUrl:
            "https://www.google.com/search?q=jupiter+planet+images&tbm=isch&ved=2ahUKEwjPz7KZzszqAhUUlKQKHUYiD9sQ2-cCegQIABAA&oq=jupiter+planet+images&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyBggAEAcQHjIGCAAQBRAeMgYIABAFEB46CAgAEAcQBRAeUPzRCVj-2wlgoOAJaABwAHgAgAE-iAHzApIBATeYAQCgAQGqAQtnd3Mtd2l6LWltZw&sclient=img&ei=MJMNX8_3FZSokgXGxLzYDQ&bih=976&biw=1920#imgrc=IL2SzY4zHT4gfM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saturn",
          distance: 1346593,
          imageUrl:
            "https://astrobutterfly.com/wp-content/uploads/2020/03/astrology-march-2020-saturn-aquarius.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uranus",
          distance: 3004248,
          imageUrl:
            "https://www.zastavki.com/pictures/originals/2017Space_Seventh_blue_planet_Uranus_112963_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Neptune",
          distance: 4395927,
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
