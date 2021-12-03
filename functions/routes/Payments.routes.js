const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");

// use firestore database
const db = admin.firestore();

// auth
router.all("./api/patients", (request, response, next) => {
  console.log("authenticated");
  next();
});

// post new Payment
router.post("/api/payments", async (request, response) => {
  // for the errors
  try {
    await db
      .collection("payments")
      .doc()
      .create({
        payment: ({
          patientname,
          paymentconcept,
          totalamount,
          paidamount,
          numberinstalments,
          date,
          paymentmethod,
        } = request.body),
      });
    return response.status(200).send(`message: Payment created successfully`);
  } catch {
    console.log(error);
    return response.status(500).send(error);
  }
});

// get 1 payment

router.get("/api/payments/:patient_id", (request, response) => {
  (async () => {
    try {
      const document = db.collection("payments").doc(request.params.patient_id);
      const item = await document.get();
      const res = item.data();
      return response.status(200).json(res);
    } catch (error) {
      return response.status(500).send(error);
    }
  })();
});

// get all patients

router.get("/api/payments", async (request, response) => {
  try {
    const query = db.collection("payments");
    const querySnapshot = await query.get();
    const docs = querySnapshot.docs;
    const res = docs.map((document) => ({
      id: document.id,
      patient_data: document.data(),
    }));
    return response.status(200).json(res);
  } catch (error) {
    return response.status(500).send(error);
  }
});

// delete one patient

router.delete("/api/payments/:patient_id", async (request, response) => {
  try {
    const document = db.collection("payments").doc(request.params.patient_id);
    await document.delete();
    return response.status(200).send(`message: payments deleted successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

//  update one patients ( using put)

router.put("/api/payments/:patient_id", async (request, response) => {
  try {
    const document = db.collection("payments").doc(request.params.patient_id);
    await document.update({
      payment: ({ patientname, paymentconcept } = request.body),
      // patientname: request.body.patientname,
      // paymentconcept: request.body.paymentconcept,
      // totalamount: request.body.totalamount,
      // paidamount: request.body.paidamount,
      // numberinstalments: request.body.numberinstalments,
      // date: request.body.date,
      // paymentmethod: request.body.paymentmethod,
    });
    return response.status(200).send(`message: Payment updated successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

module.exports = router;
