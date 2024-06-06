
// DATABASE NAME TEST

CREATE TABLE PrLineItems(
    id INT AUTO_INCREMENT PRIMARY KEY,
    suppliers VARCHAR (255),
    custOrgrId INT,
    purchaseRequestId INT
):



CREATE TABLE VendorUsers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    VendorOrganizationId INT,
    UserName VARCHAR(255),
    Name VARCHAR(255),
    Role VARCHAR (50)
)

INSERT INFO VendorUsers(VendorOrganizationId,UserName,Name,Role) VALUES
(1,"kjjg@gmail.com", "user one","admin")
(2,"kjlknkjg@gmail.com", "user two","admin")


INSERT INFO PrLineItems(suppliers,custOrgrId,purchaseRequestId)  VALUES
("1,2,3",1001,2001),
("2,3,4", 1002, 2002)