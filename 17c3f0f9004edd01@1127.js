import define1 from "./26670360aa6f343b@226.js";
import define2 from "./79750b3b8e929d9d@263.js";

function _1(md){return(
md`# Data Visualization Final Project
## Introduction

## The Meat and Potatoes of Life

Our project intends to find and analyze trends of meat consumption over time of countries and regions to find if there are existing trends and see if there is a relation to life expectancy. Our goal is to potentially find any trends that show the implication that diet may have either negative or positive effects on one's longevity.

When looking at these issues there are certain questions we intend to answer:
- Does the per capita amount of meat consumption have a trend on life expectancy?

  Although there are instances of more meat consumption leading to higher life expectancy, there are specific data points to counteract this idea, despite there also being a few areas where lower amount of meat consumption has lower life expectancy. (Mention South Africa and Sudan as well as India)

- Does eating a certain type of meat more seem to have an impact on life expectancy?

  We believe that the most consumed meat of each country has more to do with geography than it does with life expectancy. Both North America and Asia have a different meat (Poultry and Pig respectively) that is most consumed but each are on the higher end of the life expectancy spectrum.
  
- How has meat consumption changed over time?

  Overall Poultry remains a dominant staple in many parts of the world and has seen a significant increase, while beef and sheep have stayed stagnant in terms of consumption. Pig has also seen an overall increase globally. Individually certain countries have seen trends towards more of certain meat overall, but as we addressed in our previous question, the types and amounts of meat seems more related to geographical location on earth more than anything else. (Mention religion, vegetarianism)

Link: https://observablehq.com/d/21bfc43931de617a

## Acknowledgements

We are not experts who study life, but we know there are several factors outside of diet that will be influencing life expectancy of certain countries, whether it be war, minimal access to healthcare, harsh living conditions, or other complications that have a significant sway on the lives of people in different places of the world. 

We also acknowledge that the type of livestock better inhabits certain regions, thus contributing to the consumption of a particular meat. An example of this might be goats in a more mountainous region, or why cattle in the US might best be suited to the Great Plains due to the large amounts of grass and water resources. 

Lastly, certain people might abstain from eating meat, or certain meats, for personal or religious reasons. The most prominent example we could think of was Hindus, Buddhists, and similar religions adhering to the virtue ahimsa, a principle advocating for non-violence against all living beings. 

## Datasets

We used Kaggle to find datasets on types of meat consumed by each country, world population data over time, and life expectancy. Each dataset was created from a reputable source, life expectancy from the World Health Organization, meat consumption from the Organization for Economic Cooperation and Development (OECD), and world population taken from World Population Review who got their numbers from the WHO. It is worth noting that, while the numbers from World Population Review are factual, there appears to be a bias in some of the reports, but the Kaggle dataset we are using is highly regarded on the site.

[[Life expectancy (WHO)](https://www.kaggle.com/datasets/kumarajarshi/life-expectancy-who)](Life expectancy (WHO)

[[Worldwide Meat Consumption](https://www.kaggle.com/datasets/vagifa/meatconsumption)](Worldwide Meat Consumption)

[[World Population](https://www.kaggle.com/datasets/iamsouravbanerjee/world-population-dataset)](World Population)

[[ISO Codes](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)](ISO Codes)

`
)}

function _2(md){return(
md`country data: https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json`
)}

