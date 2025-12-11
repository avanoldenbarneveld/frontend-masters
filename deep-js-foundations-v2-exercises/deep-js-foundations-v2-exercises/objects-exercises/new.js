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
    this.studentId = studentId
    return this.studentRecords.find(this.matchId.bind(this))
  },
  matchId(record) {
    return (record.id == this.studentId);
  },

  printRecords(recordIds) {
    let records = recordIds.map(this.getStudentFromId.bind(this));

    records.sort(this.sortByNameAsc);

    records.forEach(this.printRecord);
  },

  enrollPaidStudents() {
    this.currentEnrollment = this.paidStudentsToEnroll.bind(this);
    printCurrentEnrollment();
  }

}
