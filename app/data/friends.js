module.exports = [
	
	{
		name: "anon",
		photo: "https://images.pexels.com/photos/1852389/pexels-photo-1852389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		answers: [3, 1, 1, 1, 5, 4, 1, 4, 4, 5]
	},
	{
		name: "Lorrie Taylor",
		photo: "https://images.pexels.com/photos/2530588/pexels-photo-2530588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		answers: [5, 4, 5, 1, 1, 5, 1, 5, 5, 5]
	},
	{
		name: "Yes Man",
		photo: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		answers: [4, 1, 2, 1, 5, 5, 1, 5, 5, 5]
	}

];
module.exports.push2arr = function(data) {
	module.exports.allFriends.push(data);
}

