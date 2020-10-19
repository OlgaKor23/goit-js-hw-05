class Storage {
	constructor(items) {
		this.items = items;
	}

	getItems() {
		return this.items;
	}

	addItem(item) {
		this.items = this.items.concat(item);
	}

	removeItem(item) {
		const itemRemove = 'Пролонгер';
		const index = this.items.indexOf(itemRemove);
		this.items.splice(index, 1);
	}
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]