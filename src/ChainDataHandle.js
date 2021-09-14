const ObjectsToCsv = require("objects-to-csv-file");

function chaincsv(fileName, data)
{
	(async () => {
	  const csv = new ObjectsToCsv(data);

	  // Save to file:
	  await csv.toDisk(fileName);

	  // Return the CSV file as string:
	  //console.log(await csv.toString());
	})();
	
	
}

module.exports.chaincsv = chaincsv;