function _3(md){return(
md`# Data Preparation
## For meat_consumption_worldwide.csv
1. Appended a column "CountryFullName" in meat_consumption_worldwide.csv based on the country code and name from "CCA3" and "Country/Territory" in world_population.csv

2. (Follow by 1.) Remove "CountryFullName" is null/blank, e.g. OECD contains 38 member countries.

3. Remove "TIME" is not 2022, 2020, 2015, 2010, 2000, 1990, 1980, 1970 because we only have these years in world_population.csv
  - (An observation here is in some meat started from 1991, some started from 1990. e.g., in AUS, the beef and pig started from 1991 and the poultry and sheep started from 1990. Therefore the step 3., the oldest data for the beef and pig became 2000 and for the poultry and sheep became 1990)
    
4.  Add the “WeightTHND_TONNE2KG” column, which converts values from “THND_TONNE” to kg.

5. Add the “WeightKG_CAP” column, which calculates per capita meat consumption for rows where “WeightTHND_TONNE2KG” is available, using the corresponding population for each year.

6. For null values “WeightKG_CAP” is replaced with the corresponding “Value” column data because its value means "KG_CAP" initially.

7. Uploaded the final table Final_Meat_Consumption_Data.csv which has country code and name, population in specific given years, and WeightKG_CAP`
)}

function _4(md){return(
md`# Data Preparation
## For meat_consumption_worldwide.csv 
### kg_meat_consumption_data
1. The column “CountryFullName” has been added, mapping the country codes using our alpha3 ISO Codes File in the “LOCATION” column to their full names.
2. All rows where MEASURE = “THND_TONNE” have been removed.`
)}

function _filtered_meat_data(kg_meat_consumption_highest,year){return(
kg_meat_consumption_highest.filter(d => d.TIME === year)
)}

function _6(md){return(
md`### meat_consumption_worldwide_highest_meat
Based on the previously generated csv, keep the most consumed meat and remove the rest rows.

`
)}

function _kg_meat_consumption_highest(FileAttachment){return(
FileAttachment("meat_consumption_worldwide_highest_meat@1.csv").csv({typed: true})
)}

function _kg_meat_consumption_data(FileAttachment){return(
FileAttachment("meat_consumption_worldwide_with_countries.csv").csv({typed: true})
)}

function _9(md){return(
md`## For Life Expectancy Data.csv
1. Needed to transform to filter where the data isn’t null.

   **(I actually hope this key idea was mentioned in the lecture!)**

   - JavaScript: \`transform: [{ filter: "datum.LifeExpectancy != null" }],\``
)}

function _filteredLifeExpectancy(lifeExpectancy,year){return(
lifeExpectancy.filter(d => d.Year === year)
)}

function _11(md){return(
md`# Imports`
)}

function _14(md){return(
md`# Load the data`
)}

function _worldPopulationTyped(FileAttachment){return(
FileAttachment("world_population.csv").csv({typed: true})
)}

function _meatConsumption(FileAttachment){return(
FileAttachment("meat_consumption_worldwide.csv").csv({typed: true})
)}

function _lifeExpectancy(FileAttachment){return(
FileAttachment("Life_Expectancy_Data_Modified.csv").csv({typed: true})
)}

function _countryCodes(FileAttachment){return(
FileAttachment("wikipedia-iso-country-codes.csv").csv({typed: true})
)}

function _finalData(FileAttachment){return(
FileAttachment("Final_Meat_Consumption_Data.csv").csv({typed: true})
)}

function _MostComsumedMeatData2015(FileAttachment){return(
FileAttachment("Most_Consumed_Meat_by_Country_2015@2.csv").csv({typed: true})
)}

function _MeatAndLife(FileAttachment){return(
FileAttachment("MeatAndLifeExpectancy@1.csv").csv({typed: true})
)}

function _22(md){return(
md`# Meat Consumption per Capita over Time
Select a country to view the historical trend.`
)}

function _selectedOption(Inputs,kg_meat_consumption_data){return(
Inputs.select(
  Array.from(new Set(kg_meat_consumption_data.map(d => d.CountryFullName))),
  { label: "Select Country:" }
)
)}

function _24(render,kg_meat_consumption_data,selectedOption){return(
render({
  title: "Meat Consumption per Capita over Time",
  data: {
    values: kg_meat_consumption_data
  },
  transform: [{ filter: { field: "CountryFullName", equal: selectedOption } }],
  width: 500,
  mark: {
    type: "bar"
  },
  encoding: {
    x: {
      field: "TIME",
      type: "ordinal",
      title: "Year"
    },
    y: {
      field: "Value",
      type: "quantitative",
      title: "Meat Consumption (Kg per Capita)"
    },
    color: {
      field: "SUBJECT",
      type: "nominal",
      title: "Meat"
    }
  }
})
)}

