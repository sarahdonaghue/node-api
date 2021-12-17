 Summary​: This API will store users ​names ​and ​ages​, and will have all the necessary endpoints to modify its fake database.

 -  Users can be added (POST) to the fake database.
- Users can be selected (GET) ​from​ the fake database, they are selected
by id.
- Users names can be updated (PUT) ​from​ the fake database, they are updated by id.
- Users can be deleted (DELETE) ​from​ the fake database, they are deleted​ by id.


// grab user data from request.body
// make a new user object to make sure we only grab relevant information
// add user object to the fake_database
