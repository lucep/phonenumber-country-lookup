//startsWith polyfill
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

(function (exports){
	var ca={}, c={}, lcl={};

	lcl["get_country_area_from_number"] = function (full_number){
		var lookup_str = full_number.toString();
		var lookup_arr = lookup_str.split("");
		var results = ca[lookup_arr[0]][lookup_arr[1]][lookup_arr[2]];
		if (typeof results == 'undefined')
			return lcl["get_country_code_from_number"](full_number);
		else if (results.length == 1){
			//only one result means that this should be the only result that can be returned
			return _format_lookup_result(results[0]);
		}else{
			//iterate through the array to try and match as many numbers as possible
			for (var i=0; i < results.length; i++){
				if (lookup_str.startsWith(results[i][4].toString())){
					return _format_lookup_result(results[i]);
				}
			}
			//if the end of this loop has been reached, then the area code cannot be determined and the best level that can be provided is country code
			return lcl["get_country_code_from_number"](full_number);
		}
	};

	lcl["get_country_code_from_number"] = function (full_number){
		var lookup_str = full_number.toString();
		//iterate through the country_list array
		for (var i=0; i < c.length; i++){
			if (lookup_str.startsWith(c[i][1]))
				return _format_lookup_result(c[i]);
		}
	};

	lcl["load_countryarea_data"] = function(countryarea){
		ca = countryarea;
	};
	lcl["load_country_data"] = function (country){
		c = country;
	};

	var _format_lookup_result = function(result_arr){
		/*
		ca arrays formatted as:
		0 - country name
		1 - area name
		2 - country code
		3 - area code
		4 - country code + city code
		*/

		if (result_arr.length == 5)
			return {"country_name": result_arr[0], "area_name": result_arr[1], "country_code": result_arr[2], "area_code": result_arr[3], "country_area_code": result_arr[4]};
		else
			return {"country_name":result_arr[0], "country_code":result_arr[1]};
	}

	exports["$lucep_country_lookup"] = lcl;	
})(window);


