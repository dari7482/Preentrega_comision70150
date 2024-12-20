**API Documentation**

Endpoints  
Generate Data  
URL: http://localhost:8080/api/mocksData/generateData  
Method: GET  
Query Parameters:    
user : Number of users to save in the database.  
pet : Number of pets to save in the database.  
Description: Saves the specified number of users and pets to the database and returns the saved records.

Create Pets

URL: http://localhost:8080/api/mocks/pet/mokingpets/:quantity  
Method: GET  
Path Parameters:  
quantity: Number of pets to generate.   
Description: Generates the specified number of pet mock records.  

Create Users  
URL: http://localhost:8080/api/mocks/user/mokingUser/:quantity  
Method: GET  
Path Parameters:  
quantity: Number of users to generate.  
Description: Generates the specified number of user mock records.  
