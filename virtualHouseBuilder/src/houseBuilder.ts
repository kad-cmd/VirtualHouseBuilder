class House {
    // Private fields (using TypeScript's private fields syntax)
    private minHouseSize: number = 1000;
    private maxHouseSize: number = 5000;
    private minRooms: number = 2;
    private maxRooms: number = 6;

    // Public fields with types
    houseType: string;
    houseSize: number | null;
    rooms: number | null;
    bathrooms: number | null;
    kitchen: string | null;
    garage: string | null;
    livingRoom: string | null;
    diningRoom: string | null;
    bedRooms: string | null;
    laundryRoom: string | null;

    constructor(houseType: string = "basic House") {
        this.houseType = houseType;
        this.houseSize = null;
        this.rooms = null;
        this.bathrooms = null;
        this.kitchen = null;
        this.garage = null;
        this.livingRoom = null;
        this.diningRoom = null;
        this.bedRooms = null;
        this.laundryRoom = null;
    }

    getSpecs(): string {
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

    getDesc(): string {
        return `
        ${this.houseType} description: 
        ======================

        A customizable home with various layout options.`;
    }

    setSize(size: number | null): void {
        if (size && (size < this.minHouseSize || size > this.maxHouseSize)) {
            console.error(`Size must be between ${this.minHouseSize} and ${this.maxHouseSize} square feet.`);
            this.houseSize = null;
        } else {
            this.houseSize = size;
        }
    }

    getSize(): number | null {
        return this.houseSize;
    }

    setRooms(roomNum: number | null): void {
        if (roomNum && (roomNum < this.minRooms || roomNum > this.maxRooms)) {
            console.log(`Rooms must be between ${this.minRooms} and ${this.maxRooms}.`);
            this.rooms = null;
        } else {
            this.rooms = roomNum;
        }
    }

    getRooms(): number | null {
        return this.rooms;
    }

    kitchenAvaible(): string {
        return `
        Kitchen style
        =============

        Open concept, Closed concept
        `;
    }

    setKitchen(kitchen: string): void {
        this.kitchen = `${kitchen} with modern appliances.`;
    }

    getKitchen(): string | null {
        return this.kitchen;
    }

    setBathrooms(bathroomNumber: number): void {
        if (bathroomNumber < 1 || bathroomNumber > 3) {
            throw new Error("Bathrooms must be between 1 and 3.");
        }
        this.bathrooms = bathroomNumber;
    }

    getBathrooms(): number | null {
        return this.bathrooms;
    }

    buildHouse(): string {
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

class Ranch2 extends House {
    // Overriding private fields for the Ranch subclass
    private minHouseSize: number = 1200;
    private maxHouseSize: number = 2500;
    private minRooms: number = 4;
    private maxRooms: number = 10;

    constructor() {
        super("House");
        this.houseType = 'Ranch';
    }

    setSize(size: number | null): void {
        if (size && (size < this.minHouseSize || size > this.maxHouseSize)) {
            console.error(`${this.houseType} size must be between ${this.minHouseSize} and ${this.maxHouseSize}`);
            this.houseSize = null;
        } else {
            this.houseSize = size;
        }
    }

    setRooms(roomNum: number | null): void {
        if (roomNum && (roomNum < this.minRooms || roomNum > this.maxRooms)) {
            console.error(`Rooms must be between ${this.minRooms} and ${this.maxRooms}.`);
            this.rooms = null;
        } else {
            this.rooms = roomNum;
        }
    }

    getDesc(): string {
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

    garageAvailable(): string {
        return `
        Garage availability
        ===================

        attached, detached, or none 
        `;
    }

    setGarage(garage: string): void {
        this.garage = garage;
    }

    getGarage(): string | null {
        return this.garage;
    }
}

class FarmHouse2 extends House {
    constructor() {
        super();
        this.houseType = "FarmHouse";
    }
    
    getDesc(): string {
        return 'returning description...';
    }

    setSize(size: number | null): void {
        const minSize = 5;
        const maxSize = 10;
        if (size && (size < minSize || size > maxSize)) {
            console.error(`${this.houseType} size must be between ${minSize} and ${maxSize}`);
            this.houseSize = null;
        } else {
            this.houseSize = size;
        }
    }
}
