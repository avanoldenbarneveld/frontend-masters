let deepJS = {
  currentEnrollment: [],
  studentRecords: [],
  addStudent(id, name, paid) {
    this.studentRecords.push({ id, name, paid })
  },
  enrollStudent(id) {
    if (!this.currentEnrollment.includes(id)) {
      this.currentEnrollment.push(id);
    }
  },
  printCurrentEnrollment() {
    this.printRecords(this.currentEnrollment)
  },
  enrollPaidStudents() {
    this.currentEnrollment = this.paidStudentsToEnroll();
    this.printCurrentEnrollment();
  },
  remindUnpaidStudents() {
    this.remindUnpaid(this.currentEnrollment);
  },
  getStudentFromId(studentId) {
    return this.studentRecords.find(this.matchId)
  },
  matchId(record) {
    return (record.id == studentId);
  }
}
