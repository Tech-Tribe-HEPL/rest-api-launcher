// Function to load JSON data from file and insert into the collection
function loadAndInsertData(dbName, collectionName, filePath) {
    const data = JSON.parse(cat(filePath));
    db = db.getSiblingDB(dbName);
    db[collectionName].drop(); // Drop the collection if it already exists
    db.createCollection(collectionName);
    db[collectionName].insertMany(data);
}

loadAndInsertData('authentication-srv', 'auth_request', '/docker-entrypoint-initdb.d/auth_request.json');
loadAndInsertData('authentication-srv', 'user', '/docker-entrypoint-initdb.d/user.json');