/*
Utilizzando il Database Nortwind, scaricato ed opportunamente importato in SQL Server, creare le seguenti istruzioni SQL:

1) Numero totale degli ordini,

2) Numero totale di clienti,

3) Numero totale di clienti che abitano a Londra,

4) La media aritmetica del costo del trasporto di tutti gli ordini effettuati

5) La media aritmetica del costo del trasporto dei soli ordini effettuati dal cliente "BOTTM"

6) Totale delle spese di trasporto effettuate raggruppate per id cliente

7) Numero totale di clienti raggruppati per città di appartenenza

8) Totale di UnitPrice * Quantity raggruppato per ogni ordine

9) Totale di UnitPrice * Quantity solo dell'ordine con id=10248

10) Numero di prodotti censiti per ogni categoria 

11) Numero totale di ordini raggruppati per paese di spedizione (ShipCountry)

12) La media del costo del trasporto raggruppati per paese di spedizione (ShipCountry)

*/



SELECT COUNT(*) FROM Orders as [Numero totale ordini]

SELECT COUNT(*) FROM Customers as [Numero totale di clienti]

SELECT COUNT(*) FROM Customers as [Numero totale Londinesi] WHERE City = 'London' 

SELECT AVG(Freight) FROM Orders as [AVG costi trasporti]

SELECT AVG(Freight) FROM Orders as [AVG costi trasporti cliente BOTTM] WHERE CustomerID = 'BOTTM'

SELECT CustomerID, SUM(Freight) FROM Orders as [Totale spese trasporto per cliente]  GROUP BY CustomerID 

SELECT City, COUNT(*) FROM Customers as [Numero clienti per città] GROUP BY City 

SELECT OrderID, SUM(UnitPrice * Quantity) FROM [Order Details] as [TotUnitPrice * Quantity Ordr] GROUP BY OrderID 

SELECT OrderID, SUM(UnitPrice * Quantity) FROM [Order Details] as [TotUnitPrice * Quantity Ordr 10248] WHERE OrderID = 10248 GROUP BY OrderID 

SELECT CategoryID, COUNT(*) FROM Products as [Numero prodotti per categoria] GROUP BY CategoryID 

SELECT ShipCountry, COUNT(*) FROM Orders  as [Numero ordini per paese] GROUP BY ShipCountry 

SELECT ShipCountry, AVG(Freight) FROM Orders as [avg costi trasporti] GROUP BY ShipCountry 