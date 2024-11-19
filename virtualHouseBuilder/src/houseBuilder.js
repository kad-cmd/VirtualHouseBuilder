class House {
    #minHouseSize = 1000;
    #maxHouseSize = 5000;
    #minRooms = 2
    #maxRooms = 6

    constructor(houseType = "basic House") {
        this.houseType = houseType;
        this.houseSize = null;
        this.rooms = null; // count of all the rooms together.
        this.bathrooms = null;
        this.kitchen = null;
        this.garage = null;
    }

    getSpecs() {
        return `
        Specifications for ${this.houseType}:
        =========================

        Size: ${this.houseSize || "Not Specified"} square feet.

        Living Room: ${this.livingRoom || "Not Specified"}
        Kitchen: ${this.kitchen || "Not Specified"}
        Dining Room: ${this.diningRoom || "Not Specified"}
        Bedrooms: ${this.bedRooms || "Not Specified"}
        Bathrooms: ${this.bathrooms || "Not Specified"}
        Laundry Room: ${this.laundryRoom || "Not Specified"}
        Garage: ${this.garage || "Not specified"}
        `;
    }

    getDesc() {
        return `
        ${this.houseType} description: 
        ======================

        A customizable home with various layout options.`;
    }

    setSize(size) {
        if (size < this.#minHouseSize || size > this.#maxHouseSize) {
            console.error(`Size must be between ${this.#minHouseSize} and ${this.#maxHouseSize} square feet.`);
            size = null;
        }
        this.houseSize = size;
    }
    getSize() { return this.houseSize; }

    // change this to be the count of all of the rooms (living room, bedroom, laundry room..etc)
    setRooms(roomNum) {
        if (roomNum < this.#minRooms || roomNum > this.#maxRooms) {
            console.log(`Rooms must be between ${this.#minRooms} and ${this.#maxRooms}.`);
            roomNum = null;
        }
        this.rooms = roomNum;
    }
    getRooms() { return this.rooms; }


    kitchenAvaible() {
        return `
        Kitchen style
        =============

        Open concept, Closed concept
        `
    }
    setKitchen(kitchen) {
        this.kitchen = `${kitchen} with modern appliances.`;
    }
    getKitchen() { return this.kitchen }

    setBathrooms(bathroomNumber) {
        if (bathroomNumber < 1 || bathroomNumber > 3) {
            throw new Error("Bathrooms must be between 1 and 3.");
        }
        this.bathrooms = bathroomNumber;
    }
    getBathrooms() { return this.bathrooms; }

    buildHouse() {
        return `
        Building Your ${this.houseType}...
        
        House Type: ${this.houseType}
        Size: ${this.houseSize || "Not specified"} square feet
        Rooms: ${this.rooms || "Not specified"}
        Bathrooms: ${this.bathrooms || "Not specified"}
        Kitchen: ${this.kitchen || "Not specified"}
        Garage: ${this.garage || "Not specified"}
        `;
    }
}

class Ranch extends House {
    #minHouseSize = 1200;
    #maxHouseSize = 2500;
    #minRooms = 4;
    #maxRooms = 10;

    constructor() {
        super("House");
        this.houseType = 'Ranch';
    }

    setSize(size) {
        if (size < this.minHouseSize || size > this.maxHouseSize) {
            console.error(`${this.houseType} size must be between ${this.#minHouseSize} and ${this.#maxHouseSize}`);
            size = null;
        }
        this.houseSize = size;
    }

    setRooms(roomNum) {
        if (roomNum < this.#minRooms || roomNum > this.#maxRooms) {
            console.error(`Rooms must be between ${this.#minRooms} and ${this.#maxRooms}.`);
            roomNum = null;
        }
        this.rooms = roomNum;
    }

    getDesc() {
        return `
        ${this.houseType} Description:
        ===================

            A ranch house is a style of single-story house that originated in the United States in the 1920s and became very 
            popular in the 1950s and 1960s. Ranch houses are known for their long, low profile, open floor plans, and connection
            to the outdoors.

            size typically ranges between 1200 to 2500 square feet.
        
        Typical Rooms in a Ranch House:

            Living Room: A main area for relaxing and entertaining.
            Kitchen: Usually open to the dining area in an open floor plan.
            Dining Room: Often combined with the kitchen in an open plan.
            Bedrooms: Typically 2-4 bedrooms, with at least one being a master bedroom.
            Bathrooms: At least one full bathroom (with a tub/shower), though many ranch houses will have 1.5 or 2 bathrooms.
            Laundry Room: A separate area for laundry and utilities (not always included, but common in many designs).

            So, the minimum number of rooms would generally be around 4 or 5 rooms, which could include:

            A living room
            A kitchen/dining area
            A bedroom (at least one)
            A bathroom (at least one)
            A Laundry Room

        Garage: It is typically either an attached or detached garage. 

            Attached Garage: 
                In many ranch homes, the garage is attached to the house, either at the front or side. 
                This allows easy access to the house from the garage.
            Detached Garage: 
                In some ranch homes, especially in older designs or rural areas, the garage may be 
                detached from the main house and located in the backyard or side yard.
            Size: 
                The garage may be a single-car garage (enough for one car), double-car garage (enough for two cars), 
                or even larger depending on the size of the home and the homeowner's needs. It's also common for 
                the garage to have extra space for storage, a workbench, or even a small workshop area.
        `;
    }
    
    garageAvailable() {
        return `
        Garage availability
        ===================

        attached, detached, or none 
        `
    }
    setGarage(garage) { this.garage = garage; }
    getGarage() { return this.garage; }
}

class FarmHouse extends House {
    constructor() {
        super();
        this.houseType = "FarmHouse";
    }
    
    getDesc() {
        return 'returning description...'
    }

    setSize(size) {
        const minSize = 5;
        const maxSize = 10;
        if (size < minSize || size > maxSize) {
            console.error(`${this.houseType} size must be between ${minSize} and ${maxSize}`);
            size = null;
        }
        return this.houseSize = size;
    }
}

const myRanchHouse = new Ranch();
myRanchHouse.setRooms(8);
console.log(myRanchHouse.getDesc())
