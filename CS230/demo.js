const {mongoClient, MongoClient} = require('mongodb');

async function main(){

    //const uri = "mongodb+srv://james_greer:BrmD7YhAAx3v7g8@cluster-jg.bdcoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const uri = "mongodb+srv://james_greer:BrmD7YhAAx3v7g8@cluster-jg.bdcoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();

        await findCustomerByName(client, "James", "Greer");

        //await listAllCards(client);

        // await createNewCustomer(client, 
        //     {
        //         title: "Mr",
        //         first_name: "James",
        //         last_name: "Greer",
        //         mobile: "1234567890",
        //         email_address: "james@here.ie"
        //     });

        //await getCardFromMongo(client, 3, 3);

        //await deleteAllListingsScrapedBeforeDate(client, new Date("2019-02-15"));

        //await deleteListingByName(client, "Cosy Cottage");

        //await updateAllListingsToHavePropertyType(client);

        //await upsertListingByName(client, "Cosy Cottage", {name: "Cosy Cottage", bedrooms: 2, bathrooms: 2});

        //await listDatabases(client);

        //await findOneListingByName(client, "Infinite Views");

        // await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, 
        //     {
        //         minimumNumberOfBedrooms: 4,
        //         minimumNumberOfBathrooms: 2,
        //         maximumNumberOfResults: 5
        //     });

        //await updateListingByName(client, "Infinite Views", {bedrooms: 6, beds: 8});

        // await createMultipleListings(client, [
        //     {
        //         name: "Infinite Views",
        //         summary: "Modern home with infinite views from the infinity pool",
        //         property_type: "House",
        //         bedrooms: 5,
        //         bathrooms: 4.5,
        //         beds: 5
        //     },
        //     {
        //         name: "Private room in London",
        //         property_type: "Apartment",
        //         bedrooms: 1,
        //         bathroom: 1
        //     },
        //     {
        //         name: "Beautiful Beach House",
        //         summary: "Enjoy relaxed beach living in this house with a private beach",
        //         bedrooms: 4,
        //         bathrooms: 2.5,
        //         beds: 7,
        //         last_review: new Date()
        //     }
        // ]);
    }
    catch(e){
        console.error(e);
    }
    finally{
        await client.close();
    }
    
}

main().catch(console.error);

async function listAllCards(client){
    const foodcards = await client.db("FoodCards").collection("foodcards").find().toArray();
    
    console.log(foodcards[0].Cardobject[0]);

    
}

async function getCardFromMongo(client, cardType, rarity){
    const foodcards = await client.db("FoodCards").collection("foodcards").find().toArray();

    const result = foodcards[cardType].Cardobject[rarity];

    console.log(result);

    console.log(`Result: ${result.Card_Name} was pulled from database`);
}

async function deleteAllListingsScrapedBeforeDate(client, date){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
    .deleteMany({"last_scraped": {$lt: date}});

    console.log(`${result.deletedCount} document(s) was/were deleted`);
}


async function deleteListingByName(client, nameOfListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
    .deleteOne({name: nameOfListing});

    console.log(`${result.deletedCount} document(s) was/were deleted`);
}

async function updateAllListingsToHavePropertyType(client){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").updateMany(
        {property_type: {$exists: false}},
        {$set: {property_type: "Unknown"}});
        
    console.log(`${result.matchedCount} document(s) matched the query criteria`);
    console.log(`${result.modifiedCount} document(s) was/were updated`);
}

async function upsertListingByName(client, nameOfListing, updatedListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").updateOne({ name: nameOfListing }, { $set: updatedListing }, {upsert: true});

    console.log(`${result.matchedCount} document(s) matched the query criteria`);

    if(result.upsertedCount > 0){
        console.log(`One document was inserted with the id ${result.upsertedId}`);
    }
    else{
        console.log(`${result.modifiedCount} document(s) was/were updatred`);
    }
}

async function updateListingByName(client, nameOfListing, updatedListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").updateOne({ name: nameOfListing }, { $set: updatedListing });

    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}){
    const cursor = client.db("sample_airbnb").collection("listingsAndReviews").find(
        {
            bedrooms: {$gte: minimumNumberOfBedrooms},
            bathrooms: {$gte: minimumNumberOfBathrooms}
        }).sort({ last_review: - 1})
        .limit(maximumNumberOfResults);

    const results = await cursor.toArray();

    // Print the results
    if (results.length > 0) {
        console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
        results.forEach((result, i) => {
            const date = new Date(result.last_review).toDateString();

            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   bedrooms: ${result.bedrooms}`);
            console.log(`   bathrooms: ${result.bathrooms}`);
            console.log(`   most recent review date: ${date}`);
        });
    } else {
        console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
    }
}

async function findOneListingByName(client, nameOfListing){
    const result = await client.db("sample_airbnb").collection("listingAndReviews").findOne({name: nameOfListing});

    if(result){
        console.log(`Found a listing in the collection with the name of '${nameOfListing}'`);
        console.log(result);
    }
    else{
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

async function createMultipleListings(client, newListings){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

    console.log(`${result.insertedCount} new listings creating with the following id(s):`);
    console.log(result.insertedIds);
}

async function createListing(client, newListing){
    const result = await client.db("sample_airbnb").collection("listingAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function listDatabases(client){
    const databaseList = await client.db().admin().listDatabases();
    console.log("Databases");
    databaseList.databases.forEach(db =>{
        console.log(`- ${db.name}`);
    });
}

async function createNewCustomer(client, newCustomer){
    const result = await client.db("Assignment05").collection("customer_info").insertOne(newCustomer);
    console.log(`New customer created with the following id: ${result.insertedId}`);
}

async function findCustomerByName(client, customer_fname, customer_lname){
    const result = await client.db("Assignment05").collection("customer_info").findOne({first_name: customer_fname, last_name: customer_lname});
    console.log(result._id);
}

async function createNewHomeAddress(client, newHomeAddress){
    const result = await client.db("Assignment05").collection("home_address").insertOne(newHomeAddress);
    console.log(`New home_address created with the following id: ${result.insertedId}`);
}

async function createNewShippingAddress(client, newShippingAddress){
    const result = await client.db("Assignment05").collection("shipping_address").insertOne(newShippingAddress);
    console.log(`New shipping_address created with the following id: ${result.insertedId}`);
}

async function createNewOrder(client, newOrder, customer_id){
    const result = await client.db("Assignment05").collection("order_info").insertOne(newOrder, {customer_id: customer_id});
    console.log(`New Order created with the following id: ${result.insertedId}`);
}
