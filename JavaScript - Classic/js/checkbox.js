const adons = [
	{
		name: "Vanilla Syrup",
		price: 7.0,
	},
	{
		name: "Whipped Cream",
		price: 15.75,
	},
	{
		name: "sprinkles",
		price: 13.5,
	},
	{
		name: "Mocha Drizzle",
		price: 18.25,
	},
];
const extras = [
	{
		name: "Tissue",
		price: 15,
	},
	{
		name: "Paper Bag",
		price: 20,
	},
];
const form = document.querySelector("#form");
adons.forEach((addon) => {
	//create a div element as a container
	const container = document.createElement("div");
	//set a class name (optional)
	container.setAttribute("class", "input-group");

	//create an element of label and input
	const label = document.createElement("label");
	const list = document.createElement("input");

	//append a div element to
	form.append(container);
	//append an input checkbox element
	container.append(list);
	list.setAttribute("type", "checkbox");

	//set value price on input checkbox element
	list.setAttribute("value", addon.price);
	//set class on input checkbox element
	list.setAttribute("class", "adonsitems");
	//apend a label element
	container.append(label);
	//set className on label element
	label.setAttribute("class", "labelname");
	//set a text value on label element
	label.innerText = addon.name + " = " + addon.price;
});

//same process to ad-ons. just repeat it
extras.forEach((size) => {
	//create a div element as a container
	const container = document.createElement("div");
	//set a class name (optional)
	container.setAttribute("class", "input-group");

	//create an element of label and input
	const label = document.createElement("label");
	const list = document.createElement("input");

	//append a div element to
	form.append(container);
	//append an input checkbox element
	container.append(list);
	list.setAttribute("type", "checkbox");

	//set value price on input checkbox element
	list.setAttribute("value", size.price);
	//set class on input checkbox element
	list.setAttribute("class", "extrasitems");
	//apend a label element
	container.append(label);
	//set className on label element
	label.setAttribute("class", "labelname");
	//set a text value on label element
	label.innerText = size.name + " = " + size.price;
});

const adonsitems = document.querySelectorAll(".adonsitems");
const extrasitems = document.querySelectorAll(".extrasitems");

// create a foreach input using its classname
adonsitems.forEach((adonsitem) => {
	//each input must have a click/change event so we will..
	//create an eventlistener click/change
	adonsitem.addEventListener("change", () => {
		let adonsTotal = 0;
		let checkedAdons = [];

		//use 'for loop' to repeat the number of process in how many input can be clicked
		for (let i = 0; i < adonsitems.length; i++) {
			//create an if statement
			//logic: if an input is checked, the adonstotal value will add to the total value else it will not add/sum/accumulate
			if (adonsitems[i].type === "checkbox" && adonsitems[i].checked) {
				adonsTotal += parseFloat(adonsitems[i].value);
				//it will push the chcked value else it will be removed from the array
				checkedAdons.push(adonsitems[i].value);
				console.log(checkedAdons);
			}
		}
		//display the ads-on value
		document.getElementsByName("Adons")[0].value = adonsTotal.toFixed(2);
	});
});

extrasitems.forEach((extrasitem) => {
	extrasitem.addEventListener("change", () => {
		let extrasTotal = 0;
		let checkedExtras = [];

		for (let i = 0; i < extrasitems.length; i++) {
			if (extrasitems[i].type === "checkbox" && extrasitems[i].checked) {
				extrasTotal += parseFloat(extrasitems[i].value);
				checkedExtras.push(extrasitems[i].value);
				console.log(checkedExtras);
			}
		}

		document.getElementsByName("Extras")[0].value = extrasTotal.toFixed(2);
	});
});

form.addEventListener("change", () => {
	let a = document.getElementsByName("Adons")[0].value;
	let b = document.getElementsByName("Extras")[0].value;
	let c = document.getElementsByName("TotalValue")[0];

	let total = parseFloat(a) + parseFloat(b);
	c.setAttribute("value", total);
	console.log(total.toFixed(2));
});
