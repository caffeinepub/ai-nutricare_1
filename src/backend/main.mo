import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type PatientId = Nat;
  type Condition = Text;
  type FoodItem = Text;

  type Patient = {
    id : PatientId;
    name : Text;
    age : Nat;
    bmi : Float;
    bloodSugar : Float;
    cholesterol : Float;
    allergies : [FoodItem];
    dietaryPreferences : [Text];
    detectedConditions : [Condition];
  };

  module Patient {
    public func compare(p1 : Patient, p2 : Patient) : Order.Order {
      Nat.compare(p1.id, p2.id);
    };
  };

  type Meal = {
    name : Text;
    description : Text;
    calories : Float;
    protein : Float;
    carbs : Float;
    fat : Float;
  };

  type DayDietPlan = {
    dayNumber : Nat;
    breakfast : [Meal];
    lunch : [Meal];
    snack : [Meal];
    dinner : [Meal];
    nutritionalNotes : Text;
  };

  type DietPlan = {
    patientId : PatientId;
    dayDietPlans : [DayDietPlan];
  };

  type ReportStatus = {
    #pending;
    #analyzed;
    #archived;
  };

  type MedicalReport = {
    filename : Text;
    filetype : Text;
    uploadDate : Time.Time;
    status : ReportStatus;
  };

  let patients = Map.empty<PatientId, Patient>();
  let reports = Map.empty<PatientId, [MedicalReport]>();
  let dietPlans = Map.empty<PatientId, DietPlan>();

  var patientIdCounter = 0;

  public shared ({ caller }) func addPatient(
    name : Text,
    age : Nat,
    bmi : Float,
    bloodSugar : Float,
    cholesterol : Float,
    allergies : [FoodItem],
    dietaryPreferences : [Text],
    detectedConditions : [Condition],
  ) : async PatientId {
    let newId = patientIdCounter;
    let patient : Patient = {
      id = newId;
      name;
      age;
      bmi;
      bloodSugar;
      cholesterol;
      allergies;
      dietaryPreferences;
      detectedConditions;
    };

    patients.add(newId, patient);
    patientIdCounter += 1;
    newId;
  };

  public query ({ caller }) func getPatient(id : PatientId) : async Patient {
    switch (patients.get(id)) {
      case (null) { Runtime.trap("Patient not found") };
      case (?patient) { patient };
    };
  };

  public query ({ caller }) func getAllPatients() : async [Patient] {
    patients.values().toArray();
  };

  public shared ({ caller }) func uploadMedicalReport(
    patientId : PatientId,
    filename : Text,
    filetype : Text,
    status : ReportStatus,
  ) : async () {
    switch (patients.get(patientId)) {
      case (null) { Runtime.trap("Patient does not exist") };
      case (?_) {
        let report : MedicalReport = {
          filename;
          filetype;
          uploadDate = Time.now();
          status;
        };

        let currentReports = switch (reports.get(patientId)) {
          case (?r) { r };
          case (null) { [] };
        };

        reports.add(patientId, currentReports.concat([report]));
      };
    };
  };

  public query ({ caller }) func getPatientReports(patientId : PatientId) : async [MedicalReport] {
    switch (reports.get(patientId)) {
      case (null) { Runtime.trap("No reports found for patient") };
      case (?patientReports) { patientReports };
    };
  };

  public shared ({ caller }) func saveDietPlan(patientId : PatientId, dayDietPlans : [DayDietPlan]) : async () {
    switch (patients.get(patientId)) {
      case (null) { Runtime.trap("Patient does not exist") };
      case (?_) {
        let plan : DietPlan = {
          patientId;
          dayDietPlans;
        };
        dietPlans.add(patientId, plan);
      };
    };
  };

  public query ({ caller }) func getDietPlan(patientId : PatientId) : async DietPlan {
    switch (dietPlans.get(patientId)) {
      case (null) { Runtime.trap("Diet plan not found") };
      case (?plan) { plan };
    };
  };
};
