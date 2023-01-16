# API's Testing
API testing is a type of software testing that focuses on determining whether the application programming interfaces (APIs) used in a system meet the requirements and function correctly. 
It involves testing the functionality, reliability, performance, and security of the API. 

### Client
A client is any computer hardware or software device that requests access to a service provided by a server. 

### Server
A server is a computer program or device that provides a service to another computer program and its user, also known as the client.

![client_and_server_requests_and_responses-f_mobile](https://user-images.githubusercontent.com/70509500/212598799-7f5214cd-8b11-46c3-b45f-5013e30c2c1b.png)

## Client and Server Architecture.
#### There are mainly three types of architecture:
- 1 - Tier Architecture.
- 2 - Tier Architecture.
- 3 - Tier Architecture.

### 1- Tier Architecture.
When we run client and server with the same machine which is come under in 1 - Tier architecture.
![Software-Architecture-Type-1tier](https://user-images.githubusercontent.com/70509500/212599051-ce5662ce-bf9d-4064-a8e3-8048323c0652.png)

### 2 - Tier Architecture.
When there are multiple clients on the first tier and all these clients access the services of the same server in a local environment, it is considered to be a 2-Tier architecture.
![1_z76hr15cj2CVVlWDNITV2A](https://user-images.githubusercontent.com/70509500/212599067-b3aee9a1-baa3-4c80-88eb-5b0c31622c07.png)

### 3 - Tier Architecture.
In 3-Tier architecture, the system is separated into three different tiers:
the **Client Tier**, the **Business Logic Tier**, and the **Database Tier**.\
![Software-Architecture-Type-3tier](https://user-images.githubusercontent.com/70509500/212599098-19add7cd-f8f1-477e-bc12-9588efee0cde.png)

In this architecture, the client accesses the database through the Business Logic Tier.\

Many web applications follow the 3-Tier architecture pattern,

*where the client communicates with the application through a user interface, the application's business logic is separated from the data storage and is handled by the middle tier, 
and the data is stored and retrieved from the database by the third tier*

