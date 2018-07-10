'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
/*
        "4:3": {
            "orientation":"horizontal",
            "image_sizes":["h3","h4","h5","h6","h7","h9","h15"]
        },
        "3:4": {
            "orientation":"vertical",
            "image_sizes":["v2","v3","v4","v9","v10","v13"]
        }
*/
        "16:9": { "orientation":"horizontal", "image_sizes":["h8","h10","h11","h12","h13","h14"]},
        "1:1": { "orientation":"square", "image_sizes":["s1,","s2","s3","s4"]},
        "2:1": { "orientation":"horizontal", "image_sizes":["h2","h1"]},
        "2:3": { "orientation":"vertical", "image_sizes":["v5","v6","v7","v8","v11","v12","vc1","vc2"]},
        "3:2": { "orientation":"horizontal", "image_sizes":["hc1","hc2"]},
        "3:4": { "orientation":"vertical", "image_sizes":["v2","v3","v4","v9","v10","v13"]},
        "4:3": { "orientation":"horizontal", "image_sizes":["h3","h4","h5","h6","h7","h9","h15"]},
        "5:6": { "orientation":"vertical", "image_sizes":["v1"]},
        "9:13": { "orientation":"vertical", "image_sizes":["v18"]}
    }),
  };

  callback(null, response);
};

