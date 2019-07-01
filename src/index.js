/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var triangleCount = 0;
	var i=0;
  	for(i=0;i<preferences.length;i++){
		if(preferences[i]>0&&preferences[i]!=(i+1)){
			if(preferences[preferences[preferences[i]-1]-1]==(i+1)){
				//alert(preferences[preferences[preferences[i]-1]-1]+" "+preferences[preferences[i]-1]+" "+preferences[i]);
				preferences[preferences[preferences[i]-1]-1]=0;
				preferences[preferences[i]-1]=0;
				preferences[i]=0;
				triangleCount++;
        	}
		}
  	}
  	return triangleCount;
};