function _selectedCountry(Inputs,finalData){return(
Inputs.select(
  Array.from(new Set(finalData.map(d => d.CountryFullName))),
  { label: "Select Country:" }
)
)}

function _26(md){return(
md`# Meat Consumption by Type Globally
View meat consumption across different meat types`
)}

function _27(render,kg_meat_consumption_data){return(
render({
  width: 500,
  title: "Meat Consumption by Type",
  transform: [{ 
    filter: 'datum.TIME == year' 
  }],
  data: { values: kg_meat_consumption_data },
  mark: "bar",
  params: [
    {
    name: 'year',
    value: 2025,
    bind: {
      input: 'range',
      step: 1,
      min: 1990,
      max: 2026,
      name: 'Year'
      }
    }
  ],
  encoding: {
    x: { field: "SUBJECT", type: "nominal", title: "Meat Type" },
    y: { field: "Value", type: "quantitative", title: "Meat Consumption", 
       scale: { domain: [0, 1000] }
       },
    color: { field: "SUBJECT", type: "nominal" }
  }
})
)}

function _28(md){return(
md`# Meat Consumption by Type Regionally
View meat consumption across different meat types by selecting a country`
)}

function _selectedOption2(Inputs,kg_meat_consumption_data){return(
Inputs.select(
  Array.from(new Set(kg_meat_consumption_data.map(d => d.CountryFullName))),
  { label: "Select Country:" }
)
)}

function _30(render,selectedOption2,kg_meat_consumption_data){return(
render({
  width: 500,
  title: "Meat Consumption by Type",
  transform: [{ 
    filter: 'datum.TIME == year' 
  },
             { filter: { field: "CountryFullName", equal: selectedOption2 } }],
    // transform: [],

  data: { values: kg_meat_consumption_data },
  mark: "bar",
  params: [
    {
    name: 'year',
    value: 2025,
    bind: {
      input: 'range',
      step: 1,
      min: 1990,
      max: 2026,
      name: 'Year'
      }
    }
  ],
  encoding: {
    x: { field: "SUBJECT", type: "nominal", title: "Meat Type" },
    y: { field: "Value", type: "quantitative", title: "Meat Consumption", 
       scale: { domain: [0, 50] }
       },
    color: { field: "SUBJECT", type: "nominal" }
  }
})
)}

function _31(md){return(
md`# Life Expectancy
Hover to see more detail`
)}

function _32(render,lifeExpectancy){return(
render({
  width: 500,
  title: "Life Expectancy",
  data: { values: lifeExpectancy },
  mark: {
    type: "point",
    tooltip: true,
    },
  transform: [{ filter: "datum.LifeExpectancy != null" }],
  encoding: {
    x: { field: "Year", type: "ordinal", title: "Year" },
    y: { field: "LifeExpectancy", type: "quantitative", title: "Life Expectancy",scale: { domain: [30, 100] }
       },
    color: { field: "Status", type: "nominal" },
    tooltip: [
      {field: "Year", type: "nominal"},
      {field: "Country", type: "nominal"},
      {field: "Status", type: "nominal"},
      {field: "LifeExpectancy", type: "nominal"},
  ]},
})
)}

function _33(md){return(
md`# Top Consumed Meat Annually
We acknowledge that we only have 48 countries' data from Organization for Economic Cooperation and Development (OECD), so some data can be null(-1).`
)}

function _year(Inputs){return(
Inputs.range([2000, 2015], { step: 1, value: 2015, label: "Pick a year"})
)}

