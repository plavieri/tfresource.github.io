(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{81:function(e,t,a){"use strict";a.r(t);var o=a(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Learn more about this circle at "),a("a",{attrs:{href:"Spatial_Interaction_Models"}},[e._v("Spatial Interaction Models")]),e._v(".")]),e._v(" "),a("p",[e._v("Spatial interaction models predict the amount or likelihood of people or goods (or services or information) moving between two locations in space. Generally, the model predicts the interchange of goods or people between all the members of a discrete set of locations or zones resulting in a square matrix of movements or flows from each zone to each zone. However, sometimes spatial interaction models, particularly disaggregate applications, may instead produce a list of interactions or movements rather than a sparse matrix.")]),e._v(" "),a("p",[e._v("In the context of travel forecasting, spatial interaction models have traditionally been called “trip distribution” or simply “distribution” models. Trip distribution was the second step of the "),a("a",{attrs:{href:"Trip_Based_Models"}},[e._v("four-step modeling process")]),e._v(", following trip generation and preceding mode choice and assignment. Distribution models continue to play a critical role in advanced models, such as tour-based or activity-based models; however, in this context, they are frequently referred to as “[” or “location choice” models since they are formulated in terms of the underlying behavioral choice of a location (given a reference location).")]),e._v(" "),a("p",[e._v("Both common experience as well as academic research"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(" have found that spatial distribution models are the largest source of error in travel forecasting. Despite the development of more advanced alternatives, the most common spatial interaction model in travel forecasting remains the [."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])])]),e._v(" "),a("h1",{attrs:{id:"explanatory-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explanatory-variables"}},[e._v("#")]),e._v(" Explanatory Variables")]),e._v(" "),a("p",[e._v("Most spatial interaction models attempt to predict the movement of people or goods in terms of two basic factors, although some models incorporate additional explanatory variables. These two basic factors are:")]),e._v(" "),a("ul",[a("li",[e._v("the distance, travel time or more generally, "),a("a",{attrs:{href:"Impedance"}},[e._v("impedance")]),e._v(" between the two locations and\n")]),e._v(" "),a("li",[e._v("the "),a("a",{attrs:{href:"Attractions_and_Size_Variables"}},[e._v("size")]),e._v(" or some measure or prediction of the total amount of people or goods attracted to each candidate destination (see Attractions and Size Variables).")])]),e._v(" "),a("p",[e._v("Additional explanatory variables that have been incorporated in more complex models include:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"Accessibilities"}},[e._v("Accessibilities")]),e._v(", to capture spatial autocorrelation and/or agglomeration effects, convenience or centrality,")]),e._v(" "),a("li",[a("a",{attrs:{href:"Psychological_Boundaries"}},[e._v("Psychological Boundaries")]),e._v(", such as rivers, ridge lines, railroad tracks or even major highways which decrease the probability of interaction,")]),e._v(" "),a("li",[e._v("Demographic Attributes, such as the income, age or employment status of travelers,")]),e._v(" "),a("li",[e._v("Destination Qualities (other than its size or the number of attractions) such as its walkability, diversity of land uses, etc., and")]),e._v(" "),a("li",[a("a",{attrs:{href:"K_Factors_and_Other_Spatial_Bias_Factors"}},[e._v("K-Factors and Other Spatial Bias Factors")]),e._v(", which are not explanatory variables, but fixed factors to account for unexplained patterns.")])]),e._v(" "),a("h1",{attrs:{id:"types-of-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-of-models"}},[e._v("#")]),e._v(" Types of Models")]),e._v(" "),a("p",[e._v("There are several ways that spatial interaction models can be classified. The following section summarizes the basic types of formulations in use in travel forecasting. Significant variations exist within most of these classes of models, and some formulations have been shown to be equivalent and can be re-formulated as others. For instance it has been long established that gravity models are simply a special, limited case of destination choice models"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(". For that reason, distinctions such as whether the model is doubly constrained, how it balances productions and attractions, etc., can be as or even more important than the formulation, particularly for the model’s results (e.g, in some cases doubly constrained gravity and destination-choice models may be more similar than they are to singly constrained models of the same formulation). However, the formulation remains the main way that spatial interaction models are categorized.")]),e._v(" "),a("h2",{attrs:{id:"gravity-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gravity-models"}},[e._v("#")]),e._v(" Gravity Models")]),e._v(" "),a("p",[e._v("The gravity model is the most common spatial interaction model in travel forecasting. The gravity model is based on the assumption that interaction between two locations is proportional to their size and inversely proportional to their distance (or impedance). There are many variations on the gravity model in use, primarily differences in balancing and constraint, as well as the use of k factors. As of 2005, 93% of MPOs in the United States used gravity models, at least for forecasting work commute trips, despite concerns over their accuracy."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])])]),e._v(" "),a("h2",{attrs:{id:"destination-choice-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destination-choice-models"}},[e._v("#")]),e._v(" Destination Choice Models")]),e._v(" "),a("p",[e._v("[, frequently called [ or sometimes “location choice” models, are the next most common model formulation after gravity. Although they accounted for only slightly more than 5% of models in use by US MPOs in 2005"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn5",id:"fnref5"}},[e._v("[5]")])]),e._v(" for forecasting work commute trips, they are becoming more common in practice and are the standard practice in tour-based and activity-based models.")]),e._v(" "),a("h2",{attrs:{id:"pivoting-growth-factor-and-data-driven-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pivoting-growth-factor-and-data-driven-models"}},[e._v("#")]),e._v(" Pivoting, Growth Factor and Data-Driven Models")]),e._v(" "),a("p",[e._v("Another fairly common class of "),a("a",{attrs:{href:"Pivoting_Growth_Factor_and_Data_Driven_Spatial_Models"}},[e._v("models")]),e._v(" goes by several names including “data-driven”, “pivoting”, “growth factor” and “Fratar” models. These models are most commonly used for distributing trucks and, more recently, public transit trips but are also used with some regularity for forecasting automobile trips as well. The defining element of these models is their reliance on a “prior” or “seed” matrix. The prior or seed matrix may be actual data on origin-destination patterns observed at some point in time (data-driven approach) or synthesized, most commonly using some method of "),a("a",{attrs:{href:"Origin_Destination_Matrix_Estimation_from_Traffic_Counts"}},[e._v("origin-destination matrix estimation from traffic counts")]),e._v(". Although used from the beginning of travel forecasting in the 1950s,"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn6",id:"fnref6"}},[e._v("[6]")])]),e._v(" these techniques have recently enjoyed a new wave of popularity, particularly for transit forecasting, and is now required for modeling in the UK and receiving more attention in Europe."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn7",id:"fnref7"}},[e._v("[7]")])])]),e._v(" "),a("h2",{attrs:{id:"intervening-opportunities-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intervening-opportunities-models"}},[e._v("#")]),e._v(" Intervening Opportunities Models")]),e._v(" "),a("p",[e._v("Intervening opportunities models were proposed early on (Stouffer, 1940) and continue to be used by a small number of agencies.")]),e._v(" "),a("h2",{attrs:{id:"competing-destinations-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#competing-destinations-models"}},[e._v("#")]),e._v(" Competing Destinations Models")]),e._v(" "),a("p",[e._v("Competing destinations models (Fotheringham, 1983) have received a fair amount of attention in the geography literature. They have been used in practice by at least one transportation planning agency. Fotheringham’s technique, which introduces an accessibility measure, has now become a common best practice in destination choice modeling (following Bhat et al., 1998).")]),e._v(" "),a("p",[e._v("Combined distribution and assignment models have been shown to be equivalent to the feedback of travel times from assignment to distribution which is the topic of the next section.")]),e._v(" "),a("h1",{attrs:{id:"combined-models-and-feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#combined-models-and-feedback"}},[e._v("#")]),e._v(" Combined Models and Feedback")]),e._v(" "),a("p",[e._v("Originally, spatial interaction models were applied using impedance measures based on free-flow or uncongested travel times. In this case the travel times on which the spatial distribution of trips is based are generally inconsistent with the travel times predicted by assignment. "),a("a",{attrs:{href:"Combined_Distribution_Assignment_Models"}},[e._v("Combined distribution models")]),e._v(" were formulated and the practice of “feedback” developed to address this problem, especially to support emissions modeling which requires realistic travel times or speeds. In the context of travel forecasting, feedback generally refers to iterating the entire or several steps of the travel demand, network modeling system. At minimum, it generally means the feedback of travel times from assignment in distribution. It was eventually recognized and proved that feedback models are equivalent to and can be formulated as combined distribution-assignment models.")]),e._v(" "),a("p",[e._v("The process is common, and can be required under certain air quality conformity conditions, but is not universal. Although incorporating feedback to distribution is now quite common, there is little consistency in the details of how this feedback is implemented.")]),e._v(" "),a("p",[e._v("The key development in recent years with regard to feedback was the recognition that “naïve” feedback without any averaging of flows or travel times across iterations may not converge.")]),e._v(" "),a("p",[e._v("Although incorporating feedback to distribution is now quite common, there is little consistency in the details of how this feedback is implemented. Feedback can and has been implemented by feeding back trip tables or flow matrices, travel time or skim matrices, link flows or link travel times. Averaging can be done using the "),a("a",{attrs:{href:"Method_of_Successive_Averages"}},[e._v("method of successive averages")]),e._v(" (MSA) or fixed factor methods. There are even more different criteria in use to measure the convergence of feedback loops or combined model systems.")]),e._v(" "),a("h1",{attrs:{id:"constraints-and-balancing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constraints-and-balancing"}},[e._v("#")]),e._v(" Constraints and Balancing")]),e._v(" "),a("p",[e._v("In one way or another, spatial interaction models generally must reconcile estimates of supply and demand or the production and attraction or consumption of trips or goods. For example, predictions of the number of work trips in a future year will typically be made based both on projections of the number of resident workers and independently from projections of employment. These estimates may come from different agencies and, especially in the future, may vary considerably. Models differ in whether the estimates are scaled ("),a("a",{attrs:{href:"Balancing"}},[e._v("balancing")]),e._v(") to be consistent and in whether they are "),a("a",{attrs:{href:"Singly_and_Doubly_Constrained_Spatial_Models"}},[e._v("singly-constrained")]),e._v(" to be consistent with exogenous estimates of supply or demand or "),a("a",{attrs:{href:"Singly_and_Doubly_Constrained_Spatial_Models"}},[e._v("doubly-constrained")]),e._v(" to both. Models also vary in whether or not they include endogenous estimation of demand.")]),e._v(" "),a("p",[e._v("Models have considerably different response properties and can produce considerably different forecasts depending on whether they are singly- or doubly-constrained and how balancing is handled. For instance, singly-constrained models may observe the infamous "),a("a",{attrs:{href:"Independence_of_Irrelevant_Alternatives_IIA"}},[e._v("Independence of Irrelevant Alternatives (IIA)")]),e._v(") property while doubly-constrained models do not.")]),e._v(" "),a("h1",{attrs:{id:"development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[e._v("#")]),e._v(" Development")]),e._v(" "),a("p",[e._v("Spatial interaction models are typically thought to be less transferable across geographic regions, compared to aspatial models, due to the unique geography of each region. For this reason, spatial interaction or distribution models must be developed and calibrated for each region.")]),e._v(" "),a("h2",{attrs:{id:"data-sources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-sources"}},[e._v("#")]),e._v(" Data Sources")]),e._v(" "),a("p",[e._v("Spatial interaction models rely on a variety of data sources. They typically rely on three types of data:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"Spatial_Data"}},[e._v("spatial data")]),e._v(", typically the amount of population, employment, etc., within a zone system;")]),e._v(" "),a("li",[e._v("the distance, travel time or more generally, "),a("a",{attrs:{href:"Impedance"}},[e._v("impedance")]),e._v(" between the two locations;")]),e._v(" "),a("li",[a("a",{attrs:{href:"Spatial_Interaction_Data"}},[e._v("spatial interaction data")]),e._v(" or actual observations of spatial interactions.")])]),e._v(" "),a("p",[e._v("Spatial data and impedances are common data types used in a variety of travel forecasting processes. However, spatial interaction data is particular to spatial interaction modeling and so deserves a brief treatment here.")]),e._v(" "),a("h3",{attrs:{id:"spatial-interaction-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spatial-interaction-data"}},[e._v("#")]),e._v(" Spatial Interaction Data")]),e._v(" "),a("p",[e._v("Spatial interaction data is required to inform spatial interaction models, whether in the form of prior matrices or through the estimation of structural parameters. Given the fairly specialized nature of this data, there are typically a limited number of sources for it:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"Travel_Survey_Data"}},[e._v("Household travel surveys")]),e._v(" which record the movements of travelers within a household between locations in space are the most common source of spatial interaction data.")]),e._v(" "),a("li",[a("a",{attrs:{href:"Travel_Survey_Data"}},[e._v("Business establishment surveys")]),e._v(" are less common but are also sometimes conducted, in part to collect data on truck and other commercial vehicle movements.")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"Census_Transportation_Planning_Package_CTPP"}},[e._v("Census Transportation Planning Package (CTPP)")]),e._v(") periodically (roughly every 5-10 years) produces estimates of journey to work flows at various geographies including counties and Census "),a("a",{attrs:{href:"Traffic_Analysis_Zones"}},[e._v("TAZs")]),e._v(" based on the "),a("a",{attrs:{href:"American_Communities_Survey_ACS"}},[e._v("American Communities Survey (ACS)")]),e._v(").")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"Longitudinal_Employer_Household_Dynamics_LEHD"}},[e._v("Longitudinal Employer-Household Dynamics (LEHD)")]),e._v(") Origin-Destination Employment Statistics (LODES) is also produced by the Census Bureau in collaboration with the Bureau of Labor Statistics based on their "),a("a",{attrs:{href:"Quarterly_Census_of_Earning_and_Wages_QCEW"}},[e._v("Quarterly Census of Earning and Wages (QCEW)")]),e._v(").")]),e._v(" "),a("li",[e._v("Passive data collection is also now beginning to provide spatial interaction data based on tracking of cell-phones, GPS and other devices (for instance, the American Transportation Research Institute has GPS-based data on truck movements).")]),e._v(" "),a("li",[e._v("Commodity flow matrices are produced by FHWA as part of its "),a("a",{attrs:{href:"Freight_Analysis_Framework_FAF"}},[e._v("Freight Analysis Framework (FAF)")]),e._v(") based on the Bureau of Transportation Statistic’s "),a("a",{attrs:{href:"Commodity_Flow_Survey"}},[e._v("Commodity Flow Survey")]),e._v(". Synthetic commodity flow matrices are also commercially available based on the application of doubly-constrained gravity models to inter-regional input-output data.")])]),e._v(" "),a("h2",{attrs:{id:"estimation-calibration-and-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimation-calibration-and-validation"}},[e._v("#")]),e._v(" Estimation, Calibration and Validation")]),e._v(" "),a("p",[e._v("The development and adoption of spatial interaction models from spatial interaction data can vary considerably based on the type of model. For example, it is common to statistically estimate destination choice model parameters from disaggregate household survey data, while it is more common to heuristically calibrate gravity model parameters to match aggregate summaries of the same data.")]),e._v(" "),a("p",[e._v("However, despite differences in methods for estimating and/or calibrating model parameters, ultimate evaluation of the goodness-of-fit and validation of spatial interaction models is frequently based on a limited number of common checks. In particular, the most common criteria for evaluating spatial interaction models remains the ability of the model to reproduce an observed trip length frequency distribution measured either by the average trip distance/duration or by a coincidence ratio.")]),e._v(" "),a("p",[e._v("This practice persists despite strong evidence ([TRB placeholder, 2012]) that models can easily be over-calibrated to reproduce trip length frequency distributions at the expense of their ability to accurately reproduce actual spatial interaction patterns. Proper evaluation of the validity of spatial interaction models should be based on actual comparisons of the predicted versus actual observed flows whenever such data exists. These comparisons frequently take the form of comparisons of district-to-district summaries of more detailed spatial interactions, such as comparison of modeled county level commute flows to CTPP estimates. However, it is also possible to calculate a correlation coefficient or similar measures depending on the type of data available. It is important to be aware, however, that spatial goodness-of-fit statistics are dependent on spatial aggregation or the zone system used, such that, for instance, district level statistics will appear better than zone level statistics and zone level statistics appear better than parcel level statistics comparing the same model to the same observed data.")]),e._v(" "),a("p",[e._v("See also "),a("a",{attrs:{href:"Model_Validation_and_Reasonableness_Checking"}},[e._v("Model Validation and Reasonableness Checking")]),e._v(" on Trip Distribution.")]),e._v(" "),a("h1",{attrs:{id:"accuracy-and-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accuracy-and-issues"}},[e._v("#")]),e._v(" Accuracy and Issues")]),e._v(" "),a("p",[e._v("Both common experience as well as academic research"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn8",id:"fnref8"}},[e._v("[8]")])]),e._v(" have found that spatial distribution models are the largest source of error in travel forecasting. This is not surprising given the typical size of the problem (large number of zones or locations) and the limited explanatory variables available (such as the lack of information on the price or quality of goods available at locations). For this reason, many have suggested alternatives to the traditional gravity model including destination choice models and data-driven or pivoting methods.")]),e._v(" "),a("p",[e._v("In addition to the size of the problem and the limited number of explanatory variables typically available, spatial interaction models face particular challenges relative to the scheme by which space itself is aggregated into discrete units or zones. This challenge is commonly known as the "),a("a",{attrs:{href:"Destination_Choice_Set_Formation#The_Modifiable_Areal_Unit_Problem_(MAUP)"}},[e._v("Modifiable Areal Unit Problem")]),e._v(" (MAUP) which is basically that the results of the model are not independent of the zone system used. So, as a result, there is no guarantee that a well-calibrated model will still remain well calibrated after a number of zones are split.")]),e._v(" "),a("h2",{attrs:{id:"aggregation-bias-vs-computational-burden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregation-bias-vs-computational-burden"}},[e._v("#")]),e._v(" Aggregation Bias vs. Computational Burden")]),e._v(" "),a("p",[e._v("One aspect of the MAUP is spatial aggregation bias which is simply the spatial form of "),a("a",{attrs:{href:"Aggregation_Bias"}},[e._v("aggregation bias")]),e._v(" common to nonlinear models. The fewer zones used to represent a given amount of space, the more bias can be introduced into key parameters, such as the "),a("a",{attrs:{href:"Willingness_to_Travel_and_Distance_Decay_Parameters"}},[e._v("willingness-to-travel or distance decay parameter(s)")]),e._v(". However, the use of many zones presents computation challenges for most spatial interaction models because their computational burden and memory requirements are typically related to the number of zones squared.")]),e._v(" "),a("h1",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[e._v("TRB placeholder, 2012\nStouffer, 1940\nFotheringham, 1983\nBhat et al., 1998")]),e._v(" "),a("h2",{attrs:{id:"related-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-content"}},[e._v("#")]),e._v(" Related Content")]),e._v(" "),a("p",[e._v("{{#ask: "),a("a",{attrs:{href:"_"}},[e._v("_")]),e._v("\n| format=ul\n}}")]),e._v(" "),a("hr"),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("Zhao, Y. and K. Kockelman (2002) 'The Propagation of Uncertainty through Travel Demand Models', "),a("em",[e._v("Annals of Regional Science")]),e._v(" 36 (1), pp.145-163 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[a("a",{attrs:{href:"SR_288_Metropolitan_Travel_Forecasting_Current_Practice_and_Future_Direction"}},[e._v("SR 288-Metropolitan Travel Forecasting Current Practice and Future Direction")]),e._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[a("p",[e._v("Daly, A. (1982) 'Estimating Choice Models Containing Attraction Variables', \"Transportation Research, Part B: Methodological\" Vol. 16, No. 1, pp. 5-15 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[e._v("↩︎")])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[a("p",[e._v("Fratar, T. J. “Vehicular Trip Distribution by Successive Approximations”, Traffic Quarterly, 1954. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn7"}},[a("p",[e._v("Daly, A., J. Fox, B. Patruni and F. Milthorpe (2012) 'Pivoting in Travel Demand Models' presented at Australasian Transport Research Forum "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref7"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn8"}},[a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref8"}},[e._v("↩︎")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);