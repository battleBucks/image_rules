'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
         "Backdrop": { "abbrev" : "bd", "master_sizes" : ["h8","h10","h11","h12","h13","h14"]},
         "Banner": { "abbrev" : "b", "master_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
         "Banner - level 2": { "abbrev" : "b", "master_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
         "Banner - level 3": { "abbrev" : "b", "master_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
         "Banner - logo only": { "abbrev" : "b", "master_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
         "Banner - L1T": { "abbrev" : "b1t", "master_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
         "Banner - L2T": { "abbrev" : "b2t", "master_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
         "Banner - LOT": { "abbrev" : "blt", "master_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
         "Box Art": { "abbrev" : "d", "master_sizes" : ["v2","v3","v4","v5","v6","v7","v8","v9","v10","m34","m23"]},
         "Cast Ensemble": { "abbrev" : "ce", "master_sizes" : ["h3","h5","h6","h7","h8","h9","h10","h11","h12","h13","h14","m169","m43"]},
         "Cast In Character": { "abbrev" : "cc", "master_sizes" : ["v2","v3","v4","v9","m34"]},
         "Episode": { "abbrev" : "e", "master_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
         "Genre": { "abbrev" : "", "master_sizes" : ["h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9"]},
         "Iconic": { "abbrev" : "i", "master_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","m169","m43","m34","m21"]},
         "Key Art": { "abbrev" : "k", "master_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","v10","m169","m43","m34","m23","m21"]},
         "Program Logo": { "abbrev" : "l", "master_sizes" : ["h3","h5","h6","h7","h9","m43"]},
         "Logo": { "abbrev" : "", "master_sizes" : ["h3","h4","h5"]},

         "Photo": { "abbrev" : "", "master_sizes" : ["hc1","vc1"]},

         "Photo - headshot": { "abbrev" : "", "master_sizes" : ["v2","v3","v4","v9"]},

         "Poster Art": { "abbrev" : "", "master_sizes" : ["hc1","vc1"]},

         "Poster Art - gallery": { "abbrev" : "p", "master_sizes" : ["v2","v3","v4","v5","v6","v7","v8","v9","v10","m34","m23"]},
         "Source Logo - dark": { "abbrev" : "ld", "master_sizes" : ["h3","h4","h5","h6","h9","h15"]},
         "Source Logo - gray": { "abbrev" : "lg", "master_sizes" : ["h3","h4","h5","h6","h9","h15"]},
         "Source Logo - light": { "abbrev" : "ll", "master_sizes" : ["h3","h4","h5","h6","h9","h15"]},
         "Source Logo - white": { "abbrev" : "lw", "master_sizes" : ["h3","h4","h5","h6","h9","h15"]},
         "Sport Logo": { "abbrev" : "", "master_sizes" : ["h3","h5","h6","h9","h15"]},
         "Sport Logo - simple": { "abbrev" : "", "master_sizes" : ["h3","h5","h6","h9","h15"]},
         "Staple": { "abbrev" : "", "master_sizes" : ["h2","h3","h5","h6","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9"]},

         "Team Banner - L1": { "abbrev" : "", "master_sizes" : ["h3","h5","h6","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9"]},

         "Team Banner - L2": { "abbrev" : "", "master_sizes" : ["h3","h5","h6","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9"]},

         "Team Banner - L3": { "abbrev" : "", "master_sizes" : ["h3","h5","h6","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9"]},

         "VOD Art": { "abbrev" : "v", "master_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","v10","m169","m43","m34","m23","m21"]}

    }),
  };

  callback(null, response);
};

