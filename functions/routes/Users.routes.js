const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");

const db = admin.firestore();

//  post new user
router.post("/api/users", async (request, response) => {
  // for the errors
  try {
    await db
      .collection("users")
      .doc()
      .create({
        user_data: ({
          fullname,
          birthdate,
          address,
          phonenumber,
          checkinhour,
          departuretime,
          profilephoto,
        } = request.body),
      });
    return response.status(200).send(`message: user created successfully`);
  } catch {
    console.log(error);
    return response.status(500).send(error);
  }
});

// get 1 user

router.get("/api/users/:user_id", (request, response) => {
  (async () => {
    try {
      const document = db.collection("users").doc(request.params.user_id);
      const item = await document.get();
      const res = item.data();
      return response.status(200).json(res);
    } catch (error) {
      return response.status(500).send(error);
    }
  })();
});

// get all users

router.get("/api/users", async (request, response) => {
  try {
    const query = db.collection("users");
    const querySnapshot = await query.get();
    const docs = querySnapshot.docs;
    const res = docs.map((document) => ({
      id: document.id,
      item_data: document.data(),
    }));
    return response.status(200).json(res);
  } catch (error) {
    return response.status(500).send(error);
  }
});

// delete one item

router.delete("/api/users/:user_id", async (request, response) => {
  try {
    const document = db.collection("users").doc(request.params.user_id);
    await document.delete();
    return response.status(200).send(`message: user deleted successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

//  update one item ( using put)

router.put("/api/users/:user_id", async (request, response) => {
  try {
    const document = db.collection("users").doc(request.params.user_id);
    await document.update({
      user_data: ({
        fullname,
        birthdate,
        address,
        phonenumber,
        checkinhour,
        departuretime,
        profilephoto,
      } = request.body),
    });
    return response.status(200).send(`message: item updated successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

module.exports = router;
