'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
         "h1": {"aspect_ratio":"2:1", "width":1024, "height":512},
         "h2": {"aspect_ratio":"2:1", "width":2048, "height":1024},
         "h3": {"aspect_ratio":"4:3", "width":360, "height":270},
         "h4": {"aspect_ratio":"4:3", "width":90, "height":67},
         "h5": {"aspect_ratio":"4:3", "width":180, "height":135},
         "h6": {"aspect_ratio":"4:3", "width":720, "height":540},
         "h7": {"aspect_ratio":"4:3", "width":267, "height":200},
         "h8": {"aspect_ratio":"16:9", "width":3840, "height":2160},
         "h9": {"aspect_ratio":"4:3", "width":1440, "height":1080},
         "h10": {"aspect_ratio":"16:9", "width":1920, "height":1080},
         "h11": {"aspect_ratio":"16:9", "width":1280, "height":720},
         "h12": {"aspect_ratio":"16:9", "width":960, "height":540},
         "h13": {"aspect_ratio":"16:9", "width":480, "height":270},
         "h14": {"aspect_ratio":"16:9", "width":240, "height":135},
         "h15": {"aspect_ratio":"4:3", "width":3200, "height":2400},
         "hc1": {"aspect_ratio":"3:2", "width":432, "height":288},
         "hc2": {"aspect_ratio":"3:2", "width":108, "height":72},
         "s1": {"aspect_ratio":"1:1", "width":700, "height":700},
         "s2": {"aspect_ratio":"1:1", "width":1400, "height":1400},
         "s3": {"aspect_ratio":"1:1", "width":2000, "height":2000},
         "s4": {"aspect_ratio":"1:1", "width":3000, "height":3000},
         "v1": {"aspect_ratio":"5:6", "width":200, "height":240},
         "v2": {"aspect_ratio":"3:4", "width":135, "height":180},
         "v3": {"aspect_ratio":"3:4", "width":270, "height":360},
         "v4": {"aspect_ratio":"3:4", "width":540, "height":720},
         "v5": {"aspect_ratio":"2:3", "width":240, "height":360},
         "v6": {"aspect_ratio":"2:3", "width":120, "height":180},
         "v7": {"aspect_ratio":"2:3", "width":480, "height":720},
         "v8": {"aspect_ratio":"2:3", "width":960, "height":1440},
         "v9": {"aspect_ratio":"3:4", "width":1080, "height":1440},
         "v10": {"aspect_ratio":"3:4", "width":1536, "height":2048},
         "v11": {"aspect_ratio":"2:3", "width":1280, "height":1920},
         "v12": {"aspect_ratio":"2:3", "width":1920, "height":2880},
         "v13": {"aspect_ratio":"3:4", "width":2160, "height":2880},
         "v18": {"aspect_ratio":"9:13", "width":180, "height":260},
         "vc1": {"aspect_ratio":"2:3", "width":288, "height":432},
         "vc2": {"aspect_ratio":"2:3", "width":72, "height":108}
    }),
  };

  callback(null, response);
};

