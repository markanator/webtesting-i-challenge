module.exports = {
	success,
	fail,
	repair,
	get,
};

// item {
// name
// enhancement 0-20,
// * success: increments, max 20, no affect on durability
// ! fail:>15 = durability -5 || >15 = durability-10
// ! fail: >16 = enhancement -1
// durability: 0-100,
// }
function repair(item) {
	// durability to 100
	item.durability = 100;
	return { ...item };
}

function success(item) {
	const newItem = { ...item };
	const { enhancement } = newItem;
	// enhancement 0-20,
	// * success: increments enhancement, max 20, no affect on durabilit
	if (enhancement < 20) {
		newItem.enhancement++;
	}
	return { ...newItem };
}

function fail(item) {
	const newItem = { ...item };

	if (item.enhancement > 16) {
		newItem.enhancement = item.enhancement - 1;
	}

	if (item.enhancement >= 15) {
		// let check that we dont go NEG
		if (item.durability >= 10) {
			newItem.durability = item.durability - 10;
		} else {
			// else, if uner 10 we return a ZERO
			newItem.durability = 0;
		}
	} else {
		if (item.durability >= 5) {
			newItem.durability = item.durability - 5;
		} else {
			// else, if uner 5 we return a ZERO
			newItem.durability = 0;
		}
	}
	return { ...newItem };
}

function get(item) {
	return { ...item };
}
