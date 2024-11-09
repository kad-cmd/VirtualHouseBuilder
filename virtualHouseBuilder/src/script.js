class Ranch {
    #maxHouseSize = 1700;
    #minHouseSize = 1300; 

   
 constructor(houseType = "ranch") {
        this.houseType = houseType;
        this.houseSize = null;
        this.kitchen = null; 
        this.garage = null; 
        this.rooms = null;
        this.bathrooms = null;
    }
    getSpecs() {
        return `
        ${this.houseType}'s Features
        ===================

        Layout: Single-story layout.
        Size: ${this.#minHouseSize} to ${this.#maxHouseSize} square feet.
        Rooms: 3 - 4.
        Bathrooms: 1 - 2.
        `;
    }

    getDesc() {
        return `
        ${this.houseType}'s Description
        ===================

        A single-story style of house. Larger than a bungalow and rectangular in layout.
        `;
    }

    setBathrooms(bathroomNumber) {
        if (bathroomNumber < 1 || bathroomNumber > 2) {
            throw new Error("Bathrooms must be between 1 and 2.");
        }
        this.bathrooms = bathroomNumber;
    }
    getBathrooms() {
        return this.bathrooms;
    }

    setRooms(roomNumber) {
        if (roomNumber < 3 || roomNumber > 4) {
            throw new Error("Rooms must be between 3 and 4.");
        }
        this.rooms = roomNumber;
    }
    getRooms() {
        return this.rooms;
    }

    setSize(size) {
        if (size < this.#minHouseSize || size > this.#maxHouseSize) {
            throw new Error(`Size must be between ${this.#minHouseSize} and ${this.#maxHouseSize} square feet.`);
        }
        return this.houseSize = size;
    }
    getSize() {
        return this.houseSize;
    }

    setGarage(garage) {
        this.garage = garage;
    }
    getGarage() {
        return this.garage;
    }

    buildHouse() {
        return `
        Building.....

        House Type: ${this.houseType}
        Rooms: ${this.rooms}
        Bathrooms: ${this.bathrooms}
        Kitchen: ${this.kitchen ? this.kitchen : 'Not specified'}
        Garage: ${this.garage ? this.garage : 'Not specified'}
        Backyard: ${this.backyard ? this.backyard : 'Not specified'} (yards)

        The House size: ${this.houseSize} square feet.
        `;
    }
}


const ranchHouse = new Ranch();
ranchHouse.setRooms(4);
ranchHouse.setBathrooms(2);
ranchHouse.setSize(1470);
ranchHouse.setGarage('');
ranchHouse.kitchen = 'Open concept'; 
console.log(ranchHouse.buildHouse());