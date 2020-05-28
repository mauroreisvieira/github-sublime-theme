-- Insert Example
INSERT INTO Yearly_Orders
SELECT * FROM Orders
WHERE Date<=1/1/2018

-- Select Example
SELECT COUNT(ID), Region
FROM Customers
GROUP BY Region
HAVING COUNT(ID) > 0;

-- Update Example
UPDATE customers
SET first_name = 'Judy'
WHERE customer_id = 8000;