function _35(render,filtered_meat_data,filteredLifeExpectancy){return(
render({
  hconcat: [
    {
      width: 300,
      data: {
        url: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json',
        format: {
          type: 'topojson',
          feature: 'countries'
        }
      },
      projection: { type: 'naturalEarth1' },
      mark: 'geoshape',
      transform: [
        {
          lookup: 'properties.name',
          from: {
            data: {
              values: filtered_meat_data
            },
            key: 'CountryFullName',
            fields: ['SUBJECT', 'Value']
          }
        }
      ],
      encoding: {
        color: {
          field: 'SUBJECT',
          type: 'nominal',
          legend: { title: 'Top Consumed Meat' },
          scale: {
            domain: ['BEEF', 'PIG', 'POULTRY', 'SHEEP', null],
            range: ['red', 'pink', 'blue', 'green', 'grey']
          }
        },
        tooltip: [
          { field: 'properties.name', title: 'Country' },
          { field: 'SUBJECT', title: 'Top Meat' },
          { field: 'Value', title: 'Kg per person', format: '.2f' }
        ]
      },
      title: "Most Consumed Meat by Country"
    },
    {
      width: 300,
      data: {
        url: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json',
        format: {
          type: 'topojson',
          feature: 'countries'
        }
      },
      projection: { type: 'naturalEarth1' },
      mark: 'geoshape',
      transform: [
        {
          lookup: 'properties.name',
          from: {
            data: { values: filteredLifeExpectancy },
            key: 'Country',
            fields: ['LifeExpectancy']
          }
        },
        {
          calculate: 'datum.LifeExpectancy == null ? -1 : datum.LifeExpectancy',
          as: 'LifeExpectancyClean'
        }
      ],
      encoding: {
        color: {
          field: 'LifeExpectancyClean',
          type: 'quantitative',
          scale: {
            domain: [-1, 36, 56.8, 67.6, 78.2, 90],
            range: ['grey', 'red', 'orange', 'yellow', 'light green', 'green']
          }
        },
        tooltip: [
          { field: 'properties.name', title: 'Country' },
          { field: 'LifeExpectancyClean', title: 'Life Expectancy', format: '.1f' }
        ]
      },
      title: "Life Expectancy by Country"
    }
  ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Final_Meat_Consumption_Data.csv", {url: new URL("./files/34226fe860752730e744d8564f7f745d0b81a3eadcd6ec30f6f27813a7402ba8146d29f73d14669bd51f755f20b61581ea73645adecf7c34b2f6112a234d4052.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["world_population.csv", {url: new URL("./files/c33273e2df4fb85cb7c06cc6441fdde13ab59337b134fe19662174ed21e6d322b455fc16ab0d1c1e13cd61cd5a9896f9b7c80a897b7496c2009a44211fa1da64.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["meat_consumption_worldwide.csv", {url: new URL("./files/fba002a8bd9f0037bd33ac3a0c21117e35fa0468e358861ad9775ea1678b2833c87f3b87bb682a66661d7fc90e0f134f36a177f0825456d5aa0cb977814b382d.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Life_Expectancy_Data_Modified.csv", {url: new URL("./files/2effc86a60c0f24fa743662782c0099f37b44449c55e87ff28c61ef92edd54f0250ed4d68afec2e4ca526cab96e256fe81c899bde52ae173bf1d5449205adb27.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["wikipedia-iso-country-codes.csv", {url: new URL("./files/fc5e47aa19f5d65d0d6de9fcde6b8aeac8242d80156ce32cad626ea74800dc58a9c15514b6a788656d935c3267cc949ded7a5d0d4150336549f7d5e263fb6012.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["MeatAndLifeExpectancy@1.csv", {url: new URL("./files/092ca945fe75af4933ede58805f43395107c292f4f4d68403d222193edb4004bef0e2bbbc624ad3e89db8cb058010d327f90cd9549f55eac59bf6959c2731549.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Most_Consumed_Meat_by_Country_2015@2.csv", {url: new URL("./files/d568141dbd50bcec0312a1881feeafc89048b688f34e3b2dfe4ef691ca4a72e005f1d9a25745bf258f1ca9b1f8a098adcf477b0423e0e935779215b6a734af1a.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["meat_consumption_worldwide_with_countries.csv", {url: new URL("./files/c2b0792ae6a75cff96b537992fe6eb60ecc5ccfe755d166913001b0704a71c7a6bec3f69fffa5ace615c2819acf77accd8ce8a1ac4ee1ab3554f79143b6f386d.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["meat_consumption_worldwide_highest_meat@1.csv", {url: new URL("./files/b9616d6ed98115b94998fb94ba5188b902dd9c4829334fd18cbbce1ce3cf75d5d9991770027dad7c550fba7e798ef58aa0480b537f15e0c2cf47e1bca271cb5d.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer("filtered_meat_data")).define("filtered_meat_data", ["kg_meat_consumption_highest","year"], _filtered_meat_data);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer("kg_meat_consumption_highest")).define("kg_meat_consumption_highest", ["FileAttachment"], _kg_meat_consumption_highest);
  main.variable(observer("kg_meat_consumption_data")).define("kg_meat_consumption_data", ["FileAttachment"], _kg_meat_consumption_data);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("filteredLifeExpectancy")).define("filteredLifeExpectancy", ["lifeExpectancy","year"], _filteredLifeExpectancy);
  main.variable(observer()).define(["md"], _11);
  const child1 = runtime.module(define1);
  main.import("render", child1);
  const child2 = runtime.module(define2);
  main.import("aq", child2);
  main.import("op", child2);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer("worldPopulationTyped")).define("worldPopulationTyped", ["FileAttachment"], _worldPopulationTyped);
  main.variable(observer("meatConsumption")).define("meatConsumption", ["FileAttachment"], _meatConsumption);
  main.variable(observer("lifeExpectancy")).define("lifeExpectancy", ["FileAttachment"], _lifeExpectancy);
  main.variable(observer("countryCodes")).define("countryCodes", ["FileAttachment"], _countryCodes);
  main.variable(observer("finalData")).define("finalData", ["FileAttachment"], _finalData);
  main.variable(observer("MostComsumedMeatData2015")).define("MostComsumedMeatData2015", ["FileAttachment"], _MostComsumedMeatData2015);
  main.variable(observer("MeatAndLife")).define("MeatAndLife", ["FileAttachment"], _MeatAndLife);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer("viewof selectedOption")).define("viewof selectedOption", ["Inputs","kg_meat_consumption_data"], _selectedOption);
  main.variable(observer("selectedOption")).define("selectedOption", ["Generators", "viewof selectedOption"], (G, _) => G.input(_));
  main.variable(observer()).define(["render","kg_meat_consumption_data","selectedOption"], _24);
  main.variable(observer("viewof selectedCountry")).define("viewof selectedCountry", ["Inputs","finalData"], _selectedCountry);
  main.variable(observer("selectedCountry")).define("selectedCountry", ["Generators", "viewof selectedCountry"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _26);
  main.variable(observer()).define(["render","kg_meat_consumption_data"], _27);
  main.variable(observer()).define(["md"], _28);
  main.variable(observer("viewof selectedOption2")).define("viewof selectedOption2", ["Inputs","kg_meat_consumption_data"], _selectedOption2);
  main.variable(observer("selectedOption2")).define("selectedOption2", ["Generators", "viewof selectedOption2"], (G, _) => G.input(_));
  main.variable(observer()).define(["render","selectedOption2","kg_meat_consumption_data"], _30);
  main.variable(observer()).define(["md"], _31);
  main.variable(observer()).define(["render","lifeExpectancy"], _32);
  main.variable(observer()).define(["md"], _33);
  main.variable(observer("viewof year")).define("viewof year", ["Inputs"], _year);
  main.variable(observer("year")).define("year", ["Generators", "viewof year"], (G, _) => G.input(_));
  main.variable(observer()).define(["render","filtered_meat_data","filteredLifeExpectancy"], _35);
  return main;
}
