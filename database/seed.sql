-- \c travel_blog


INSERT INTO destinations (city, country, continent)
VALUES (
  '',
  'Cyprus',
  'Europe'
);

INSERT INTO destinations (city, country, continent)
VALUES (
  'London',
  'England',
  'Europe'
);

INSERT INTO destinations (city, country, continent)
VALUES (
  'New York',
  'United States',
  'North America'
);

INSERT INTO posts (article, image, destinations_id)
VALUES (
  'Cyprus, officially the Republic of Cyprus, is an island country in the Eastern Mediterranean and the third largest and third most populous island in the Mediterranean. Cyprus is located south of Turkey, west of Syria and Lebanon, northwest of Israel, north of Egypt, and southeast of Greece.',
  'https://www.roughguides.com/wp-content/uploads/2015/05/area-map-of-cyprus.png',
  1
);

INSERT INTO posts (article, image, destinations_id)
VALUES (
  'London is the capital and most populous city of England and the United Kingdom. Standing on the River Thames in the south east of the island of Great Britain, London has been a major settlement for two millennia. It was founded by the Romans, who named it Londinium. London`s ancient core, the City of London, largely retains its 1.12-square-mile (2.9 km2) medieval boundaries. Since at least the 19th century, "London" has also referred to the metropolis around this core, historically split between Middlesex, Essex, Surrey, Kent and Hertfordshire, which today largely makes up Greater London, a region governed by the Mayor of London and the London Assembly.',
  'https://www.stgiles-international.com/app/webroot/images/LC-top-photo.jpg',
  2
);


INSERT INTO posts (article, image, destinations_id)
VALUES (
  'The City of New York, often called New York City (NYC) or simply New York, is the most populous city in the United States. With an estimated 2017 population of 8,622,698 distributed over a land area of about 302.6 square miles (784 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass and one of the world`s most populous megacities, with an estimated 20,320,876 people in its 2017 Metropolitan Statistical Area and 23,876,155 residents in its Combined Statistical Area. A global power city, New York City has been described as the cultural, financial, and media capital of the world, and exerts a significant impact upon commerce, entertainment, research, technology, education, politics, tourism, and sports. The city`s fast pace defines the term New York minute. Home to the headquarters of the United Nations, New York is an important center for international diplomacy.',
  'https://www.iese.edu/system/images/ucm/A.6.3.5.1.8_entA4.1_imagen1_general.jpeg_20120511134749.jpg',
  3
);


