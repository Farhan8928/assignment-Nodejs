const express = require("express");
const pool = require("./db");

const app = express();
const port = 5000;

app.get("/api/getVendorUsers", async (req, res) => {
  const { prid, custOrgId } = req.query;
  if (!prid || !custOrgId) {
    return res.status(400).json({ error: "prid and custOrgId are required" });
  }
  try {
    const [rows] = await pool.query(
      `
            SELECT vu.VendorOrganizationId AS supplierId,vu.UserName,vu.UserName
            FROM PrLineItems pli
            JOIN VendorUsers vu
            ON FIND_IN_SET(vu.vendorOrganizationId, pli.suppliers
            WHERE Pli.purchaseRequestId=? AND pli.custOrgId=? And vu.Role="Admin"
            
        `,
      [prid, custOrgId]
    );
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

app.listen(port, () => {
  console.log("server started");
});
