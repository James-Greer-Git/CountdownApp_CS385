const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://james_greer:BrmD7YhAAx3v7g8@cluster-jg.bdcoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const customerDoc = {
                title: "Mr",
                first_name: "James",
                last_name: "Greer",
                mobile: "1231234567",
                email: "james@here.ie",
                    home_address: {
                        address_line1: "james address line 1",
                        address_line2: "james address line 2",
                        town: "Maynooth",
                        county_city: "Kildare",
                        eircode: "W230A0A"
                    },
                    shipping_address: {
                        address_line1: "james address line 1",
                        address_line2: "james address line 2",
                        town: "Maynooth",
                        county_city: "Kildare",
                        eircode: "W230A0A"
                    }
            }

const mobileDoc = [
    {
    manufacturer: "Apple",
    model: "iPhone 13 Pro Max",
    price: "1249.99"
    },
    {
    manufacturer: "Samsung",
    model: "Galaxy S22 Ultra",
    price: "1299.99"
    },
    {
    manufacturer: "Apple",
    model: "iPhone 13",
    price: "869.99"
    },
    {
    manufacturer: "Google",
    model: "Pixel 6",
    price: "719.99"
    },
    {
    manufacturer: "Google",
    model: "Pixel 5a",
    price: "400.00"
    },
    {
    manufacturer: "BKK Electronics",
    model: "OnePlus 10 Pro",
    price: "1249.99"
    },
    {
    manufacturer: "Google",
    model: "Pixel 6 Pro",
    price: "1069.00"
    },
    {
    manufacturer: "Apple",
    model: "iPhone SE",
    price: "529.00"
    }
]

const orderDoc = {
    customerId: "6257f49107e8386b3c7c90e5",
    itemsOrdered: {
        
    }
}

async function run() {
    try {
        await client.connect();

        //const database = client.db("Assignment05");

        //const customers = database.collection("customer_info");

        //const mobiles = database.collection("mobile_info");

        //const orders = database.collection("order_info");

        //const result = await customers.insertOne(customerDoc);

        //const result = await mobiles.insertMany(mobileDoc);

        //console.log(`A document was inserted with the _id: ${result.insertedId}`);

        //await findCustomer(client, "James", "Greer");

        //await findOrderFromCustomerName(client, "James", "Greer");

        await findMobileFromModel(client, "iPhone 13");

        createNewOrderForCustomer(client, "James", "Greer", [
            {
                customerId: findCustomer(client, "James", "Greer")._id, 

            }
        ])

    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);

//create customer
async function createNewCustomer(client, newCustomer){
    const result = await client.db("Assignment05").collection("customer_info").insertOne(newCustomer);
    console.log(`New customer created with the following id: ${result.insertedId}`);
}
//read customer
async function findCustomer(client, customer_fname, customer_lname){
    const result = await client.db("Assignment05").collection("customer_info").findOne({first_name: customer_fname, last_name: customer_lname});
    console.log(result);
    return result;
}
//update customer
async function updateCustomerByName(client, customer_fname, customer_lname, updatedCustomer){
    const result = await client.db("Assignment05").collection("customer_info").updateOne({first_name: customer_fname, last_name: customer_lname}, { $set: updatedCustomer});
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}
//delete customer
async function deleteCustomerByName(client, customer_fname, customer_lname){
    const result = await client.db("Assignment05").collection("customer_info").deleteOne({first_name: customer_fname, last_name: customer_lname});
    console.log(`${result.deletedCount} documents(s) was/were deleted`);
}

//create order
async function createNewOrderForCustomer(client, customer_fname, customer_lname, newOrder){
    const customer = findCustomer(customer_fname, customer_lname);
    const customerId = customer._id;
    const result = await client.db("Assignment05").collection("order_info").insertOne(newOrder, {customerId: customer._id});
    console.log(`New order created with the following id: ${result.insertId}`);
}
//read order
async function findOrderFromCustomerName(client, customer_fname, customer_lname){
    const customer = findCustomer(customer_fname, customer_lname);
    const customerId = customer._id;
    const result = await client.db("Assignment05").collection("order_info").findOne({"_id": customerId});
    console.log(result);
}
//update order
//delete order

//create mobile
async function createNewMobile(client, newMobile){
    const result = await client.db("Assignment05").collection("mobile_info").insertOne(newMobile);
    console.log(`New order created with the following id: ${result.insertId}`);
}
//read mobile
async function findMobileFromModel(client, mobile_model){
    const result = await client.db("Assignment05").collection("mobile_info").findOne({model: mobile_model});
    console.log(result);
    return result;
}
//update mobile
async function updateMobileByModel(client, mobile_model, updatedMobile){
    const result = await client.db("Assignment05").collection("mobile_info").updateOne({model: mobile_model}, {$set: updatedMobile});
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}
//delete mobile
async function deleteMobileByModel(client, mobile_model){
    const result = await client.db("Assignment05").collection("mobile_info").deleteOne({model: mobile_model});
    console.log(`${result.deletedCount} documents(s) was/were deleted`);
}
