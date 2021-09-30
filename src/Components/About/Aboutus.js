import React from 'react';

const Aboutus = () => {

    return (
        <div>

            <p className="text-center mt-5 p-4">What is it?
                Its an open online database of food meal recipes. There are many other sites online but none offered a nice API, so I wrote one myself

                How to use it with Kodi?
                You don't yet... but there is a very simple JSON API that any developer can use to write a simple add-on. The vision is to be able to use Kodi in my kitchen/bar area to look up recipes with the remote. Hopefully a developer will jump on board and write the add-on.

                Why?
                I basically want to bring Kodi into my kitchen. Recipe books are old school, there must be a better way!

                Features
                - High quality transparent PNG ingredients
                - Meal image uploads
                - Browse meals in sequence
                - Area and Categories

                Limitations
                There are only a few recipes in there at the moment but I am working on a way for users to add them easily. PM me if you want beta access to this feature.

                How can I help?
                Test the site, see if you find any bugs.

                Future
                Food tags, categories, food areas, ingredient filters</p>
        </div>
    );
};

export default Aboutus;