	//Part 1

	// let inventory = [
  //   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  //   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  //   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  //   { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  //   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  //   ];
  
  //   function getCarHonda(inventoryCars){
  
  //     let firstHonda = inventoryCars.find((elem) => elem.car_make === "Honda")  
  //     console.log(firstHonda)
  
  //     console.log(`This is a ${firstHonda.car_make} ${firstHonda.car_model} from ${firstHonda.car_year}`)
  //   }
  //   getCarHonda(inventory)
  
  //Part 2
  // let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];
  
  function sortCarInventoryByYear(carInventory){
  	let sortedByYearInventory = inventory.sort((a, b) => a.car_year - b.car_year);
  	console.log(sortedByYearInventory)
  
  }
  
  
  sortCarInventoryByYear(inventory)