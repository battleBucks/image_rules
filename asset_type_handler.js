'use strict';
//^p(?<program_id>\\d+)_b_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$
module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
         "Program": {
           "image_types" : {
             "Backdrop": { "abbrev" : "bd", "image_sizes" : ["h8","h10","h11","h12","h13","h14"], "filename_pattern":"^p(?<program_id>\\d+)_bd_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Banner": { "abbrev" : "b", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","s1","s2","s3","s4","m169","m43","m34","m21"], "filename_pattern":"^p(?<program_id>\\d+)_b_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Banner - level 2": { "abbrev" : "b", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","s1","s2","s3","s4","m169","m43","m34","m21"], "filename_pattern":"^p(?<program_id>\\d+)_b_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Banner - level 3": { "abbrev" : "b", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","s1","s2","s3","s4","m169","m43","m34","m21"], "filename_pattern":"^p(?<program_id>\\d+)_b_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Banner - logo only": { "abbrev" : "b", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","s1","s2","s3","s4","m169","m43","m34","m21"], "filename_pattern":"^p(?<program_id>\\d+)_b_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Banner - L1T": { "abbrev" : "b1t", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","s1","s2","s3","s4","m169","m43","m34","m21"], "filename_pattern":"^p(?<program_id>\\d+)_b1t_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Banner - L2T": { "abbrev" : "b2t", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","s1","s2","s3","s4","m169","m43","m34","m21"], "filename_pattern":"^p(?<program_id>\\d+)_b2t_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Banner - LOT": { "abbrev" : "blt", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","s1","s2","s3","s4","m169","m43","m34","m21"], "filename_pattern":"^p(?<program_id>\\d+)_blt_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Box Art": { "abbrev" : "d", "image_sizes" : ["v2","v3","v4","v5","v6","v7","v8","v9","v10","m34","m23"], "filename_pattern":"^p(?<program_id>\\d+)_d_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Cast Ensemble": { "abbrev" : "ce", "image_sizes" : ["h3","h5","h6","h7","h8","h9","h10","h11","h12","h13","h14","m169","m43"], "filename_pattern":"^p(?<program_id>\\d+)_ce_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Cast In Character": { "abbrev" : "cc", "image_sizes" : ["v2","v3","v4","v9","m34"], "filename_pattern":"^p(?<program_id>\\d+)_cc_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Episode": { "abbrev" : "e", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","s1","s2","s3","s4","m169","m43","m34","m21"], "filename_pattern":"^p(?<program_id>\\d+)_e_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Iconic": { "abbrev" : "i", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","s1","s2","s3","s4","m169","m43","m34","m21"], "filename_pattern":"^p(?<program_id>\\d+)_i_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Key Art": { "abbrev" : "k", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","v10","s1","s2","s3","s4","m169","m43","m34","m23","m21"], "filename_pattern":"^p(?<program_id>\\d+)_k_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Program Logo": { "abbrev" : "l", "image_sizes" : ["h3","h5","h6","h7","h9","m43"], "filename_pattern":"^p(?<program_id>\\d+)_l_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},

             "Photo": { "abbrev" : "", "image_sizes" : ["hc1","hc2","vc1","vc2"], "filename_pattern":"^(?<program_id>\\d+)_(?<sequence>[b][a-z])$"},

             "Poster Art": { "abbrev" : "", "image_sizes" : ["hc1","hc2","vc1","vc2"], "filename_pattern":"^(?<program_id>\\d+)_(?<sequence>[a][a-z])$"},

             "Poster Art - gallery": { "abbrev" : "p", "image_sizes" : ["v2","v3","v4","v5","v6","v7","v8","v9","v10","m34","m23"], "filename_pattern":"^p(?<program_id>\\d+)_p_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "VOD Art": { "abbrev" : "v", "image_sizes" : ["h1","h2","h3","h5","h6","h8","h9","h10","h11","h12","h13","h14","v2","v3","v4","v5","v6","v7","v8","v9","v10","s1","s2","s3","s4","m169","m43","m34","m23","m21"], "filename_pattern":"^p(?<program_id>\\d+)_v_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"}
           },//end image_types
           "master_file_formats" : ["JPEG"]
         },//end program

         "Person": {
           "image_types" : {
             "Photo - headshot": { "abbrev" : "", "image_sizes" : ["v2","v3","v4","v9"], "filename_pattern":"^(?<program_id>\\d+)_(?<image_size>r|[hvms]\\d+)_(?<sequence>[b][a-z])$"}
           },//end image_types
           "master_file_formats" : ["JPEG"]
         },//end person


         "Programming Service": {
           "image_types" : {
             "Logo": { "abbrev" : "", "image_sizes" : ["h3","h4","h5"], "filename_pattern":"^s(?<program_id>\\d+)_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Source Logo - dark": { "abbrev" : "ld", "image_sizes" : ["h3","h4","h5","h6","h9","h15"], "filename_pattern":"^s(?<program_id>\\d+)_ld_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Source Logo - gray": { "abbrev" : "lg", "image_sizes" : ["h3","h4","h5","h6","h9","h15"], "filename_pattern":"^s(?<program_id>\\d+)_lg_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Source Logo - light": { "abbrev" : "ll", "image_sizes" : ["h3","h4","h5","h6","h9","h15"], "filename_pattern":"^s(?<program_id>\\d+)_ll_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Source Logo - white": { "abbrev" : "lw", "image_sizes" : ["h3","h4","h5","h6","h9","h15"], "filename_pattern":"^s(?<program_id>\\d+)_lw_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"}
           },//end image_types
           "master_file_formats" : ["PNG"]
         },//end programming service

         "Team": {
           "image_types" : {
             "Sport Logo": { "abbrev" : "l", "image_sizes" : ["h3","h5","h6","h9","h15"], "filename_pattern":"^t(?<program_id>\\d+)_l_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Sport Logo - simple": { "abbrev" : "sl", "image_sizes" : ["h3","h5","h6","h9","h15"], "filename_pattern":"^t(?<program_id>\\d+)_sl_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"}
           },//end image_types
           "master_file_formats" : ["PNG"]
         },//end team

         "Conference": {
           "image_types" : {
             "Sport Logo": { "abbrev" : "l", "image_sizes" : ["h3","h5","h6","h9","h15"], "filename_pattern":"^c(?<program_id>\\d+)_l_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Sport Logo - simple": { "abbrev" : "sl", "image_sizes" : ["h3","h5","h6","h9","h15"], "filename_pattern":"^c(?<program_id>\\d+)_sl_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"}
           },//end image_types
           "master_file_formats" : ["PNG"]
         },//end conference

         "Organization": {
           "image_types" : {
             "Sport Logo": { "abbrev" : "l", "image_sizes" : ["h3","h5","h6","h9","h15"], "filename_pattern":"^o(?<program_id>\\d+)_l_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Sport Logo - simple": { "abbrev" : "sl", "image_sizes" : ["h3","h5","h6","h9","h15"], "filename_pattern":"^o(?<program_id>\\d+)_sl_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"}
           },//end image_types
           "master_file_formats" : ["PNG"]
         },//end organization

         "College": {
           "image_types" : {
             "Sport Logo": { "abbrev" : "l", "image_sizes" : ["h3","h5","h6","h9","h15"], "filename_pattern":"^u(?<program_id>\\d+)_l_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"},
             "Sport Logo - simple": { "abbrev" : "sl", "image_sizes" : ["h3","h5","h6","h9","h15"], "filename_pattern":"^u(?<program_id>\\d+)_sl_(?<image_size>r|[hvms]\\d+)_(?<sequence>[a-z]{2})$"}
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

