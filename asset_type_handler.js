'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
         "Program": {
           "image_types" : {
             "Backdrop": { "abbrev" : "bd", "image_sizes" : ["h8","h10","h11","h12","h13","h14"]},
             "Banner": { "abbrev" : "b", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
             "Banner - level 2": { "abbrev" : "b", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
             "Banner - level 3": { "abbrev" : "b", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
             "Banner - logo only": { "abbrev" : "b", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
             "Banner - L1T": { "abbrev" : "b1t", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
             "Banner - L2T": { "abbrev" : "b2t", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
             "Banner - LOT": { "abbrev" : "blt", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
             "Box Art": { "abbrev" : "d", "image_sizes" : ["v2","v3","v4","v5","v6","v7","v8","v9","v10","m34","m23"]},
             "Cast Ensemble": { "abbrev" : "ce", "image_sizes" : ["h3","h5","h6","h7","h8","h9","h10","h11","h12","h13","h14","m169","m43"]},
             "Cast In Character": { "abbrev" : "cc", "image_sizes" : ["v2","v3","v4","v9","m34"]},
             "Episode": { "abbrev" : "e", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
             "Iconic": { "abbrev" : "i", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
             "Key Art": { "abbrev" : "k", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","v10","m169","m43","m34","m23","m21"]},
             "Program Logo": { "abbrev" : "l", "image_sizes" : ["h3","h5","h6","h7","h9","m43"]},

             "Photo": { "abbrev" : "", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},

             "Poster Art": { "abbrev" : "", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},

             "Poster Art - gallery": { "abbrev" : "p", "image_sizes" : ["v2","v3","v4","v5","v6","v7","v8","v9","v10","m34","m23"]},
             "VOD Art": { "abbrev" : "v", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","v10","m169","m43","m34","m23","m21"]}
           },//end image_types
           "master_file_formats" : ["JPEG"]
         },//end program

         "Person": {
           "image_types" : {
             "Photo - headshot": { "abbrev" : "", "image_sizes" : ["v2","v3","v4","v9"]}
           },//end image_types
           "master_file_formats" : ["JPEG"]
         },//end person


         "Programming Service": {
           "image_types" : {
             "Logo": { "abbrev" : "", "image_sizes" : ["h3","h4","h5"]},
             "Source Logo - dark": { "abbrev" : "ld", "image_sizes" : ["h3","h4","h5","h6","h9","h15"]},
             "Source Logo - gray": { "abbrev" : "lg", "image_sizes" : ["h3","h4","h5","h6","h9","h15"]},
             "Source Logo - light": { "abbrev" : "ll", "image_sizes" : ["h3","h4","h5","h6","h9","h15"]},
             "Source Logo - white": { "abbrev" : "lw", "image_sizes" : ["h3","h4","h5","h6","h9","h15"]}
           },//end image_types
           "master_file_formats" : ["JPEG"]
         },//end programming service

         "Team": {
           "image_types" : {
             "Sport Logo": { "abbrev" : "", "image_sizes" : ["h3","h5","h6","h9","h15"]},
             "Sport Logo - simple": { "abbrev" : "", "image_sizes" : ["h3","h5","h6","h9","h15"]}
           },//end image_types
           "master_file_formats" : ["PNG"]
         },//end team

         "Conference": {
           "image_types" : {
             "Sport Logo": { "abbrev" : "", "image_sizes" : ["h3","h5","h6","h9","h15"]},
             "Sport Logo - simple": { "abbrev" : "", "image_sizes" : ["h3","h5","h6","h9","h15"]}
           },//end image_types
           "master_file_formats" : ["PNG"]
         },//end conference

         "Organization": {
           "image_types" : {
             "Sport Logo": { "abbrev" : "", "image_sizes" : ["h3","h5","h6","h9","h15"]},
             "Sport Logo - simple": { "abbrev" : "", "image_sizes" : ["h3","h5","h6","h9","h15"]}
           },//end image_types
           "master_file_formats" : ["PNG"]
         },//end organization

         "College": {
           "image_types" : {
             "Sport Logo": { "abbrev" : "u", "image_sizes" : ["h3","h5","h6","h9","h15"]},
             "Sport Logo - simple": { "abbrev" : "", "image_sizes" : ["h3","h5","h6","h9","h15"]}
           },//end image_types
           "master_file_formats" : ["PNG"]
         }//end college

/**************Not used in DAM UI
             "Staple": { "abbrev" : "", "image_sizes" : ["h2","h3","h5","h6","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9"]},

             "Team Banner - L1": { "abbrev" : "", "image_sizes" : ["h3","h5","h6","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9"]},

             "Team Banner - L2": { "abbrev" : "", "image_sizes" : ["h3","h5","h6","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9"]},

             "Team Banner - L3": { "abbrev" : "", "image_sizes" : ["h3","h5","h6","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9"]},

             "Genre": { "abbrev" : "", "image_sizes" : ["h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9"]},
/**************Not used in DAM UI*/

    }),
  };

  callback(null, response);
};

