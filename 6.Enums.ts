/**
 * Enums
 * named variables
 */

// Numeric enum
// uses index as values under the hood
enum Type {
  video,
  blog,
  quiz,
}

console.log(Type.quiz); // 2

function contentCreation(contentType: Type) {}

contentCreation(Type.video);
contentCreation(0); // WORKS 🤯
// contentCreation('Video'); // ERROR

// String enums
// They don't use index as values nor the
// string literals we provide as the values
enum JobType {
  manager = "MANAGER",
  engineer = "ENGINEER",
  office_staff = "OFFICE_STAFF",
}

console.log(JobType.engineer); // ENGINEER, ✋ not string 

function jobApplication(job: JobType) {}
jobApplication(JobType.engineer);
// jobApplication(1); // ERROR
// jobApplication("ENGINEER"); // ERROR
