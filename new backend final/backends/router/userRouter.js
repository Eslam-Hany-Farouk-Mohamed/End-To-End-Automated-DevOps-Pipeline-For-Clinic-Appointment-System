import express from "express";
import {
  getUserDetails,
  logoutAdmin,
  logoutPatient,
  patientRegister,
  login,
  addNewAdmin,
  getAllDoctors,
  addNewDoctor,
} from "../controller/userController.js";

import {
  isPatientAuthenticated,
  isAdminAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

// Simple test route
router.get("/test", (req, res) => {
  res.json({ message: "user router is working" });
});

// -------------------------
// Auth & registration
// -------------------------

// Generic login (works for admin, doctor, patient)
router.post("/login", login);

// Admin login alias
router.post("/admin/login", login);

// Patient login alias
router.post("/patient/login", login);

// Patient registration
router.post("/patient/register", patientRegister);

// -------------------------
// Admin-only operations
// -------------------------

router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

// -------------------------
// Patient-only operations
// -------------------------

router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);

// -------------------------
// Doctors
// -------------------------

router.get("/doctors", getAllDoctors);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);

export default router;
